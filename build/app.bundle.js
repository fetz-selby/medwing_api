/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/userModel */ \"./models/userModel.js\");\n/* harmony import */ var _models_locationModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/locationModel */ \"./models/locationModel.js\");\n/* harmony import */ var _routers_sessionRouter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routers/sessionRouter */ \"./routers/sessionRouter.js\");\n/* harmony import */ var _routers_locationRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routers/locationRouter */ \"./routers/locationRouter.js\");\n/* harmony import */ var _routers_userRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routers/userRouter */ \"./routers/userRouter.js\");\n/* harmony import */ var _routers_geoRouter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routers/geoRouter */ \"./routers/geoRouter.js\");\n/* harmony import */ var _services_StoreService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/StoreService */ \"./services/StoreService.js\");\n\n\n\n\n\n\n\n\n //Models\n\n\n //Routers\n\n\n\n\n //Services\n\n\nclass App {\n  constructor() {\n    this.app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n    this.initExpress(this.app);\n    this.initSQLAndRouters(this.app);\n    this.finalize(this.app);\n  }\n\n  initExpress(app) {\n    app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json({\n      limit: '50mb',\n      parameterLimit: 1000000\n    }));\n    app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n      limit: '50mb',\n      extended: true,\n      parameterLimit: 1000000\n    }));\n    app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n    app.use(express_session__WEBPACK_IMPORTED_MODULE_4___default()({\n      resave: true,\n      saveUninitialized: true,\n      secret: _config__WEBPACK_IMPORTED_MODULE_5__[\"config\"].secret,\n      cookieName: 'session',\n      duration: 30 * 60 * 1000,\n      activeDuration: 5 * 60 * 1000,\n      httpOnly: true,\n      cookie: {\n        secure: false\n      }\n    })); //CORS enabling\n    // app.use((req, res, next)=>{\n    //   res.header(\"Access-Control-Allow-Origin\", \"*\");\n    //   res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n    //   res.header(\"Access-Control-Allow-Methods\", \"POST, GET, PUT, DELETE, OPTIONS\");\n    //   next();\n    // });\n    //logging\n\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\n    app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('build')); //Disable cache\n\n    app.use((req, res, next) => {\n      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');\n      res.header('Expires', '-1');\n      res.header('Pragma', 'no-cache');\n      next();\n    });\n    app.use(cors__WEBPACK_IMPORTED_MODULE_7___default()());\n  }\n\n  validate(req, res, next) {\n    const app = express__WEBPACK_IMPORTED_MODULE_0___default()(); //JSON Web Token Secret\n\n    app.set('token', _config__WEBPACK_IMPORTED_MODULE_5__[\"config\"].secret);\n    const token = req.body.token || req.query.token || req.headers['x-access-token']; // decode token\n\n    if (token) {\n      jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default.a.verify(token, app.get('token'), err => err ? res.json({\n        success: false,\n        message: 'Failed to authenticate token.'\n      }) : next());\n    } else {\n      return res.status(403).send({\n        success: false,\n        message: 'No token provided.'\n      });\n    }\n  }\n\n  async initSQLAndRouters(app) {\n    const db = _config__WEBPACK_IMPORTED_MODULE_5__[\"sequelize\"];\n    const locationModel = new _models_locationModel__WEBPACK_IMPORTED_MODULE_10__[\"default\"]().model(db);\n    const userModel = new _models_userModel__WEBPACK_IMPORTED_MODULE_9__[\"default\"]().model(db); //Setting relationship\n\n    locationModel.belongsTo(userModel); //Init Routers\n\n    const locationRouter = new _routers_locationRouter__WEBPACK_IMPORTED_MODULE_12__[\"default\"](userModel, locationModel);\n    const userRouter = new _routers_userRouter__WEBPACK_IMPORTED_MODULE_13__[\"default\"](userModel);\n    const sessionRouter = new _routers_sessionRouter__WEBPACK_IMPORTED_MODULE_11__[\"default\"](userModel);\n    const geoRouter = new _routers_geoRouter__WEBPACK_IMPORTED_MODULE_14__[\"default\"]();\n\n    if (_config__WEBPACK_IMPORTED_MODULE_5__[\"config\"].prepare) {\n      //Drop all tables if exist\n      await db.drop();\n      await db.sync({\n        force: true\n      }); //Init DB\n\n      const storeService = new _services_StoreService__WEBPACK_IMPORTED_MODULE_15__[\"default\"](userModel);\n      storeService.initDB();\n    } else {\n      await db.sync();\n    }\n\n    app.use('/medwing/api/v1/*', this.validate);\n    app.use('/medwing/api/v1/locations', locationRouter.routes());\n    app.use('/medwing/api/v1/geocoding', geoRouter.routes());\n    app.use('/medwing/api/sessions', sessionRouter.routes());\n    app.use('/medwing/api/users', userRouter.routes());\n  }\n\n  finalize(app) {\n    const PORT = _config__WEBPACK_IMPORTED_MODULE_5__[\"config\"].SERVER_PORT;\n    app.listen(parseInt(PORT), () => {\n      console.log('Running on PORT ::: ' + PORT);\n    });\n  }\n\n}\nconst server = new App();\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nconst config = {\n  IP: process.env.SERVER_IP,\n  SERVER_PORT: process.env.LOCAL_PORT || 8001,\n  secret: 'thequickfoxjumpedoverthelazydog',\n  geo_url: 'https://maps.googleapis.com/maps/api/geocode/json',\n  geo_key: 'AIzaSyC53deGuD9TB4tJsbB2h_NtOMzUxANOVZs',\n  prepare: false\n};\nconst sequelize = new Sequelize(process.env.DB_NAME || 'MEDWING_TEST', process.env.DB_USER || 'medwing_admin', process.env.DB_PASSWORD || 'pa55w0rd', {\n  host: process.env.DB_HOST || 'localhost',\n  //dialect: 'postgres',\n  dialect: process.env.DB_DIALECT || 'mysql',\n  pool: {\n    max: 1,\n    min: 0,\n    idle: 10000,\n    acquire: 20000,\n    handleDisconnects: true\n  }\n});\nmodule.exports = {\n  config: config,\n  sequelize: sequelize\n};\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./models/locationModel.js":
/*!*********************************!*\
  !*** ./models/locationModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Location; });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Location {\n  model(config) {\n    const location = config.define('location', {\n      user_id: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].INTEGER\n      },\n      title: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].STRING\n      },\n      address: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].STRING\n      },\n      lat: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].STRING\n      },\n      lng: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].STRING\n      },\n      status: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].ENUM,\n        values: ['A', 'D'],\n        defaultValue: ['A']\n      }\n    }, {\n      underscored: true\n    });\n    return location;\n  }\n\n}\n\n//# sourceURL=webpack:///./models/locationModel.js?");

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n\nclass User {\n  model(config) {\n    const user = config.define('user', {\n      name: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].STRING\n      },\n      avatar: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].STRING\n      },\n      status: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].ENUM,\n        values: ['A', 'D'],\n        defaultValue: ['A']\n      }\n    }, {\n      underscored: true\n    });\n    return user;\n  }\n\n}\n\n//# sourceURL=webpack:///./models/userModel.js?");

/***/ }),

