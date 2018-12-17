import express from 'express';
import * as appConfig from '../config';
import jwt from 'jsonwebtoken';
import users from '../resources/users';

export default class StoreService{

    constructor(UserModel){
        this.UserModel = UserModel;
    }

    async initDB(){
        const app = this;
        users.map(async(user)=>{
            await app.UserModel.create({name: user.name});
        })
    }

    isValidToken(token){
        const expressApp = express();
        expressApp.set('token', appConfig.config.secret);

        jwt.verify(token, expressApp.get('token'), function(err, decoded) {      
            if (err) {
                return false;
            } else {
                return true;
            }
        });
    }
}