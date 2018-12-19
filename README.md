## Author ##

### Emmanuel Selby ###
#### fetz.selby@gmail.com ###


## How to Run ##

*I'm assuming MySQL and Git is already installed on your machine(Linux, OSX, Windows). if not, please visit https://www.mysql.com/downloads/ and https://git-scm.com/book/en/v2/Getting-Started-Installing-Git respectively.*

1. Install Node JS https://nodejs.org/en/
2. For building `npm i webpack -g`
3. Clone the repo `git clone https://github.com/fetz-selby/medwing_api.git medwing-api`
4. `cd medwing-api`
5. `npm install`


## Configuring Application ##

### configuring MySQL ###

1. Create Database with name MEDWING_TEST

`CREATE DATABASE MEDWING_TEST CHARACTER SET latin1 COLLATE latin1_swedish_ci`

  
2. Create user for accessing the Database 

`CREATE USER 'medwing_admin'@'localhost' IDENTIFIED BY 'pa55w0rd'`

  
3. Enable privileges 

`GRANT ALL PRIVILEGES ON * . * TO 'medwing_admin'@'localhost`

  
4. Flush 

`FLUSH PRIVILEGES`

  

### configuring medwing-geolocation-api application ###

1. Locate `config.js` on the root directory of the application.

   *change the HTTP_SERVER_PORT if the default is unavailable*
     
2. On first run of the application, edit `config.js` and set `prepare:true`. This is to initialize the database with users(John Doe && Jane Smith) located in `/resources/users.json` file.

  
3. Make sure the DB_NAME, DB_USER and DB_PASSWORD matches our database(MySQL) we just created.

  
4. Change directory into medwing-api directory, and execute 
`npm run start-server-prod`
  
  
## Overview of medwing-geolocation-api application ##
This implements google geocoding(any geo coding third party can be integrated) api. Features include search,create,update and delete stored geocoding.
A token is required before the services(REST) can be used. It has four(4) main endpoints, these include sessions, users, geocoding, and locations.

##### users
`/medwing/api/users`

##### sessions
`/medwing/api/sessions`

##### geocoding
`/medwing/api/v1/geocoding`

##### locations
`/medwing/api/v1/locations`

## Backlogs ##
* Improve on lat and lng diff checking 

## Technologies and Frameworks used ##
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Sequelize](http://docs.sequelizejs.com/)
* [JWT](https://jwt.io/)
* [Webpack](https://webpack.js.org/)
* [Google Geocoding](https://cloud.google.com/maps-platform/)
