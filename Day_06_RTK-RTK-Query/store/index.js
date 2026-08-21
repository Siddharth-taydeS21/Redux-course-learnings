import { cartReducer } from "./slices/cartSlice";
import { wishListReducer } from "./slices/wishListSlice";
import productsReducer from "./slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware } from "../middlewares/apiMiddleware";

//============================ REDUCER LOGIC WITH COMBINE REDUCER ============================//
export const store = configureStore({
    reducer: {
        allProducts: productsReducer,
        cartList: cartReducer,
        wishList: wishListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddleware),
});