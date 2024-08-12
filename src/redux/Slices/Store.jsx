import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


export const store = configureStore ({   // "store" is the name which we put on Provider in our "Index.js".
    reducer:{
        cart: CartSlice,
    }, 
});