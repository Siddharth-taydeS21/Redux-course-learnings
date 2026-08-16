// ACTIONS
const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantityOfItem';
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantityOfItem';

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
export default function cartReducer(state = [], action) {
    switch (action?.type) {
        case CART_ADD_ITEM:
            const exitingItem = state.find(cartItem => cartItem.productId === action.payload.productId)
            if (exitingItem) {
                return state.map(item => {
                    if (item.productId === exitingItem.productId) {
                        return { ...item, productQuantity: item.productQuantity + 1 }
                    }
                    return item
                })
            }
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