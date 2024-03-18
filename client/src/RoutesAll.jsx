import React, { useState, useEffect } from "react";

import {
  Routes as Router,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Components/Auth/pages/authPages";
import Register from "./Components/Auth/Register/Register";
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
import { checkAuthState } from "./redux/feactures/Thunks/user";
//======================================================

import { useDispatch, useSelector } from "react-redux";

import { logoutUser, setRegisterThunk } from "./redux/feactures/Thunks/user";

function RoutesAll() {
  const navigate = useNavigate();
  const location = useLocation();

  //===========FIREBASE==========================

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.userStore.isLogged);
  const isRegistrationSuccessfull = useSelector(
    (state) => state.userStore.isRegistrationSuccessfull
  );

  //const [registeredCompleted, setRegisteredCompleted] = useState(false);

  //===========aca esta la verificacion del usuario logueado============
  //console.log("routes all", isLogged);

  // Verifica si la ruta actual es la página de inicio
  const isLandingPage = location.pathname === "/";
  const isCheckoutPage = location.pathname === "/checkout";
  const isLoginPage = location.pathname === "/auth/login";

  //console.log("isRegistracionSucessFull clg", isRegistrationSuccessfull);
  //console.log("isLogged", isLogged);
  //useEfecct

  //este useEffect controla el inicio de sesion del usuario
  //ademas en vez de usar localStorage para almacenar la sesion activa uso Firebase
  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  /* 
  
  este useEffect se ejecuta si el usuario se acaba de registrar
  redirije para su posterior logueo 
  #ademas desloguea al usuario para que se logue con las credenciales creadas recientemente
  
  */
  useEffect(() => {
    if (isRegistrationSuccessfull) {
      dispatch(logoutUser());

      setTimeout(() => {
        navigate("/auth/login");
      }, 1000);
    }
  }, [isRegistrationSuccessfull, , dispatch, navigate]);

  return (
    <>
      {!isLandingPage && !isCheckoutPage && <Header />}

      <Router>
        {/* Renderiza el Header solo si no estás en la página de inicio */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/formProduct" element={<FormProduct />} />
        <Route path="/formBrand" element={<FormBrand />} />
        <Route path="/formCategory" element={<FormCategory />} />
        <Route path="/products/:id" element={<CardDetail />} />

        {/*      <Route
          path="/cart"
          element={
            estaAutenticado ? (
              <Cart correoUsuario={selector} />
            ) : (
             
              <Login />
            )
          }
        /> */}
        <Route path="/checkout" element={<Checkout />} />
      </Router>
      {!isCheckoutPage && !isLoginPage && <Footer />}
    </>
  );
}

export default RoutesAll;
