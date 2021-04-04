import { Request, Response } from "express";
import {hereApi, googleApi, hereApi2} from '../services'

export const location = async (
  req: Request,
  res: Response
) => {
  try{
    const here = await hereApi(res, req);
    if(!here){
      const google = await googleApi(res, req);
      if(!google) {
        const c = await hereApi2(res);
        return res.status(200).json({ message: c });
      }
      return res.status(200).json({ message: google });
    }
    return res.status(200).json({ message: here });

  }catch (error) {
      console.log('getUsers Error:', error);
      return error;
    }
};