import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unque: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
    cart: {
        type:Schema.Types.ObjectId, ref: 'Cart'
    }
},{
    timestamps: true,
    versionKey: false
})

// userSchema.methods.encryptPassword = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10))

// };
// userSchema.methods.comparePassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

export default model('User', userSchema)