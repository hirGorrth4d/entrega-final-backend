import { Router } from "express";
const userRouter = Router()
import * as userController from '../controllers/user.controller'
import {authJwt, verifySignUp} from '../middlewares'

userRouter.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted], userController.createUser)
userRouter.get('/', userController.getAllUsers)

export default userRouter