/***/ "./resources/users.json":
/*!******************************!*\
  !*** ./resources/users.json ***!
  \******************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

eval("module.exports = [{\"name\":\"John Doe\"},{\"name\":\"Jane Smith\"}];\n\n//# sourceURL=webpack:///./resources/users.json?");

/***/ }),

/***/ "./routers/geoRouter.js":
/*!******************************!*\
  !*** ./routers/geoRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GeoRoutes; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_GeoServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/GeoServices */ \"./services/GeoServices.js\");\n\n\nclass GeoRoutes {\n  constructor() {\n    this.geo = new _services_GeoServices__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  routes() {\n    const app = this;\n    const geoRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n    geoRouter.route('/search').get((req, res) => {\n      const {\n        address,\n        lat,\n        lng\n      } = req.query;\n\n      if (address) {\n        app.searchByAddress(res, address);\n      } else if (lat && lng) {\n        app.searchByPoint(res, lat, lng);\n      }\n    });\n    return geoRouter;\n  }\n\n  async searchByAddress(res, l_address) {\n    try {\n      const geo_location = await this.geo.getGeoLocationByAddress(l_address);\n\n      if (!geo_location.success) {\n        throw new Error('no location found');\n      }\n\n      const {\n        lat,\n        lng,\n        address\n      } = geo_location;\n      res.status(200).json({\n        success: true,\n        results: {\n          query: l_address,\n          address,\n          lat,\n          lng\n        },\n        message: 'request successful'\n      });\n    } catch (error) {\n      res.status(400).json({\n        success: false,\n        message: error.message\n      });\n    }\n  }\n\n  async searchByPoint(res, latitude, longitude) {\n    try {\n      const geo_location = await this.geo.getGeoLocationByPoint(latitude, longitude);\n\n      if (!geo_location.success) {\n        throw new Error('no location found');\n      }\n\n      const {\n        lat,\n        lng,\n        address\n      } = geo_location;\n      res.status(200).json({\n        success: true,\n        results: {\n          address: address,\n          lat,\n          lng\n        },\n        message: 'request successful'\n      });\n    } catch (error) {\n      res.status(400).json({\n        success: false,\n        message: error.message\n      });\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./routers/geoRouter.js?");

