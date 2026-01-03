import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Create global store context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Stores cart items as { itemId: quantity }
  const [cartItems, setCartItems] = useState({});

  const [token,setToken] = useState("");

  const url="http://localhost:4000"

  useEffect(()=>{
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
  },[])

  // Add item to cart or increase quantity
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove item from cart or decrease quantity
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;       // If item not in cart, do nothing
      const updated = { ...prev };
      updated[itemId] -= 1;
      if (updated[itemId] <= 0) delete updated[itemId]; // Remove item if quantity is zero
      return updated;
    });
  };

  // Calculate total cart price
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find(
          (product) => item === product._id
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Values shared across the app
  const contextValue = {
    food_list,              // Available food items
    cartItems,              // Cart state
    addToCart,              // Add item function
    removeFromCart,         // Remove item function
    getTotalCartAmount,     // Cart total calculator
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}      {/* Wraps entire app */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
