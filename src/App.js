
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Login";
import Home from './pages/Home';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SearchBar from "./components/Search-bar";
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import TrelloPage from "./pages/Trello";



i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['eng', 'ru'],
    fallbackLng: 'eng',
    debug: false,
    // Options for language detector
    detection: {
      order: [ 'cookie','localStorage','path', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/locales/{{lng}}/translate.json',
    },
    react: {useSuspense:false}
  })


const App = () => {
  return (
    <div className="w-screen px=[1%] md:px-[5%] lg:px-[15%] mx-auto">
      <Navbar />
      <Navigation />
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/auth/*" element={<Auth />} /> */}
        <Route path="/" element={<TrelloPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
