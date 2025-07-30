import express from 'express'
import { getCurrentUser } from '../controllers/userController.js';
import isAuth from '../middleware/isAuth.js';
import adminAuth from '../middleware/adminauth.js';
import { getAdmin } from '../controllers/userController.js';
const userRouter =express.Router();
userRouter.get('/getCurrentUser',isAuth, getCurrentUser)
userRouter.get('/getAdmin',adminAuth, getAdmin)
export default userRouter;