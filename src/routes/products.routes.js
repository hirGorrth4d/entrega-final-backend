import { Router } from "express";
import * as ProductController from '../controllers/products.controller'
import { authJwt } from "../middlewares";
const ProductRouter = Router()

ProductRouter.get('/', ProductController.getAllProducts)

ProductRouter.post('/', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], ProductController.createProduct)

ProductRouter.get('/:productId', ProductController.getProductById)

ProductRouter.put('/:productId', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], ProductController.updateProduct)

ProductRouter.delete('/:productId', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], ProductController.deleteProduct)

export default ProductRouter;