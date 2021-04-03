import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { validate } from 'class-validator';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try{
    const users = await getRepository(User).find();
    return res.json(users);
  }catch (error) {
      console.log('getUsers Error:', error);
      return error;
    }
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try{
    const results = await getRepository(User).findOne(req.params.id);
    if(results) return res.json(results);
    return res.json({msg: 'user does not exist1'});
  }catch (error) {
    console.log('getUser Error:', error);
    return error;
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response>=> {
  try{

    const { firstname, lastname, gender,  email, password } = req.body;
    const user = new User();

    user.firstname= firstname;
    user.lastname= lastname;
    user.gender= gender;
    user.email = email;
    user.password = password;

    // Validate
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(user, validationOpt);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // TODO: HASH PASSWORD

    const userRepository = getRepository(User);
    try {
      user.hashPassword();
      const newUser = await userRepository.save(user);
      return res.status(200).json(newUser);
      }catch (e) {
      return res.status(409).json({ message: 'email already exist' });
    }
  }catch (error) {
    console.log('createUser Error:', error);
    return error;
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try{
    
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
      getRepository(User).merge(user, req.body);
      const results = await getRepository(User).save(user);
      return res.json(results);
    }
    return res.json({msg: 'Not user found'});
  }catch (error) {
    console.log('updateUser Error:', error);
    return error;
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try{
    const results = await getRepository(User).delete(req.params.id);
    if(results.raw.affectedRows) return res.json(results);
    return res.json({msg: 'user does not exist'});
  }catch (error) {
    console.log('deleteUser Error:', error);
    return error;
  }
};
