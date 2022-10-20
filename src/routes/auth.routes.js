import { Router } from "express";
const authRouter = Router()
import * as AuthController from '../controllers/auth.controller'
import {verifySignUp} from '../middlewares'

authRouter.get('/signup', (req,res) => {
    res.render('signup')
})
authRouter.post('/signup', verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted, AuthController.signUp)

authRouter.post('/signin', AuthController.signIn)

export default authRouter