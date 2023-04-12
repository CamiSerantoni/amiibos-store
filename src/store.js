import { configureStore } from "@reduxjs/toolkit";
import { amiiboSlice } from "./amiibo/amiiboSlice";
import {productSlice} from './amiibo/productSlice'
import saveStateMiddleware from "./localMiddleware";


let savedState = JSON.parse(localStorage.getItem('myApp'));
if (savedState === null ) {
  
    savedState = {amiibos: {amiibos: []} }
}

export const store = configureStore({
    reducer:{
        amiibos: amiiboSlice.reducer,
        products: productSlice.reducer
    },
    preloadedState: savedState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware)
})
