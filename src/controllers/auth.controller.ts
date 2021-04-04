import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import jwt from 'jsonwebtoken';
import config from '../config'
import { validate } from 'class-validator';

export const signup = async (
  req: Request,
  res: Response
) => {
  try{
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ message: ' email & Password are required!' });
    }
    const userRepository = getRepository(User);
    let user: User;

    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (e) {
      return res.status(400).json({ message: ' email or password incorecct!' });
    }

    // Check password
    if (!user.checkPassword(password)) {
      return res.status(400).json({ message: 'email or Password are incorrect!' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, `${config.token_secret.secret}`, { expiresIn: `${config.token_secret.expiresIn}` });

    res.json({ message: 'OK', token });


  }catch (error) {
      console.log('getUsers Error:', error);
      return error;
    }
};

export const changePassword = async (
  req: Request,
  res: Response
) => {
  try{
    const { userId } = res.locals.jwtPayload;
    const { oldPassword, newPassword } = req.body;

    if (!(oldPassword && newPassword)) {
      res.status(400).json({ message: 'Old password & new password are required' });
    }
    
    const userRepository = getRepository(User);
    let user: User;
    
    try {
      user = await userRepository.findOneOrFail({ where: { id: userId } });      
    } catch (e) {
      return res.status(400).json({ message: 'Somenthing goes wrong!' });
    }
    
    if (!user.checkPassword(oldPassword)) {
      return res.status(401).json({ message: 'Check your old Password' });
    }

    user.password = newPassword;
    const validationOps = { validationError: { target: false, value: false } };
    const errors = await validate(user, validationOps);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    //Hash password
    user.hashPassword();
    userRepository.save(user);

    res.json({ message: 'Password change!' });


  }catch (error) {
      console.log('getUsers Error:', error);
      return error;
    }
};