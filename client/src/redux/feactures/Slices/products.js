import { createSlice } from "@reduxjs/toolkit";
//import { productos } from "../../../utils/productos.json";

//import { AddProduct } from "../Thunks/products";

const Status = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

const initialState = {
  products: null,
  tempProducts: null,
  detail: {},
  createProducts: null,
  error: null,
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
    /*   
    //otra forma
    
    setProducts: (state, action) => {
     // console.log(state, action);

      const nuevoProducto = action.payload;
      // state.products.push(nuevoProducto); //OJO ACA ESTA MODIFICANDO EL ESTADO NO SE RECOMIENDA
      return [...state.productos, nuevoProducto];
    }, */
    setProducts: (state, action) => {
      //return [...state.products, (products = action.payload)];
      state.products = action.payload;
      //[...state.tempProducts, newProduct];
    },

    setProductID: (state, action) => {
      //console.log("slices", action.payload);
      //state.detail.push(action.payload);
      // console.log("setProductId: ", action.payload);
      state.detail = action.payload;
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
} = productSlice.actions;

export default productSlice.reducer;
