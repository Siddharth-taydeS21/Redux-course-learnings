import { createStore } from "redux";
import { productsList } from "./products"; // this is array 20 hardcoded Json object of e-com products (downloaded form fake store API)

const state = {
    allProducts: productsList,
    cartList: [],
    wishList: [],
}

const findDuplicates = (arr) => {
    const seen = new Set();
    const duplicates = new Set();
  
    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    }
    return [...seen]; // Convert Set back to an Array
  };

const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantityOfItem';
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantityOfItem';

const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

function reducer(initialState = state, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            return {
                ...initialState, 
                cartList: [...initialState.cartList, action.payload]
            }
        case CART_REMOVE_ITEM:
            return { ...initialState, cartList: initialState.cartList.filter((cartListitem) => cartListitem.productId !== action.payload.productId) }
        case CART_ITEM_INCREASE_QUANTITY:
            return {
                ...initialState,
                cartList: initialState.cartList.map((cartListitem) => {
                    if (cartListitem.productId === action.payload.productId) {
                        return { ...cartListitem, productQuantity: cartListitem.productQuantity + 1 }
                    }
                    return cartListitem;
                })
            }
        case CART_ITEM_DECREASE_QUANTITY:
            return {
                ...initialState,
                cartList: initialState.cartList.map((cartListitem) => {
                    if (cartListitem.productId === action.payload.productId) {
                        return { ...cartListitem, productQuantity: cartListitem.productQuantity - 1 }
                    }
                    return cartListitem;
                }).filter((item) => item.productQuantity >= 1) // if the quantity becomes 0, the item will be removed from cart
            }
        case WISHLIST_ADD_ITEM:
            return { ...initialState, wishList: [...initialState.wishList, action.payload] }
        case WISHLIST_REMOVE_ITEM:
            return { ...initialState, wishList: initialState.wishList.filter((wishListitem) => wishListitem.productId !== action.payload.productId) }
        default:
            return initialState;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, productQuantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 6, productQuantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 9, productQuantity: 1 } })
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 9 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 9 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 9 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productId: 6 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, productQuantity: 1 } })