import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import session from 'express-session';
import * as appConfig from './config';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import compression from 'compression';
import https from 'https';
import http from 'http';
import fs from 'fs';


//Models
import User from './models/userModel';
import Location from './models/locationModel';

//Routers
import SessionRouter from './routers/sessionRouter';
import LocationRouter from './routers/locationRouter';
import UserRouter from './routers/userRouter';
import GeoRouter from './routers/geoRouter';

//Services
import StoreService from './services/StoreService';
import { parse } from 'path';


export default class App {

    constructor(){
        this.app = express();
        this.initExpress(this.app);
        this.initSQLAndRouters(this.app);
        this.finalize(this.app);
    }

    initExpress(app){
        app.use(bodyParser.json({limit: '50mb', parameterLimit: 1000000}));
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
        app.use(cookieParser());
        app.use(compression());
        app.use(session({resave:true, saveUninitialized: true, 
                        secret: appConfig.config.secret,
                        cookieName: 'session',
                        duration: 30*60*1000, 
                        activeDuration: 5*60*1000, 
                        httpOnly: true, 
                        cookie: {secure: false }}));

        //CORS enabling
        // app.use((req, res, next)=>{
        //   res.header("Access-Control-Allow-Origin", "*");
        //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //   res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
        //   next();
        // });

        //logging
        app.use(logger('dev'));
        app.use(express.static('build'));

        //Disable cache
        app.use((req, res, next) => {
            res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            res.header('Expires', '-1');
            res.header('Pragma', 'no-cache');
            next();
        });

        app.use(cors());
    }

    validate(req, res, next){
        const app = express();

        //JSON Web Token Secret
        app.set('token', appConfig.config.secret);
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        // decode token
        if(token) {
            jwt.verify(token, app.get('token'), (err)=>
                (err)?res.json({success: false, message: 'Failed to authenticate token.'}):next());
        }else{
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.' 
            });
        }
    }

    async initSQLAndRouters(app){

        const db = appConfig.sequelize;

        const locationModel =  new Location().model(db);
        const userModel = new User().model(db);

        //Setting relationship
        locationModel.belongsTo(userModel);

        //Init Routers
        const locationRouter = new LocationRouter(userModel, locationModel);
        const userRouter = new UserRouter(userModel);
        const sessionRouter = new SessionRouter(userModel);
        const geoRouter = new GeoRouter();

        if(appConfig.config.prepare){     

            //Drop all tables if exist
            await db.drop();
            await db.sync({force: true});

            //Init DB
            const storeService = new StoreService(userModel);
            storeService.initDB();
        }else{
            await db.sync();
        }

        app.use('/medwing/api/v1/*', this.validate); 
        app.use('/medwing/api/v1/locations', locationRouter.routes()); 
        app.use('/medwing/api/v1/geocoding', geoRouter.routes()); 
        app.use('/medwing/api/sessions', sessionRouter.routes());
        app.use('/medwing/api/users', userRouter.routes()); 

    }

    finalize(app){
        const HTTP_PORT = appConfig.config.HTTP_SERVER_PORT;
        const HTTPS_PORT = appConfig.config.HTTPS_SERVER_PORT;

        const options = {
            key: fs.readFileSync('medwing-key.pem'),
            cert: fs.readFileSync('medwing-cert.pem'),
            passphrase: '134119601Hello'
          };

        const httpServer = http.createServer(app); 
        const httpsServer = https.createServer(options, app);
        
        httpServer.listen(HTTP_PORT);
        httpsServer.listen(HTTPS_PORT, ()=>{
            console.log('secure is running')
        });
    }
}

const server = new App();