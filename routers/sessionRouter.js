import express from 'express';
import jwt from 'jsonwebtoken';
import * as appConfig from '../config';
    
export default class SessionRoutes{

    constructor(UserModel){
        this.UserModel = UserModel;
    }

    routes(){
        const sessionRouter = express.Router();

        sessionRouter.route('/user_id/:id')
            .get((req, res)=>{
                const id = req.params.id;
                try{
                    if(!Number.isInteger(parseInt(id))){
                        throw new Error('invalid user_id');
                    }

                    this.generateSession(res, id);
                }catch(error){
                    res.status(400)
                    .json({
                        success: false,
                        message: error.message
                    })
                }
            });

        return sessionRouter;
    }

    async generateSession(res, id){
        const user = await this.UserModel.findOne({where: {id, status: 'A'}});

        if(user){
            const token = jwt.sign({user}, appConfig.config.secret, {expiresIn: '1d'});

            res.status(200)
            .json({
                success: true,
                results: {user_id: user.id, 
                          username: user.name.split(' ')[0], 
                          token,
                          keys: appConfig.config.geo_key}
            })
        }else{
            res.status(400)
            .json({
                success: false,
                message: 'invalid user'
            })
        }
    }
}