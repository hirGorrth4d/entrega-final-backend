import Message from '../models/Messages'

export const getMessages = async(req,res) =>{
    try {
        const messages = await Message.find()
        res.status(200).json({
            messages
        })
    } catch (err) {
        throw err
    };
}

export const addMessages = async( req,res) =>{
    try {
        const {userId} = req
        const {message} = req.body
        const messageRecieved = {
            userId, message
        }
        
        const newMessage = await Message.create(messageRecieved)
        if (newMessage) return newMessage

        res.status(200).json({
            msg: 'mensajes añadidos',
            newMessage
        })
    } catch (err) {
        throw err
    };
}