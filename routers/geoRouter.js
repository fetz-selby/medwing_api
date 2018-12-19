import express from 'express';
import Geo from '../services/GeoServices';
import * as appConstants from '../services/appConstants';
    
export default class GeoRoutes{

    constructor(){
        this.geo = new Geo();
    }

    routes(){
        const app = this;
        const geoRouter = express.Router();

        geoRouter.route('/search')
            .get((req, res)=>{  
                const {address, lat, lng} = req.query;

                if(address){
                    app.searchByAddress(res, address);
                }else if(lat && lng){
                    app.searchByPoint(res, lat, lng);
                }
            });   
        return geoRouter;
    }

    async searchByAddress(res, l_address){

        try{
            const geo_location = await this.geo.getGeoLocationByAddress(l_address);

            if(!geo_location.success && (geo_location.code === appConstants.NETWORK_OK)){
                res.status(200)
                .json({
                    success: false,
                    code: appConstants.NETWORK_OK,
                    message: 'No location found'
                })   
                
                return;      
            }

            if(!geo_location.success && (geo_location.code === appConstants.NETWORK_DOWN)){
                res.status(200)
                .json({
                    success: false,
                    code: appConstants.NETWORK_DOWN,
                    message: 'Third party down'
                })

                return;
            }

            const {lat, lng, address} = geo_location;

            res.status(200)
            .json({
                success: true,
                results: {
                    query: l_address,
                    address,
                    lat,
                    lng
                },
                message: 'request successful'
            })

        }catch(error){
            res.status(400)
            .json({
                success: false,
                message: error.message
            })
        }
    }

    async searchByPoint(res, latitude, longitude){

        try{
            const geo_location = await this.geo.getGeoLocationByPoint(latitude, longitude);
            if(!geo_location.success){
                throw new Error('no location found');
            }

            const {lat, lng, address} = geo_location;


            res.status(200)
            .json({
                success: true,
                results: {
                    address: address,
                    lat,
                    lng
                },
                message: 'request successful'
            })

        }catch(error){
            res.status(400)
            .json({
                success: false,
                message: error.message
            })
        }
    }
}