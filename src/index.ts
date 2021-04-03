import 'reflect-metadata';
import {createConnection} from 'typeorm'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/routes';

const PORT = process.env.PORT || 3000;

createConnection()
  .then(async () => {
    // create express app
    const app = express();

    // Middlewares
    app.use(cors());
    app.use(helmet());

    app.use(express.json());
    
    // Routes
    app.use('/', routes);

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.log(error));