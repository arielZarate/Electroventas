import Global from "../../../utils/Global_URL";
import axios from "axios";
import {
  setLoadingProducts,
  setProducts,
  setStatusOperation,
  setProductID,
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
      //console.log("getProducts thunk get", response.data);
      dispatch(setProducts(response.data));
      dispatch(setLoadingProducts(false));
      dispatch(setStatusOperation(true));
      //return response;
    } catch (error) {
      //TODO: PROMESA RESUELTA EN ERROR
      throw error;
    }
  };
};

export const AddProduct = (form) => {
  return async (dispatch) => {
    try {
      // console.log(form);

      dispatch(setLoadingProducts(true));

      const response = await axios.post(
        `${Global.url_back_local}/products`,
        form
      ); // Llama a la función que agrega el producto en el servidor

      // Puedes realizar acciones adicionales si es necesario

      if (response.data) {
        alert("PRODUCTO AGREGADO ");
        // console.log(response.data);
      }

      //  dispatch(getProducts());
      dispatch(setLoadingProducts(false));
      dispatch(setProducts(response.data));
      dispatch(setStatusOperation(true));
      return response.data; // Devuelve los datos del producto agregado si es necesario  */
    } catch (error) {
      throw error;
    }
  };
};

/* export const createProduct = (form) => {
  return async (dispatch) => {
   // dispatch(setLoadingProducts(true));
    return await axios({
      url: `${Global.URL}/products`,
      method: "POST",
      body: form,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: form,
    })
      .then((response) => {
        console.log(response);
        dispatch(getProducts());
        dispatch(setLoadingProducts(false));
        dispatch(setCreateProduct(response.data.newProduct.id));
        Toast.fire({
          icon: "success",
          text: "Producto agregado correctamente",
        });
      })
      .catch((response) => {
        console.log(response);
        dispatch(setLoadingProducts(false));
        Swal.fire({
          icon: "error",
          title: response.response.data.Message,
        });
      });
  };
}; */

//TODO: findById
/* export const getProductById = (id) => {
  return async (dispatch) => {
    dispatch(setLoadingProducts(true));
    try {
      // console.log("id", id);
      const response = await axios.get(
        `${Global.url_back_local}/products/${id}`
      );

      console.log("ById", response.data);
      await dispatch(setProductID(response.data));
      await dispatch(setLoadingProducts(false));
    } catch (error) {
      console.error(error.message);
      dispatch(setLoadingProducts(false));
    }
  };
};
 */

export const getProductByID = (id) => {
  // console.log("id", id);
  return async (dispatch) => {
    try {
      dispatch(setLoadingProducts(true));
      axios
        .get(`${Global.url_back_local}/products/${id}`)
        .then((response) => {
          // console.log(response.data[0]);
          dispatch(setProductID(response.data[0]));
          // dispatch(setLoadingProducts(false));
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
