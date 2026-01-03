import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios"

const LoginPopUp = ({ setShowLogin }) => {
  const {url,token,setToken} = useContext(StoreContext)
  const [currState, setCurrState] = useState("login"); // 'login' or 'signup'
  const [data,setData] = useState(
    {
      name:"",
      email:"",
      password:""
    }
  )
 const onChangeHandler = (event) => {
  const name = event.target.name;   // Get input field name
  const value = event.target.value; // Get input field value
  setData(data => ({ ...data, [name]: value })); // Update state dynamically
};

const onLogin = async (event) => {
    event.preventDefault();
    let newUrl=url;
    if (currState==="login"){
      newUrl+="/api/user/login";
    }
    else{
      newUrl+="/api/user/register"
    }

    const response = await axios.post(newUrl,data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)

    }
    else{
      alert(response.data.message)
    }
}


  useEffect(
    ()=>{
      console.log(data)
    },[data]
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 relative transition-all duration-300 transform hover:scale-[1.01]">
        {/* Close Icon */}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="close"
          className="w-6 h-6 absolute top-4 right-4 cursor-pointer hover:scale-110 transition-transform"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {currState === "login" ? "Welcome Back 👋" : "Create an Account 🩵"}
        </h2>

        {/* Form */}
        <form onSubmit={onLogin} className="flex flex-col gap-4">
          {currState !== "login" && (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Your Name"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Your Password"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg mt-2 hover:opacity-90 transition"
          >
            {currState === "signup" ? "Create Account" : "Login"}
          </button>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <input type="checkbox" required />
            <label>I agree to the terms and conditions</label>
          </div>

          {/* Switch Between Login / Signup */}
          {currState === "login" ? (
            <p className="text-center text-sm text-gray-700 mt-4">
              Don’t have an account?{" "}
              <span
                onClick={() => setCurrState("signup")}
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="text-center text-sm text-gray-700 mt-4">
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("login")}
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
