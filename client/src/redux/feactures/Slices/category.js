import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  statusOperation: false,
  error: {},
  isLoading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,

  reducers: {
    setLoadingCategory: (state, action) => {
      state.isLoading = action.payload;
    },
    setStatusOperation: (state, action) => {
      state.statusOperation = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    setCategory: (state, action) => {
      state.categories = action.payload;
    },

    getCategory: (state, action) => {
      // console.log("categories: ", action.payload);
      state.categories = action.payload;
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
  setLoadingCategory,
  setStatusOperation,
  setCategory,
  setError,
  getCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
