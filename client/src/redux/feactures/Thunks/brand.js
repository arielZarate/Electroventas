import Global from "../../../utils/Global_URL";
import axios from "axios";
import {
  setBrand,
  setLoadingBrands,
  setStatusOperation,
  setError,
  getBrand,
} from "../Slices/brand";

export const AddBrand = (prop) => {
  return async (dispatch) => {
    try {
      // console.log(prop);

      dispatch(setLoadingBrands(true));

      /*   `${Global.url_back_local}/brand` */
      const response = await axios.post(`${Global.url}/brand`, {
        names: prop,
      }); // Llama a la función que agrega el producto en el servidor

      // Puedes realizar acciones adicionales si es necesario

      //console.log(response.data);

      if (response.data) {
        alert("MARCAS AGREGADAS ");
        // console.log(response.data);
      }

      dispatch(setBrand(response.data));
      dispatch(setLoadingBrands(false));
      dispatch(setStatusOperation(true));

      return response.data; // Devuelve los datos del producto agregado si es necesario  */
    } catch (error) {
      dispatch(setError({ message: error.message }));
      dispatch(setLoadingBrands(false));
      dispatch(setStatusOperation(false));
      throw error;
    }
  };
};

//TODO: GET BRANDS
export const getBrands = () => {
  return async (dispatch) => {
    try {
      //  axios
      dispatch(setLoadingBrands(true));
      axios
        .get(`${Global.url}/brand/`)
        .then((response) => {
          //console.log(response.data);
          dispatch(getBrand(response.data));
          dispatch(setLoadingBrands(false));
          dispatch(setStatusOperation(true));
        })
        .catch((error) => {
          console.log(error.message);
          dispatch(setError(error.message));
          dispatch(setLoadingBrands(false));
          dispatch(setStatusOperation(false));
        });
    } catch (error) {
      throw error.message;
    }
  };
};
