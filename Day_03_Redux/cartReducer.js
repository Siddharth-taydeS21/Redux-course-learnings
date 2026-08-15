export const CART_ADD_ITEM = 'cart/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem';
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantityOfItem';
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantityOfItem';

export default function cartReducer(state = [], action) {
    switch (action.type) {
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