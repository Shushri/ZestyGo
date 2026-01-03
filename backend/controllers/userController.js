//here we'll write the user sign in and sign up logic

import userModel from "../models/userModel.js";   // Mongoose model for user data
import jwt from "jsonwebtoken";               // Creates and verifies authentication tokens
import bcrypt from "bcrypt";                  // Hashes and compares passwords securely
import validator from "validator";            // Validates user input like email and password

//function to create token
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//login user
const loginUser = async(req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        //check if user exists or not
        if(!user){
            res.json({success:false, message:"The user doesn't exist!! "})
        }    

        //check password
        const PassMatch = await bcrypt.compare(password,user.password);
        if(!PassMatch){
            res.json({success:false, message:"Password is Invalid!!"})
        }

        const token = createToken(user._id);
        res.json({success:true, token});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error});
    }
    

}



//register user
const registerUser = async(req,res) => {
    const {name,password,email} = req.body;
    try {
        //checking if user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User Already Exists!!"});
        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please Enter a valid Email!!"});
        }
        //checking for strong password
        if(password.length<8){
            return res.json({success:false, message:"Enter Strong Password!!"})
        }

        //hashing use password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        //creating rew user and saving in database
        const newUser=new userModel(
            {
                name:name,
                email:email,
                password:hashedPassword
            }
        )

        const user = await newUser.save();

        const token = createToken(user._id);
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {loginUser, registerUser};
