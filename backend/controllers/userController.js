//here we'll write the user sign in and sign up logic

import userModel from "../models/userModel.js";   // Mongoose model for user data
import jwt from "jsonwebtoken";               // Creates and verifies authentication tokens
import bcrypt from "bcrypt";                  // Hashes and compares passwords securely
import validator from "validator";            // Validates user input like email and password

//login user
const loginUser = async(req,res) => {

}

//register user
const registerUser = async(req,res) => {
    
}

export {loginUser, registerUser};