/***/ }),

/***/ "./routers/locationRouter.js":
/*!***********************************!*\
  !*** ./routers/locationRouter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LocationRoutes; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_GeoServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/GeoServices */ \"./services/GeoServices.js\");\n\n\nclass LocationRoutes {\n  constructor(UserModel, LocationModel) {\n    this.UserModel = UserModel;\n    this.LocationModel = LocationModel;\n    this.geo = new _services_GeoServices__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  routes() {\n    const locationRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n    locationRouter.route('/').get((req, res) => {\n      const user_id = req.query.user_id;\n\n      if (Number.isInteger(parseInt(user_id))) {\n        this.fetchLocations(res, user_id);\n      }\n    });\n    locationRouter.route('/:id').put((req, res) => {\n      const {\n        id\n      } = req.params;\n      const {\n        user_id,\n        title,\n        address\n      } = req.body;\n\n      try {\n        if (!Number.isInteger(parseInt(id))) {\n          throw new Error('invalid location_id');\n        }\n\n        if (!user_id) {\n          throw new Error('user_id required');\n        }\n\n        if (!title) {\n          throw new Error('title required');\n        }\n\n        if (!address) {\n          throw new Error('address required');\n        }\n\n        this.updateLocation(res, id, req.body);\n      } catch (error) {\n        res.status(400).json({\n          success: false,\n          message: error.message\n        });\n      }\n    });\n    locationRouter.route('/:id').delete((req, res) => {\n      const location_id = req.params.id;\n      const user_id = req.query.user_id || req.body.user_id;\n\n      try {\n        if (!user_id) {\n          throw new Error('user_id is required');\n        }\n\n        if (!Number.isInteger(parseInt(user_id))) {\n          throw new Error('invalid user_id');\n        }\n\n        if (!Number.isInteger(parseInt(location_id))) {\n          throw new Error('invalid location_id');\n        }\n\n        this.deleteLocation(res, location_id, user_id);\n      } catch (error) {\n        res.status(400).json({\n          success: false,\n          message: error.message\n        });\n      }\n    });\n    locationRouter.route('/').post((req, res) => {\n      //Validate\n      try {\n        if (!Number.isInteger(parseInt(req.body.user_id))) {\n          throw new Error('user_id is required');\n        }\n\n        if (!req.body.address) {\n          throw new Error('address is required');\n        }\n\n        if (!req.body.title) {\n          throw new Error('title is required');\n        }\n\n        if (!req.body.lat) {\n          throw new Error('lat is required');\n        }\n\n        if (!req.body.lng) {\n          throw new Error('lng is required');\n        }\n\n        this.saveLocation(res, req.body);\n      } catch (error) {\n        res.status(400).json({\n          success: false,\n          message: error.message\n        });\n      }\n    });\n    return locationRouter;\n  }\n\n  async updateLocation(res, id, query) {\n    try {\n      //Check if user is associated with location\n      const location = await this.LocationModel.findOne({\n        where: {\n          id,\n          user_id: query.user_id,\n          status: 'A'\n        }\n      });\n\n      if (!location) {\n        throw new Error('user not associated with location');\n      }\n\n      const geo_location = await this.geo.isValidGeoLocation(query.address, query.lat, query.lng);\n\n      if (!geo_location.success) {\n        throw new Error('invalid address pairs');\n      } //update location\n\n\n      const {\n        address,\n        lat,\n        lng\n      } = geo_location;\n      const update = await this.LocationModel.update({\n        address,\n        lat,\n        lng,\n        title: query.title\n      }, {\n        where: {\n          id,\n          status: 'A'\n        }\n      });\n\n      if (!update) {\n        throw new Error('update was unsuccessful');\n      }\n\n      res.status(200).json({\n        success: true,\n        message: 'update completed successfully'\n      });\n    } catch (error) {\n      res.status(400).json({\n        success: false,\n        message: error.message\n      });\n    }\n  }\n\n  async saveLocation(res, data) {\n    //Verify if user exist\n    try {\n      const user = await this.UserModel.findOne({\n        where: {\n          id: data.user_id,\n          status: 'A'\n        }\n      });\n      if (!user) throw new Error('user does not exist'); //Validate location\n\n      const {\n        address: l_address,\n        lat: l_lat,\n        lng: l_lng\n      } = data;\n      const geo_location = await this.geo.isValidGeoLocation(l_address, l_lat, l_lng);\n      if (!geo_location.success) throw new Error('no location found');\n      const {\n        address,\n        lat,\n        lng\n      } = geo_location;\n      const {\n        title,\n        user_id\n      } = data;\n      await this.LocationModel.create({\n        address,\n        lat,\n        lng,\n        title,\n        user_id\n      });\n      res.status(200).json({\n        success: true,\n        message: 'location added successfully'\n      });\n    } catch (error) {\n      res.status(400).json({\n        success: false,\n        message: error.message\n      });\n    }\n  }\n\n  async fetchLocations(res, user_id) {\n    const locations = await this.LocationModel.findAll({\n      where: {\n        user_id,\n        status: 'A'\n      }\n    });\n\n    if (locations) {\n      res.status(200).json({\n        success: true,\n        results: locations,\n        message: 'request successful'\n      });\n    } else {\n      res.status(400).json({\n        success: false,\n        message: 'request not succesful'\n      });\n    }\n  }\n\n  async deleteLocation(res, id, user_id) {\n    try {\n      //Check if user is associated with location\n      const location = await this.LocationModel.update({\n        status: 'D'\n      }, {\n        where: {\n          id,\n          user_id,\n          status: 'A'\n        }\n      });\n\n      if (location) {\n        res.status(200).json({\n          success: true,\n          message: 'delete request successful'\n        });\n      } else {\n        throw new Error('delete request not successful');\n      }\n    } catch (error) {\n      res.status(400).json({\n        success: false,\n        message: error.message\n      });\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./routers/locationRouter.js?");

