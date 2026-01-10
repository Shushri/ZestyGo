import React, { useState } from "react";                     // React and state hook
import { Routes, Route } from "react-router-dom";            // Routing components
import Navbar from "./components/Navbar";                    // Top navigation bar
import Home from "./pages/Home";                              // Home page
import Cart from "./pages/Cart";                              // Cart page
import PlaceOrder from "./pages/PlaceOrder";                  // Order placement page
import Footer from "./components/Footer";                     // Footer component
import LoginPopUp from "./components/LoginPopUp";             // Login modal component
import ScrollToTop from "./components/ScrollToTop";           // Scrolls page to top on route change
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

const App = () => {
  // Controls visibility of login popup
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Show login popup only when showLogin is true */}
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}

      <div className="App">
        {/* Navbar can open login popup using setShowLogin */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Define application routes */}
        <Routes>
          <Route path="/" element={<Home />} />                {/* Home route */}
          <Route path="/cart" element={<Cart />} />            {/* Cart route */}
          <Route path="/order" element={<PlaceOrder />} />     {/* Order route */}
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>

      {/* Common footer across all pages */}
      <Footer />

      {/* Ensures page starts from top on navigation */}
      <ScrollToTop />
    </>
  );
};

export default App;                                          // Export main App component
