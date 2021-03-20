import express, { json } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

//dotenv
dotenv.config({path: '../config/config.env'});

//importing routing
import projectRoutes from '../src/routes/project'
import taskRoutes from '../src/routes/task'


// Initialization
const app = express()

//middlewares
app.use(morgan('dev'));
app.use(json());

//Routes

app.use(projectRoutes);
app.use(taskRoutes);




export default app;