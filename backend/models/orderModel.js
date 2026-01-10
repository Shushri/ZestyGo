import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
{
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "Food Processsing"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    payment: {
        type: Boolean,
        default: false
    }
}
)

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);   //It prevents Mongoose from redefining the same model on reload by reusing the existing model if it’s already created, avoiding the OverwriteModelError

export default orderModel;