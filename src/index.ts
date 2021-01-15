import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userController from './controllers/user.controller';
import { createConnection } from 'typeorm';


const app = express();
createConnection();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes 
app.use('/users',userController);

app.use

app.listen(3000, () => {
    console.log('Running on port 3000: ');
});
