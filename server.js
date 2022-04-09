import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.listen(process.env.PORT || 4000);
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})