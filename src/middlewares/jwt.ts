import { Request, Response, NextFunction } from 'express';
import  jwt from 'jsonwebtoken';
import config from '../config'

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['auth'];
  let jwtPayload;
 
  try {
    jwtPayload = <any>jwt.verify(token, `${config.token_secret.secret}`);
    res.locals.jwtPayload = jwtPayload;
  } catch (e) {
    return res.status(401).json({ message: 'Not Authorized' });
  }

  const { userId, username } = jwtPayload;

  const newToken = jwt.sign({ userId, username }, `${config.token_secret.secret}`, { expiresIn: `${config.token_secret.expiresIn}` });
  res.setHeader('token', newToken);
  // Call next
  next();
};