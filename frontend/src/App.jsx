import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import LoginPopUp from "./components/LoginPopUp"; // ✅ Import this if you’re using it

const App = () => {
  // ✅ useState must be declared *inside* the component and wrapped in const
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>  
      {/* Conditional rendering of LoginPopUp */}
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}

      <div className="App">
        {/* Pass state setter to Navbar */}
        <Navbar setShowLogin={setShowLogin} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
