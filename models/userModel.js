import {Sequelize} from 'sequelize';

export default class User{

    model(config){
        const user = config.define('user', {
                name:{
                    type: Sequelize.STRING
                },
                avatar:{
                    type: Sequelize.STRING
                },
                status: {
                    type : Sequelize.ENUM,
                    values : ['A','D'],
                    defaultValue : ['A']
                }
            }, {underscored: true});
      
            return user;
    }
}