import { Response, Request } from "express";
import axios from 'axios'
import config from '../config'

export const hereApi = async (
    res: Response, req: Request) => {
        try {
            const {country, city, neighborhood, direction} = req.body;
            const concatLocation = `${country} ${city} ${neighborhood} ${direction}`
            var change = / /g;
            concatLocation.replace(change, '+')
            
            const response = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${concatLocation}&apiKey=${config.services.tokenHere}`);
            
            const {items} = response.data
            if(!items.length) return false
            const {address, position} = response.data.items[0]
            ///filtro por pais, departamento, ciudad
            if(address.countryName !== country && address.city !== city && address.street !== direction) return false
            return position
          } catch (error) {
            console.error(error);
          }
  };

  export const googleApi = async (
    res: Response, req:Request) => {
        try {

            const {country, city, neighborhood, direction} = req.body;
            const concatLocation = `${country} ${city} ${neighborhood} ${direction}`
            var change = / /g;
            concatLocation.replace(change, '+')

            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${concatLocation}&key=${config.services.tokenGoogle}`);
            const {items} = response.data
            if(!items.length) return false
            const {address, position} = response.data.items[0]
            return position 
          } catch (error) {
            console.error(error);
          }
  };

  export const hereApi2 = async (
    res: Response) => {
        try {
            const response = await axios.get('https://geocode.search.hereapi.com/v1/geocode?q=colombia,el cerrito, santa barbara, calle 350 19 -37&apiKey=Bof0WOFFAEzlqOHKfUPB9UF1ZmY8LVPcp8p_Qd_Z4Rk');
            console.log(response.data)
            const {items} = response.data
            if(!items.length) return false
            const {address, position} = response.data.items[0]
            return address 
          } catch (error) {
            console.error(error);
          }
  };