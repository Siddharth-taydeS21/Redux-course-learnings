import {
    combineReducers,
    createStore
} from "redux";

import cartReducer, {
    addCartItem,
    removeCartItem,
    CartItemQuantityIncrease,
    CartItemQuantityDecrease
} from "./slices/cartSlice";

import wishListReducer, {
    addWishListItem,
    removeWishListItem,
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM
} from "./slices/wishListSlice";

import productsReducer from "./slices/productsSlice";
import myCombineReducers from "./combineReducers";

//============================ REDUCER LOGIC WITH COMBINE REDUCER ============================//
const reducer = combineReducers({
    allProducts: productsReducer,
    cartList: cartReducer,
    wishList: wishListReducer,
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// store.dispatch(addCartItem(12))
// store.dispatch(addCartItem(6))
// store.dispatch(addCartItem(9))
// store.dispatch(CartItemQuantityIncrease(9))
// store.dispatch(addWishListItem(9))
// store.dispatch(removeWishListItem(9))
// store.dispatch(CartItemQuantityDecrease(6))
// store.dispatch(addCartItem(17, 3))
// store.dispatch(removeCartItem(12))