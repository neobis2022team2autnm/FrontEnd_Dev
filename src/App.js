
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Login";
import Home from './pages/Home';
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import SearchBar from "./components/Search-bar";

const App = () => {
  return (
    <div className="w-screen px=[1%] md:px-[5%] lg:px-[15%] mx-auto">
      <Navbar />
      <Navigation />
      <SearchBar/>
      <Slider  />
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
