import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jwt';


const router = express.Router();


router.post("/register", 