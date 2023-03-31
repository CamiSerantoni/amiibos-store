import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    precioTotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const products = state.products;
      let precioTotal = state.precioTotal;
      //  console.log(action.payload.id)
      //  console.log(products)

      precioTotal = precioTotal + action.payload.price;

      if (products[String(action.payload.id)] === undefined) {
        products[String(action.payload.id)] = {
          ...action.payload,
          cantidad: 1,
        };
      } else {
        products[String(action.payload.id)].cantidad =
          products[String(action.payload.id)].cantidad + 1;
      }
      state.products = products;
      state.precioTotal = precioTotal;
    },
    deleteProduct: (state, action) => {
      const products = state.products;
      let precioTotal = state.precioTotal;
      precioTotal = precioTotal - products[action.payload.id].price;
      if (products[action.payload.id].cantidad !== 1) {
        products[action.payload.id].cantidad =
          products[action.payload.id].cantidad - 1;
      } else {
        delete products[action.payload.id];
      }
      state.products = products;
      state.precioTotal = precioTotal;
    },
    removeAllCart: (state, action) => {
      state.products = {};
      state.precioTotal = 0;
    },
  },
});

export const { addProduct, deleteProduct, removeAllCart } =
  productSlice.actions;
