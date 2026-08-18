// ACTIONS
const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantityOfItem';
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantityOfItem';

import { produce } from 'immer'

// ACTION CREATORS
export function addCartItem(productData) {
    return {
        type: CART_ADD_ITEM,
        payload: {
            ...productData,
            productQuantity: 1
        }
    }
}

export function removeCartItem(productId) {
    return {
        type: CART_REMOVE_ITEM,
        payload: {
            productId
        }
    }
}

export function CartItemQuantityIncrease(productId) {
    return {
        type: CART_ITEM_INCREASE_QUANTITY,
        payload: {
            productId
        }
    }
}

export function CartItemQuantityDecrease(productId) {
    return {
        type: CART_ITEM_DECREASE_QUANTITY,
        payload: {
            productId
        }
    }
}

// REDUCER
export default function cartReducer(OriginalState = [], action) {
    return produce(OriginalState, (state) => {
        const exitingItemIndex = state.findIndex(cartItem => cartItem.productId === action.payload.productId)
        const existingItem = state[exitingItemIndex];
        switch (action?.type) {
            case CART_ADD_ITEM:
                if (existingItem) {
                    existingItem.productQuantity += 1;
                    break
                }
                state.push(action.payload)
                break

            case CART_REMOVE_ITEM:
                state.splice(exitingItemIndex, 1)
                break

            case CART_ITEM_INCREASE_QUANTITY:
                state[exitingItemIndex].productQuantity += 1;
                break

            case CART_ITEM_DECREASE_QUANTITY:
                state[exitingItemIndex].productQuantity -= 1;
                if (state[exitingItemIndex].productQuantity === 0) {
                    state.splice(exitingItemIndex, 1)
                }
        }
        return state;
    })
}