/***/ }),

/***/ "./routers/sessionRouter.js":
/*!**********************************!*\
  !*** ./routers/sessionRouter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SessionRoutes; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass SessionRoutes {\n  constructor(UserModel) {\n    this.UserModel = UserModel;\n  }\n\n  routes() {\n    const sessionRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n    sessionRouter.route('/user_id/:id').get((req, res) => {\n      const id = req.params.id;\n\n      try {\n        if (!Number.isInteger(parseInt(id))) {\n          throw new Error('invalid user_id');\n        }\n\n        this.generateSession(res, id);\n      } catch (error) {\n        res.status(400).json({\n          success: false,\n          message: error.message\n        });\n      }\n    });\n    return sessionRouter;\n  }\n\n  async generateSession(res, id) {\n    const user = await this.UserModel.findOne({\n      where: {\n        id,\n        status: 'A'\n      }\n    });\n\n    if (user) {\n      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n        user\n      }, _config__WEBPACK_IMPORTED_MODULE_2__[\"config\"].secret, {\n        expiresIn: '1d'\n      });\n      res.status(200).json({\n        success: true,\n        results: {\n          user_id: user.id,\n          username: user.name.split(' ')[0],\n          token,\n          keys: _config__WEBPACK_IMPORTED_MODULE_2__[\"config\"].geo_key\n        }\n      });\n    } else {\n      res.status(400).json({\n        success: false,\n        message: 'invalid user'\n      });\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./routers/sessionRouter.js?");

/***/ }),

