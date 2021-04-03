import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import jwt from 'jsonwebtoken';

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

    const token = jwt.sign({ userId: user.id, email: user.email }, '1', { expiresIn: '1h' });

    res.json({ message: 'OK', token });


  }catch (error) {
      console.log('getUsers Error:', error);
      return error;
    }
};

