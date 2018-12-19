import * as appConfig from '../config';
import * as appConstants from './appConstants';
import axios from 'axios';

export default class GeoServices{

    isValidGeoLocation(l_address, l_lat, l_lng){
        return new Promise(async(resolve)=>{
            const {geo_url, geo_key} = appConfig.config;
            try{
                const geo_data = await axios.get(geo_url, {params:{key:geo_key,address:l_address}});

                if(!geo_data.data.results.length) return resolve({success:false, code: appConstants.NETWORK_OK});
                

                const {lat, lng} = geo_data.data.results[0].geometry.location;
                const address = geo_data.data.results[0].formatted_address;

                const mini_lat = l_lat.toString().substr(0,4);
                const mini_lng = l_lng.toString().substr(0, l_lng.toString().includes('-')?5:4);

                return (address.toLowerCase().includes(l_address.toLowerCase()) || 
                (lat.toString().includes(mini_lat) ||
                lng.toString().includes(mini_lng)))?
                resolve({success:true, address, lat, lng}):
                resolve({success:false, address, lat, lng, code: appConstants.NETWORK_OK});
            }catch(error){
                return resolve({success: false, code: appConstants.NETWORK_DOWN})
            }
            
        })
    }

    getGeoLocationByAddress(l_address){
        return new Promise(async(resolve)=>{
            const {geo_url, geo_key} = appConfig.config;
            try{
                const geo_data = await axios.get(geo_url, {params:{key:geo_key,address:l_address}});

                if(!geo_data.data.results.length) return resolve({success:false, code: appConstants.NETWORK_OK});
                
                const address = geo_data.data.results[0].formatted_address;
                const {lat, lng} = geo_data.data.results[0].geometry.location;
                const success = true;

                return resolve({success,address,lat,lng});
            }catch(error){
                return resolve({success: false, code: appConstants.NETWORK_DOWN});
            }
        })
    }

    getGeoLocationByPoint(l_lat, l_lng){
        return new Promise(async(resolve)=>{
            const {geo_url, geo_key} = appConfig.config;
            try{
                const geo_data = await axios.get(geo_url, {params:{key:geo_key,latlng:l_lat+','+l_lng}});

                if(!geo_data.data.results.length){
                    return resolve({success:false, code: appConstants.NETWORK_OK});
                }
                

                const address = geo_data.data.results[0].formatted_address;
                const {lat, lng} = geo_data.data.results[0].geometry.location;
                const success = true;

                return resolve({success,address,lat,lng});
            }catch(error){
                return resolve({success: false, code: appConstants.NETWORK_DOWN});
            }
        })
    }

}