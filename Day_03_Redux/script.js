import {
    combineReducers,
    createStore
} from "redux";

import cartReducer, {
    addCartItem,
    removeCartItem,
    CartItemQuantityIncrease,
    CartItemQuantityDecrease
} from "./cartReducer";

import wishListReducer, {
    addWishListItem,
    removeWishListItem,
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM
} from "./wishListReducer";

import productsReducer from "./productsReducer";
import myCombineReducers from "./combineReducers";

// const state = {
//     allProducts: productsList,
//     cartList: [],
//     wishList: [],
// }

//============================ REDUCER LOGIC WITH COMBINE REDUCER ============================//
const reducer = combineReducers({
    allProducts: productsReducer,
    cartList: cartReducer,
    wishList: wishListReducer,
})

//============================ REDUCER LOGIC WITH MY OWN COMBINE REDUCER ============================//
// const reducer = myCombineReducers({
//     allProducts: productsReducer,
//     cartList: cartReducer,
//     wishList: wishListReducer,
// })

//============================ REDUCER LOGIC WITH ONE REDUCER ============================//

// function reducer(initialState = state, action) {
//     switch (action.type) {
//         case CART_ADD_ITEM:
//             return {
//                 ...initialState, 
//                 cartList: [...initialState.cartList, action.payload]
//             }
//         case CART_REMOVE_ITEM:
//             return { ...initialState, cartList: initialState.cartList.filter((cartListitem) => cartListitem.productId !== action.payload.productId) }
//         case CART_ITEM_INCREASE_QUANTITY:
//             return {
//                 ...initialState,
//                 cartList: initialState.cartList.map((cartListitem) => {
//                     if (cartListitem.productId === action.payload.productId) {
//                         return { ...cartListitem, productQuantity: cartListitem.productQuantity + 1 }
//                     }
//                     return cartListitem;
//                 })
//             }
//         case CART_ITEM_DECREASE_QUANTITY:
//             return {
//                 ...initialState,
//                 cartList: initialState.cartList.map((cartListitem) => {
//                     if (cartListitem.productId === action.payload.productId) {
//                         return { ...cartListitem, productQuantity: cartListitem.productQuantity - 1 }
//                     }
//                     return cartListitem;
//                 }).filter((item) => item.productQuantity >= 1) // if the quantity becomes 0, the item will be removed from cart
//             }
//         case WISHLIST_ADD_ITEM:
//             return { ...initialState, wishList: [...initialState.wishList, action.payload] }
//         case WISHLIST_REMOVE_ITEM:
//             return { ...initialState, wishList: initialState.wishList.filter((wishListitem) => wishListitem.productId !== action.payload.productId) }
//         default:
//             return initialState;
//     }
// }

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(addCartItem(12))
store.dispatch(addCartItem(6))
store.dispatch(addCartItem(9))
store.dispatch(CartItemQuantityIncrease(9))
store.dispatch(addWishListItem(9))
store.dispatch(removeWishListItem(9))
store.dispatch(CartItemQuantityDecrease(6))
store.dispatch(addCartItem(17, 3))
store.dispatch(removeCartItem(12))