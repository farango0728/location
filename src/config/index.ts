import dotenv from 'dotenv';

dotenv.config();

export default {
    services: {
        tokenHere: process.env.TOKEN_HERE,
        tokenGoogle: process.env.TOKEN_GOOGLE,
      },
    token_secret :{
      secret : process.env.JWT_SECRET,
      salt:  8,
      expiresIn : process.env.EXPIRES_IN
      }
}