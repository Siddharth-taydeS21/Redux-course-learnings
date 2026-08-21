import {
    combineReducers,
    createStore
} from "redux";

import {
    cartReducer,
    addCartItem,
    removeCartItem,
    CartItemQuantityIncrease,
    CartItemQuantityDecrease
} from "./slices/cartSlice";

import {
    wishListReducer,
    addWishListItem,
    removeWishListItem,
} from "./slices/wishListSlice";

import productsReducer from "./slices/productsSlice";
import myCombineReducers from "./combineReducers";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "../middlewares/logger";

//============================ REDUCER LOGIC WITH COMBINE REDUCER ============================//
export const store = configureStore({
    reducer: {
        allProducts: productsReducer,
        cartList: cartReducer,
        wishList: wishListReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(logger),
});


// store.dispatch(addCartItem(12))
// store.dispatch(addCartItem(6))
// store.dispatch(addCartItem(9))
// store.dispatch(CartItemQuantityIncrease(9))
// store.dispatch(addWishListItem(9))
// store.dispatch(removeWishListItem(9))
// store.dispatch(CartItemQuantityDecrease(6))
// store.dispatch(addCartItem(17, 3))
// store.dispatch(removeCartItem(12))