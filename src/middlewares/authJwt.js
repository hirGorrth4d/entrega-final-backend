import jwt from "jsonwebtoken"
import Role from "../models/Role"
import User from "../models/User"
import Config from "../service/config"

export const verifyToken = async(req,res,next) =>{

    try {
        const token = req.headers["x-access-token"]
        console.log(token)
    
        if (!token) return res.status(403).json({msg: ' no token provided'})
    
        const decoded = jwt.verify(token, Config.TOKEN_SECRET_KEY)
        req.userId = decoded.id
        console.log(decoded)
        const user = await User.findById(req.userId, {password: 0} )
    
        if(!user) return res.status(404).json({msg: 'no encontrado user'})
        next()
    } catch (err) {
        return res.status(403).json({
            msg: "requiere autorizacion"
        })
    };


}

export const isModerator = async (req,res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for(let i = 0; i < roles.length; i++) {
        if( roles[i].name === "moderador") {

            next()

            return;
        }
    }
    return res.status(403).json({
        msg: "requiere rol de moderador"
    })

}

export const isAdmin = async (req,res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for(let i = 0; i < roles.length; i++) {
        if( roles[i].name === "admin") {

            next()

            return;
        }
    }
    return res.status(402).json({
        msg: "requiere rol de admin"
    })

}

export const isAuthenticated = async (req,res, next) => {
    const token = req.headers.auth
    try {
        const user = verifyToken(token)
        req.user = user.data
        next()
    } catch (err) {
        res.status(400).json(err)
    };
}