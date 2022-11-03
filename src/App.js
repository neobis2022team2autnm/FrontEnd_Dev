import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
