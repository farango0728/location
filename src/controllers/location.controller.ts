import { Request, Response } from "express";
import {hereApi, hereApi1, hereApi2} from '../services'

export const location = async (
  req: Request,
  res: Response
) => {
  try{
    const a = await hereApi(res);
    console.log(1)
    if(!a){
      const b = await hereApi1(res);
      console.log(2)
      if(!b) {
        const c = await hereApi2(res);
        console.log(3)
        return res.status(200).json({ message: c });
      }
      return res.status(200).json({ message: b });
    }
    return res.status(200).json({ message: a });

  }catch (error) {
      console.log('getUsers Error:', error);
      return error;
    }
};