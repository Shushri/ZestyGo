import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url="https://zestygo-p4xg.onrender.com/"
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer/>
      {/* Top Navbar */}
      <Navbar />
      <hr />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/add" element={<Add url={url}/>} />
            <Route path="/list" element={<List url={url}/>} />
            <Route path="/order" element={<Orders url={url}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
