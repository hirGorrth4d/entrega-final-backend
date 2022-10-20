import { Router} from "express";
import * as MessageController from '../controllers/messages.controller'
const messageRouter = Router()

messageRouter.get('/', MessageController.getMessages)
messageRouter.post('/', MessageController.addMessages)


export default messageRouter