import Global from "../../../utils/Global_URL";
import axios from "axios";
import {
  setLoadingProducts,
  setProducts,
  setStatusOperation,
  setProductID,
  setError,
} from "../Slices/products";

///import { createAsyncThunk } from "@reduxjs/toolkit";
//===========================================

export const getProducts = () => {
  return async (dispatch) => {
    try {
      //setear loading a true....
      dispatch(setLoadingProducts(true));
      //TODO: PETICION A LA API COMO PROMESA
      const response = await axios.get(`${Global.url_back_local}/products`);

      if (response.data.length === 0) {
        // console.log(response.data.length);
        dispatch(setError("No hay datos disponibles"));
      } else {
        /*FIXME: ojo con el estado setError porque sino lo seteo cundo length >0 
            no se actualiza el error y queda aun en no hay productos disponibles
            */
        dispatch(setError(""));
        dispatch(setProducts(response.data));
        dispatch(setLoadingProducts(false));
        dispatch(setStatusOperation(true));
      }
    } catch (error) {
      //TODO: PROMESA RESUELTA EN ERROR
      throw error;
    }
  };
};

export const AddProduct = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingProducts(true));
      const response = await axios.post(
        // `${Global.url_back_local}/products/`,
        `${Global.url_back_local}/products/`,
        form
      ); // Llama a la función que agrega el producto en el servidor

      // Puedes realizar acciones adicionales si es necesario

      if (response.data) {
        alert("PRODUCTO AGREGADO ");
        // console.log(response.data);
      }

      dispatch(setLoadingProducts(false));
      dispatch(setProducts(response.data));
      dispatch(setStatusOperation(true));
      // return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
};

//FIXME: BUSCAR POR PRODUCTS

export const searchProductByName = (name) => {
  // console.log(name);
  return async function (dispatch) {
    try {
      //setear loading a true....
      dispatch(setLoadingProducts(true));
      //TODO: PETICION A LA API COMO PROMESA
      var response = await axios.get(
        `${Global.url_back_local}/products?name=${name}`
      );

      //console.log("thunk", response.data);
      dispatch(setProducts(response.data));
      dispatch(setLoadingProducts(false));
      dispatch(setStatusOperation(true));
      //return response;
    } catch (error) {
      // alert("product not found 😕");
      console.log(error - message);
    }
  };
};

//TODO: findById

export const getProductByID = (id) => {
  // console.log("id", id);
  return async (dispatch) => {
    try {
      dispatch(setLoadingProducts(true));
      axios
        .get(`${Global.url_back_local}/products/${id}`)
        .then((response) => {
          //console.log(response.data[0]);
          dispatch(setProductID(response.data[0]));
          dispatch(setLoadingProducts(false));
          dispatch(setStatusOperation(true));
        })
        .catch((e) => {
          console.log(e);
          dispatch(setLoadingProducts(false));
        });
    } catch (error) {
      console.log(error);
    }
  };
};

//TODO: PRODUCTSBYCATEGORY

export const getProductByCategory = (id) => {
  // console.log("id", id);
  return async (dispatch) => {
    try {
      dispatch(setLoadingProducts(true));
      axios
        .get(`${Global.url_back_local}/productsBycategory/${id}`)
        .then((response) => {
          // console.log(response.data.length);
          // console.log(response.data);

          if (response.data.length === 0) {
            // console.log(response.data.length);
            dispatch(setError("No hay datos disponibles"));
          } else {
            /*FIXME: ojo con el estado setError porque sino lo seteo cundo length >0 
            no se actualiza el error y queda aun en no hay productos disponibles*/
            dispatch(setError(""));
            dispatch(setProducts(response.data));
            dispatch(setLoadingProducts(false));
            dispatch(setStatusOperation(true));
          }
        })
        .catch((e) => {
          console.log(e);
          dispatch(setLoadingProducts(false));
        });
    } catch (error) {
      console.log(error);
    }
  };
};
