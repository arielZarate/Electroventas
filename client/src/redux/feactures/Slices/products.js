import { createSlice } from "@reduxjs/toolkit";
//import { productos } from "../../../utils/productos.json";

//import { AddProduct } from "../Thunks/products";

const initialState = {
  products: null,
  tempProducts: null,
  detail: {},
  createProducts: null,
  error: "",
  statusOperation: false,

  isLoading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setLoadingProducts: (state, action) => {
      state.isLoading = action.payload;
    },
    setStatusOperation: (state, action) => {
      state.statusOperation = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
      /*   return {
        ...state.error,
        error: action.payload,
      }; */
    },

    /*   
    //otra forma
     const nuevoProducto = action.payload;
      // state.products.push(nuevoProducto); //OJO ACA ESTA MODIFICANDO EL ESTADO NO SE RECOMIENDA
      return [...state.productos, nuevoProducto];
    }, */
    setProducts: (state, action) => {
      //return [...state.products, (products = action.payload)];
      state.products = action.payload;
    },

    setProductID: (state, action) => {
      state.detail = action.payload;
    },

    //======FILTROS==========
    applyCategoryFilter: (state, action) => {
      //TODO: El action.payload ya me trae del backend todo el filtro

      state.tempProducts =
        action.payload === "ALL" ? state.products : action.payload;

      state.products = state.tempProducts;
    },
    applyBrandFilter: (state, action) => {
      /*  const { brand } = action.payload;
      state.tempProducts = state.products.filter(
        (product) => product.brand === brand
      ); */

      state.tempProducts =
        action.payload === "ALL" ? state.products : action.payload;

      state.products = state.tempProducts;
    },
    resetFilters: (state) => {
      state.tempProducts = state.products;
    },
  },
  /*  extraReducers: (builder) => {
    builder.addCase(AddProduct.pending, (state) => {
      state.status = "uploading";
    });
    builder.addCase(AddProduct.fulfilled, (state) => {
      state.status = "added succeeded";
    });
    builder.addCase(AddProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }, */
});

// Action creators are generated for each case reducer function
export const {
  setProducts,
  setLoadingProducts,
  setStatusOperation,
  setProductID,
  setError,
  resetFilters,
  applyCategoryFilter,
  applyBrandFilter,
} = productSlice.actions;

export default productSlice.reducer;
