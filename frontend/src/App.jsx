import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Cart from "./pages/cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>  
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
};

export default App;
