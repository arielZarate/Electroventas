import { configureStore } from "@reduxjs/toolkit";
//import {productSlice} from "./feactures/productSlices";
import productSlice from "./feactures/Slices/products";
import brandSlice from "./feactures/Slices/brand";
import categorySlice from "./feactures/Slices/category";
import userSlice from "./feactures/Slices/user";

const store = configureStore({
  reducer: {
    productStore: productSlice,
    brandStore: brandSlice,
    categoryStore: categorySlice,
    userStore: userSlice,
  },
});
export default store;
