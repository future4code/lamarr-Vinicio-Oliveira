import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/signup', userController.signup)
userRouter.post('/login',userController.login)
userRouter.put('/edit',userController.editUser)
userRouter.put('/geraToken',userController.geraToken)