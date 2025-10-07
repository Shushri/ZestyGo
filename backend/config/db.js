import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Shrishti29:42178672@cluster0.rkcaafl.mongodb.net/food-del').then(()=>console.log("DB connected"));
}