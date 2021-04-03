import { Request, Response, NextFunction } from 'express';
import  jwt from 'jsonwebtoken';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['auth'];
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, '1');
    res.locals.jwtPayload = jwtPayload;
  } catch (e) {
    return res.status(401).json({ message: 'Not Authorized' });
  }

  const { userId, username } = jwtPayload;

  const newToken = jwt.sign({ userId, username }, '1', { expiresIn: '1h' });
  res.setHeader('token', newToken);
  // Call next
  next();
};