/***/ "./routers/userRouter.js":
/*!*******************************!*\
  !*** ./routers/userRouter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserRoutes; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nclass UserRoutes {\n  constructor(UserModel) {\n    this.UserModel = UserModel;\n  }\n\n  routes() {\n    const app = this;\n    const userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n    userRouter.route('/').get((req, res) => {\n      app.fetchAllUsers(res);\n    });\n    userRouter.route('/:id').get((req, res) => {\n      const id = parseInt(req.params.id);\n\n      try {\n        if (!Number.isInteger(id)) {\n          throw new Error('invalid id input');\n        }\n\n        app.fetchUser(id);\n      } catch (error) {\n        res.status(400).json({\n          success: false,\n          message: error.message\n        });\n      }\n    });\n    return userRouter;\n  }\n\n  async fetchAllUsers(res) {\n    const users = await this.UserModel.findAll();\n    res.status(200).json({\n      success: true,\n      results: users\n    });\n  }\n\n  async fetchUser(res, id) {\n    const user = await this.UserModel.findOne({\n      where: {\n        id,\n        status: 'A'\n      }\n    });\n\n    if (user) {\n      res.status(200).json({\n        success: true,\n        results: user,\n        message: 'successful request'\n      });\n    } else {\n      res.status(400).json({\n        success: false,\n        message: 'user does not exist'\n      });\n    }\n  }\n\n}\n;\n\n//# sourceURL=webpack:///./routers/userRouter.js?");

/***/ }),

/***/ "./services/GeoServices.js":
/*!*********************************!*\
  !*** ./services/GeoServices.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GeoServices; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass GeoServices {\n  isValidGeoLocation(l_address, l_lat, l_lng) {\n    return new Promise(async resolve => {\n      const {\n        geo_url,\n        geo_key\n      } = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"];\n      const geo_data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(geo_url, {\n        params: {\n          key: geo_key,\n          address: l_address\n        }\n      });\n\n      if (!geo_data.data.results.length) {\n        resolve({\n          success: false\n        });\n        return;\n      }\n\n      const {\n        lat,\n        lng\n      } = geo_data.data.results[0].geometry.location;\n      const address = geo_data.data.results[0].formatted_address;\n      const mini_lat = l_lat.toString().substr(0, 4);\n      const mini_lng = l_lng.toString().substr(0.4);\n      address.toLowerCase().includes(l_address.toLowerCase()) && lat.toString().includes(mini_lat) && lng.toString().includes(mini_lng) ? resolve({\n        success: true,\n        address,\n        lat,\n        lng\n      }) : resolve({\n        success: false,\n        address,\n        lat,\n        lng\n      });\n    });\n  }\n\n  getGeoLocationByAddress(l_address) {\n    return new Promise(async resolve => {\n      const {\n        geo_url,\n        geo_key\n      } = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"];\n      const geo_data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(geo_url, {\n        params: {\n          key: geo_key,\n          address: l_address\n        }\n      });\n      if (!geo_data.data.results.length) resolve({\n        success: false\n      });\n      const address = geo_data.data.results[0].formatted_address;\n      const {\n        lat,\n        lng\n      } = geo_data.data.results[0].geometry.location;\n      const success = true;\n      resolve({\n        success,\n        address,\n        lat,\n        lng\n      });\n    });\n  }\n\n  getGeoLocationByPoint(l_lat, l_lng) {\n    return new Promise(async resolve => {\n      const {\n        geo_url,\n        geo_key\n      } = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"];\n      const geo_data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(geo_url, {\n        params: {\n          key: geo_key,\n          latlng: l_lat + ',' + l_lng\n        }\n      });\n\n      if (!geo_data.data.results.length) {\n        resolve({\n          success: false\n        });\n        return;\n      }\n\n      const address = geo_data.data.results[0].formatted_address;\n      const {\n        lat,\n        lng\n      } = geo_data.data.results[0].geometry.location;\n      const success = true;\n      resolve({\n        success,\n        address,\n        lat,\n        lng\n      });\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./services/GeoServices.js?");

/***/ }),

/***/ "./services/StoreService.js":
/*!**********************************!*\
  !*** ./services/StoreService.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StoreService; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/users */ \"./resources/users.json\");\nvar _resources_users__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/users */ \"./resources/users.json\", 1);\n\n\n\n\nclass StoreService {\n  constructor(UserModel) {\n    this.UserModel = UserModel;\n  }\n\n  async initDB() {\n    const app = this;\n    _resources_users__WEBPACK_IMPORTED_MODULE_3__.map(async user => {\n      await app.UserModel.create({\n        name: user.name\n      });\n    });\n  }\n\n  isValidToken(token) {\n    const expressApp = express__WEBPACK_IMPORTED_MODULE_0___default()();\n    expressApp.set('token', _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"].secret);\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, expressApp.get('token'), function (err, decoded) {\n      if (err) {\n        return false;\n      } else {\n        return true;\n      }\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./services/StoreService.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });