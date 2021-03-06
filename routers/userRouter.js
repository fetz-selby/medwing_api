import express from 'express';
import * as appConfig from '../config';
    
export default class UserRoutes{

    constructor(UserModel){
        this.UserModel = UserModel;
    }

    routes(){
        const app = this;
        const userRouter = express.Router();

        userRouter.route('/')
            .get((req, res)=>{  
                app.fetchAllUsers(res);
            });   

        userRouter.route('/:id')
            .get((req, res)=>{
                const id = parseInt(req.params.id);
                try{
                    if(!Number.isInteger(id)){
                        throw new Error('invalid id input');
                    }
                    app.fetchUser(id);
                }catch(error){
                    res.status(400)
                    .json({
                        success: false,
                        message: error.message
                    })
                }
            }); 

        return userRouter;
    }

    async fetchAllUsers(res){
        const {IP, HTTP_SERVER_PORT} = appConfig.config;
        const url = IP+':'+HTTP_SERVER_PORT+'/resources/images/';

        const results = await this.UserModel.findAll();
        const users = results.map((user)=>{user.avatar = url+user.avatar; return user;});
        res.status(200)
        .json({
            success: true,
            results: users
        })
    }

    async fetchUser(res, id){
        const user = await this.UserModel.findOne({where:{id, status:'A'}});
        if(user){
            res.status(200)
            .json({
                success: true,
                results: user,
                message: 'successful request' 
            })
        }else{
            res.status(400)
            .json({
                success: false,
                message: 'user does not exist'
            })
        }
    }
};