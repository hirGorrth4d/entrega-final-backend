import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    userId: {type:mongoose.Types.ObjectId, ref: 'User', required: true},
    message: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Messages', messagesSchema)

