import express from 'express';
import Geo from '../services/GeoServices';
import * as appContants from '../services/appConstants';
    
export default class LocationRoutes{

    constructor(UserModel, LocationModel){
        this.UserModel = UserModel;
        this.LocationModel = LocationModel;
        this.geo = new Geo();
    }

    routes(){
        const locationRouter = express.Router();

        locationRouter.route('/')
            .get((req, res)=>{  
                const user_id = req.query.user_id;
                if(Number.isInteger(parseInt(user_id))){
                    this.fetchLocations(res, user_id);
                }
            });   


        locationRouter.route('/:id')
            .put((req, res)=>{  
                const {id} = req.params;
                const {user_id, title, address, lat, lng} = req.body;

                try{
                    if(!(Number.isInteger(parseInt(id)))){
                        throw new Error('invalid location_id');
                    }

                    if(!user_id){
                        throw new Error('user_id required');
                    }

                    if(!title){
                        throw new Error('title required');
                    }

                    if(!address){
                        throw new Error('address required');
                    }

                    if(!lat){
                        throw new Error('lat required');
                    }

                    if(!lng){
                        throw new Error('lat required');
                    }

                    this.updateLocation(res, id, req.body)
                }catch(error){
                    res.status(400)
                    .json({
                        success: false,
                        message: error.message
                    })
                }
            }); 

        locationRouter.route('/:id')
            .delete((req, res)=>{
                const location_id = req.params.id;
                const user_id = req.query.user_id || req.body.user_id;
                try{
                    if(!user_id){
                        throw new Error('user_id is required');
                    }

                    if(!Number.isInteger(parseInt(user_id))) {
                        throw new Error('invalid user_id');
                    }

                    if(!Number.isInteger(parseInt(location_id))) {
                        throw new Error('invalid location_id');
                    }

                    this.deleteLocation(res, location_id, user_id);

                }catch(error){
                    res.status(400)
                    .json({
                        success: false,
                        message: error.message
                    })
                }
            });

        locationRouter.route('/')
            .post((req, res)=>{

                //Validate
                try{
                    if(!Number.isInteger(parseInt(req.body.user_id))) {
                        throw new Error('user_id is required');
                    }

                    if(!req.body.address) {
                        throw new Error('address is required');
                    }

                    if(!req.body.title) {
                        throw new Error('title is required');
                    }

                    if(!req.body.lat) {
                        throw new Error('lat is required');
                    }

                    if(!req.body.lng) {
                        throw new Error('lng is required');
                    }

                    this.saveLocation(res, req.body);
                }catch(error){
                    res.status(400)
                    .json({
                        success: false,
                        message: error.message
                    })
                }
            }); 

        return locationRouter;
    }

    async updateLocation(res, id, query){
        try{
            //Check if user is associated with location
            const location = await this.LocationModel.findOne({where: {id,user_id:query.user_id,status:'A'}})
            if(!location){
                throw new Error('user not associated with location');
            }

            const geo_location = await this.geo.isValidGeoLocation(query.address, query.lat, query.lng);

            if(!geo_location.success){
                throw new Error('invalid address pairs');
            }

            //update location
            const {address,lat,lng} = geo_location;
            const update = await this.LocationModel.update({address,lat,lng,title:query.title}, {where:{id, status: 'A'}});
            if(!update){
                throw new Error('update was unsuccessful');
            }

            res.status(200)
            .json({
                success: true,
                message: 'update completed successfully'
            })

        }catch(error){
            res.status(400)
            .json({
                success: false,
                message: error.message
            })
        }
    }

    async saveLocation(res, data){
        //Verify if user exist
        try{
            const user = await this.UserModel.findOne({where:{id: data.user_id, status:'A'}});
            if(!user) throw new Error('user does not exist');

            //Validate location
            const {address:l_address, lat:l_lat, lng:l_lng} = data;

            const geo_location = await this.geo.isValidGeoLocation(l_address, l_lat, l_lng);
            if(!geo_location.success && (geo_location.code === appContants.NETWORK_OK)){
                res.status(200)
                .json({
                    success: false,
                    code: appContants.NETWORK_OK,
                    message: 'No location found'
                })

                return;
            }
            
            const {address,lat,lng} = geo_location;
            const {title, user_id} = data;

            await this.LocationModel.create({address,lat,lng,title,user_id});

            res.status(200)
            .json({
                success: true,
                message: 'location added successfully'
            })

        }catch(error){
            res.status(400)
            .json({
                success: false,
                message: error.message
            })
        }
    }

    async fetchLocations(res, user_id){
        
        const locations = await this.LocationModel.findAll({where: {user_id, status:'A'}});
        if(locations){
            res.status(200)
            .json({
                success: true,
                results: locations,
                message: 'request successful'
            })
        }else{
            res.status(400)
            .json({
                success: false,
                message: 'request not succesful'
            })
        }
    }

    async deleteLocation(res, id, user_id){
        try{
            //Check if user is associated with location
            const location = await this.LocationModel.update({status: 'D'}, {where:{id,user_id,status: 'A'}});
            if(location){
                res.status(200)
                .json({
                    success: true,
                    message: 'delete request successful'
                })
            }else{
                throw new Error('delete request not successful');
            }
        }catch(error){
            res.status(400)
            .json({
                success: false,
                message: error.message
            })
        }
    }
}