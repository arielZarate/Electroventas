import React from "react";

import LoginPage from "./modules/Login/pages/LoginPages";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./modules/Landing/LandingPage";
import HomePage from "./modules/Home/HomePage";
import NavBar from "./modules/Layout/NavBar";
function RoutesAll() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default RoutesAll;
