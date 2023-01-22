import { UserController } from '../controller/UserController';
import express from "express";

const userController=new UserController();

export const userRouter= express.Router();

userRouter.get("/getAll",userController.getUsers)
userRouter.post("/create",userController.create)
