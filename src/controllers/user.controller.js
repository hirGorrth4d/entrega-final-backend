import User from '../models/User'

export const createUser = (req,res) => {
    res.json({msg: "creando usuario"})
}

export const getAllUsers = async (req,res) => {
    const user = await User.find()
    res.json({
        user
    })
}
export const getUserById = (req,res) => {
    
}
export const updateUserById = (req,res) => {
    
}
export const deleteUserById = (req,res) => {
    
}