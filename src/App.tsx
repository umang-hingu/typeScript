import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import './App.css'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about-us" element={<AboutusPage />}/>
      </Routes>
    </>
  );
}

export default App;
