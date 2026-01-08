import express from "express";                                // Express framework
import { addToCart, removeFromCart, getCart } 
  from "../controllers/cartController.js";                   // Cart controller functions
import authMiddleware from "../middleware/auth.js";           // Middleware to protect routes

const cartRouter = express.Router();                          // Router for cart-related APIs

// Add item to user's cart (protected route)
cartRouter.post("/add", authMiddleware, addToCart);

// Remove item from user's cart (protected route)
cartRouter.post("/remove", authMiddleware, removeFromCart);

// Get user's cart data (protected route)
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;                                    // Export cart routes
