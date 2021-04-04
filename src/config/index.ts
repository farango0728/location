import dotenv from 'dotenv';

dotenv.config();

export default {
    here: {
        token: process.env.TOKEN_HERE,
      },
    token_secret :{
      secret : process.env.JWT_SECRET,
      salt:  8,
      expiresIn : process.env.EXPIRES_IN
      }
}