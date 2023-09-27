import React from "react";

import LoginPage from "./modules/Login/pages/LoginPages";
import { Routes as Router, Route, Link, useLocation } from "react-router-dom";
import LandingPage from "./Components/Landing/LandingPage";
import HomePage from "./Pages/Home/HomePage";
import Header from "./Components/Layout/Header";
import FormProduct from "./Components/Formulario/FormProduct";
import CardDetail from "./Components/Cards/CardDetail";
import FormBrand from "./Components/Formulario/FormBrand";
import FormCategory from "./Components/Formulario/FormCategory";
import Footer from "./Components/Layout/Footer";
import Checkout from "./Components/Cart/Checkout";
import Cart from "./Components/Cart/Cart";
function RoutesAll() {
  const location = useLocation();

  // Verifica si la ruta actual es la página de inicio
  const isLandingPage = location.pathname === "/";
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {!isLandingPage && !isCheckoutPage && <Header />}
      <Router>
        {/* Renderiza el Header solo si no estás en la página de inicio */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/formProduct" element={<FormProduct />} />
        <Route path="/formBrand" element={<FormBrand />} />
        <Route path="/formCategory" element={<FormCategory />} />
        <Route path="/products/:id" element={<CardDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Router>

      {/*    {!isLandingPage && !isCheckoutPage && <Footer />} */}
      {!isCheckoutPage && <Footer />}
    </>
  );
}

export default RoutesAll;
