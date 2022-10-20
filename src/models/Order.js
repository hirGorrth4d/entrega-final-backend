import mongoose, { Schema } from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    cart: {
        type: Object, required: true
    },
    address: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    paymentId: {
        type: String, required: true
    }
})

export default mongoose.model('Order', orderSchema)