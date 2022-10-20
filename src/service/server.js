import express from "express";
import morgan from "morgan";
import bodyParser from 'body-parser'
import mainRouter from "../routes/index.routes";
import {createRoles} from '../libs/initialSetup'
import cookieParser from "cookie-parser";
import session from "express-session";
import { sessionStore } from "./session";
import { isAuthenticated } from "../middlewares/authJwt";
import cors from 'cors'
import passport from "passport";


const app = express()
app.use(cors())
createRoles() 
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(session(sessionStore))


app.use((req,res, next) => {
    res.locals.login = req.isAuthenticated
    res.locals.session = req.session
    next()
})
//app.get('/', (req,res) => {
//    res.redirect('api/signup')
//})
app.use('/api', mainRouter)

export default app