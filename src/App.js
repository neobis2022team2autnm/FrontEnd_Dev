
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Login";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="w-screen px-[5%] mx-auto">
      <Navbar />
      <Navigation/>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>

    </div>
  );
};

export default App;
