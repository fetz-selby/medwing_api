import {Sequelize} from 'sequelize';

export default class Location{

    model(config){
        const location = config.define('location', {
                user_id:{
                    type: Sequelize.INTEGER
                },
                title: {
                    type: Sequelize.STRING
                },
                address: {
                    type: Sequelize.STRING
                },
                lat:{
                    type : Sequelize.STRING
                },
                lng: {
                    type : Sequelize.STRING
                },
                status: {
                    type : Sequelize.ENUM,
                    values : ['A','D'],
                    defaultValue : ['A']
                }
            }, {underscored: true});
      
            return location;
    }
}