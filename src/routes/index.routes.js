import { Router } from "express";
import authRouter from "./auth.routes";
import ProductRouter from "./products.routes";
import userRouter from "./user.routes";
import cartRoute from "./cart.routes";
import messageRouter from "./messages.routes";
const mainRouter = Router()

mainRouter.use('/auth', authRouter)
mainRouter.use('/productos', ProductRouter)
mainRouter.use('/user', userRouter)
mainRouter.use('/cart', cartRoute)
mainRouter.use('/messages', messageRouter)




export default mainRouter