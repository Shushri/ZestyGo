import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}
)

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);   //It prevents Mongoose from redefining the same model on reload by reusing the existing model if it’s already created, avoiding the OverwriteModelError

export default foodModel;