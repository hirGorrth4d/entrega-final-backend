import { Router } from "express";
const cartRoute = Router()
import * as cartController from '../controllers/cart.controller'

cartRoute.get('/addToCart/:id', cartController.addToCart)
cartRoute.get('/', cartController.findAll)
cartRoute.get('/deleteOne/:id', cartController.deleteOne)
cartRoute.get('/removeOne/:id', cartController.removeItem)

export default cartRoute