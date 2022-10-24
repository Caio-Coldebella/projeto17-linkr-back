import express from 'express';
import validateSchema from '../middlewares/validationSchema.js';
import { loginSchema, signUpSchema } from '../schemas/authSchema.js'
import { signIn, signUp } from '../controllers/authController.js';

import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/signup', validateSchema(signUpSchema), signUp);

router.post('/signin', validateSchema(loginSchema), signIn)

export default router;