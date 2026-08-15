// ACTIONS
const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantityOfItem';
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantityOfItem';

// ACTION CREATORS
export function addCartItem(productId, productQuantity = 1) {
    return {
        type: CART_ADD_ITEM,
        payload: {
            productId, productQuantity
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
export default function cartReducer(state = [], action) {
    switch (action?.type) {
        case CART_ADD_ITEM:
            return [...state, action.payload]

        case CART_REMOVE_ITEM:
            return state.filter((cartListitem) => cartListitem.productId !== action.payload.productId)

        case CART_ITEM_INCREASE_QUANTITY:
            return state.map((cartListitem) => {
                if (cartListitem.productId === action.payload.productId) {
                    return { ...cartListitem, productQuantity: cartListitem.productQuantity + 1 }
                }
                return cartListitem;
            })

        case CART_ITEM_DECREASE_QUANTITY:
            return state.map((cartListitem) => {
                if (cartListitem.productId === action.payload.productId) {
                    return { ...cartListitem, productQuantity: cartListitem.productQuantity - 1 }
                }
                return cartListitem;
            }).filter((item) => item.productQuantity >= 1)
        default:
            return state;
    }
}