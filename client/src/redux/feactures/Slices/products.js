import { createSlice } from "@reduxjs/toolkit";
import SortBar from "../../../Components/Layout/SortBar";
//import { productos } from "../../../utils/productos.json";

//import { AddProduct } from "../Thunks/products";

const initialState = {
  products: [],
  tempProducts: [],
  detail: {},
  createProducts: null,
  error: "",
  statusOperation: false,
  cartProduct: [],
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
      state.tempProducts = action.payload;
    },

    setProductID: (state, action) => {
      state.detail = action.payload;
    },

    //======FILTROS==========
    /*  applyCategoryFilter: (state, action) => {
      console.log("slices", action.payload);

      let categoryFiltered = state.tempProducts.filter((p) => {
        return p["Category"]["names"] === action.payload;

      });

      state.products =
        action.payload === "ALL" ? state.tempProducts : categoryFiltered;
    },
    applyBrandFilter: (state, action) => {
      console.log(action.payload);

      const filteredProducts = state.tempProducts.filter((p) => {
        return p["brand"] === action.payload;
      });

      state.products =
        action.payload === "ALL" ? state.tempProducts : filteredProducts;
    }, */

    applyCategoryFilter: (state, action) => {
      const filteredProducts =
        action.payload === "ALL"
          ? state.tempProducts
          : state.tempProducts.filter(
              (p) =>
                p.Category.names.toLowerCase() === action.payload.toLowerCase()
            );

      return {
        ...state,
        products: filteredProducts,
      };
    },

    applyBrandFilter: (state, action) => {
      const filteredProducts =
        action.payload === "ALL"
          ? state.tempProducts
          : state.tempProducts.filter(
              (p) => p.brand.toLowerCase() === action.payload.toLowerCase()
            );
      //state.products = filteredProducts;

      return {
        ...state,
        products: filteredProducts,
      };
    },
    /* 

//FILTRO COMBINADO DE CATEGORIA Y BRAND NO LO USE PERO QUEDO ACA 
    applyCombinedFilter: (state, action) => {
      const { category, brand } = action.payload;

      const filteredProducts = state.tempProducts.filter(
        (p) =>
          (category === "ALL" ||
            p.Category.names.toLowerCase() === category.toLowerCase()) &&
          (brand === "ALL" || p.brand.toLowerCase() === brand.toLowerCase())
      );

      return {
        ...state,
        products: filteredProducts,
      };
    }, */

    applyPriceFilter: (state, action) => {
      // console.log(action.payload);
      const sortOrden =
        action.payload === "DOWN"
          ? state.tempProducts.sort((a, b) => {
              if (a.price < b.price) {
                return -1;
              }
              if (a.price > b.price) {
                return 1;
              } else {
                return 0;
              }
            })
          : state.tempProducts.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              } else {
                return 0;
              }
            });

      state.products = sortOrden;
    },
    resetFilters: (state) => {
      state.tempProducts = state.products;
    },
  },

  /* 
applyCategoryAndBrandFilter: (state, action) => {
  const { category, brand } = action.payload;

  if (category === "ALL") {
    // Si la categoría es "ALL", simplemente aplicamos el filtro por marca
    const filteredProducts = brand === "ALL"
      ? state.tempProducts
      : state.tempProducts.filter(
          p => p.brand.toLowerCase() === brand.toLowerCase()
        );

    return {
      ...state,
      products: filteredProducts,
    };
  } else {
    // Si hay una categoría específica seleccionada, aplicamos ambos filtros
    const filteredProducts = state.tempProducts.filter(
      p =>
        p.Category.names.toLowerCase() === category.toLowerCase() &&
        (brand === "ALL" || p.brand.toLowerCase() === brand.toLowerCase())
    );

    return {
      ...state,
      products: filteredProducts,
    };
  }
},


*/

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
  applyPriceFilter,
} = productSlice.actions;

export default productSlice.reducer;
