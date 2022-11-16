import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from "./components/Footer";
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import Loading from "./components/Loading";



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
      order: ['cookie', 'localStorage', 'path', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/locales/{{lng}}/translate.json',
    },
    react: { useSuspense: false }
  })


const App = () => {
  return (
    <div className="w-screen px=[1%] md:px-[5%] lg:px-[15%] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
