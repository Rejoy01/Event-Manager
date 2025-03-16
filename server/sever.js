import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 4000

const App = express();

App.use(cors());

App.use(express.json());

dotenv.config()



App.get('/', (req,res)=>{
    res.send("Event Planner API is running ....")
})

App.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

