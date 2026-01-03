//multiple routes will be created here

import express from "express";                         
import { loginUser, registerUser } from "../controllers/userController.js"; 

const userRouter = express.Router();             // Router instance for user-related endpoints
userRouter.post("/login", loginUser);                  
userRouter.post("/register", registerUser);            

export default userRouter;                             
