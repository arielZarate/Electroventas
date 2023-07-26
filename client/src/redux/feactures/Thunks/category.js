import Global from "../../../utils/Global_URL";
import axios from "axios";
import {
  setLoadingCategory,
  setStatusOperation,
  setError,
  getCategory,
  setCategory,
} from "../Slices/category";

export const AddCategory = (prop) => {
  return async (dispatch) => {
    try {
      //console.log(prop);
      dispatch(setLoadingCategory(true));

      // `${Global.url_back_local}/brand`
      const response = await axios.post(`${Global.url_back_local}/category`, {
        names: prop,
      }); // Llama a la función que agrega el producto en el servidor

      // Puedes realizar acciones adicionales si es necesario

      //console.log(response.data);

      if (response.data) {
        alert("CATEGORIAS AGREGADAS ");
        // console.log(response.data);
      }

      dispatch(setCategory(response.data));
      dispatch(setLoadingCategory(false));
      dispatch(setStatusOperation(true));

      return response.data; // Devuelve los datos del producto agregado si es necesario */
    } catch (error) {
      dispatch(setError({ message: error.message }));
      dispatch(setLoadingCategory(false));
      dispatch(setStatusOperation(false));
      throw error;
    }
  };
};

//TODO: GET CATEGORY
export const getCategories = () => {
  return async (dispatch) => {
    try {
      //  axios
      dispatch(setLoadingCategory(true));
      axios
        .get(`${Global.url_back_local}/category/`)
        .then((response) => {
          // console.log(response.data);
          dispatch(getCategory(response.data));
          dispatch(setLoadingCategory(false));
          dispatch(setStatusOperation(true));
        })
        .catch((error) => {
          console.log(error.message);
          dispatch(setError(error.message));
          dispatch(setLoadingCategory(false));
          dispatch(setStatusOperation(false));
        });
    } catch (error) {
      throw error.message;
    }
  };
};
