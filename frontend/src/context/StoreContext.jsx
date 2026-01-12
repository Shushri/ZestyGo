import React, { createContext, useEffect, useState } from "react";
import axios from "axios"; // HTTP client for API calls

// Create global store context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Stores cart items as { itemId: quantity }
  const [cartItems, setCartItems] = useState({});

  // Stores food list fetched from backend
  const [food_list, setFood_list] = useState([]);

  // Stores authentication token
  const [token, setToken] = useState("");

  // Backend base URL
  const url = "https://zestygo-p4xg.onrender.com/";

  // Load food list and token on initial render
  useEffect(() => {
    async function loadData() {
      await fetchFoodList(); // Fetch food items from backend
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token")); // Restore token from localStorage
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  // Add item to cart or increase quantity
  const addToCart = async(itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if(token){
      await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
    }
  };

  // Remove item from cart or decrease quantity
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // If item not in cart, do nothing
      const updated = { ...prev };
      updated[itemId] -= 1;
      if (updated[itemId] <= 0) delete updated[itemId]; // Remove item if quantity is zero
      return updated;
    });
    if(token){
      await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}})
    }
  };

  // Calculate total cart price
  const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    const itemInfo = food_list.find(
      (product) => product._id === item
    );

    // If food not loaded yet or item missing, skip
    if (!itemInfo) continue;

    totalAmount += itemInfo.price * cartItems[item];
  }

  return totalAmount;
};

  // Fetch food items from backend API
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFood_list(response.data.data);
  };

  //to save the cart for a particular user even if the page is refreshed
  const loadCartData = async(token) => {
    const response = await axios.post(`${url}/api/cart/get`,{},{headers:{token}})
    setCartItems(response.data.cartData);
  }

  // Values shared across the app
  const contextValue = {
    food_list,          // Available food items
    cartItems,          // Cart state
    addToCart,          // Add item function
    removeFromCart,     // Remove item function
    getTotalCartAmount, // Cart total calculator
    url,                // Backend URL
    token,              // Auth token
    setToken,           // Update token
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}   {/* Wraps entire application */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
