import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
