import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Shrishti01:393755@cluster0.3dtbeny.mongodb.net/FoodDelWebApp').then(()=>console.log("DB connected"));
}