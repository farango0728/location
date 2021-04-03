import { Response } from "express";
import axios from 'axios'
import config from '../config'

export const hereApi = async (
    res: Response) => {
        try {
            const response = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=colombia+el+cerrito+santa+barbara, calle+4+19+37&apiKey=${config.here.token}`);
            const {items} = response.data
            if(!items.length) return false
            const {address, position} = response.data.items[0]
            console.log(address)
            ///filtro por pais, departamento, ciudad
            if(address.city !== 'El Cerrito' && address.street !== 'Calle 10 19') return false
            return position
          } catch (error) {
            console.error(error);
          }
  };

  export const hereApi1 = async (
    res: Response) => {
        try {
            const response = await axios.get('https://geocode.search.hereapi.com/v1/geocode?q=colombia el washington, calle 202, 19-37&apiKey=Bof0WOFFAEzlqOHKfUPB9UF1ZmY8LVPcp8p_Qd_Z4Rk');
            console.log(response.data)
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