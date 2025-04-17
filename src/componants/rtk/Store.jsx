import { configureStore } from "@reduxjs/toolkit";
// import ProductSlice from '../rtk/slices/ProductSlice'
import productSlice from './slices/ProductSlice';
import CartSlice from './slices/CartSlice';
import  likeSlice  from "./slices/LikeSlice";


export const store = configureStore({
    reducer:{
        // products: ProductSlice,
        Products: productSlice,
        Cart: CartSlice,
        Favorite: likeSlice
    }
})