import jwt from "jsonwebtoken"; // Library to verify JSON Web Tokens

// Middleware to authenticate user using JWT
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;              // Extract token from request headers

  // If token is missing, block access
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized, Login Again",
    });
  }

  try {
    // Verify token using secret key
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID to request for further use
    req.userId = token_decode.id;

    next(); // Allow request to proceed
  } catch (error) {
    console.log(error); // Log verification error
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export default authMiddleware; // Export middleware for protected routes
