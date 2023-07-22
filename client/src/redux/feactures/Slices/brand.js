import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  statusOperation: false,
  error: {},
  isLoading: false,
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,

  reducers: {
    setLoadingBrands: (state, action) => {
      state.isLoading = action.payload;
    },
    setStatusOperation: (state, action) => {
      state.statusOperation = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    setBrand: (state, action) => {
      state.brands = action.payload;
    },

    getBrand: (state, action) => {
      // console.log("brands: ", action.payload);
      state.brands = action.payload;
    },

    /*  setProductID: (state, action) => {
      //console.log("slices", action.payload);
      //state.detail.push(action.payload);
      // console.log("setProductId: ", action.payload);
      state.detail = action.payload;
    }, */
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
  setLoadingBrands,
  setStatusOperation,
  setBrand,
  setError,
  getBrand,
} = brandSlice.actions;

export default brandSlice.reducer;
