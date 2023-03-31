import { configureStore } from "@reduxjs/toolkit";
import { amiiboSlice } from "./amiibo/amiiboSlice";
import {productSlice} from './amiibo/productSlice'
import saveStateMiddleware from "./localMiddleware";


const savedState = JSON.parse(localStorage.getItem('myApp'));
export const store = configureStore({
    reducer:{
        amiibos: amiiboSlice.reducer,
        products: productSlice.reducer,
    },
    preloadedState: savedState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware)
})