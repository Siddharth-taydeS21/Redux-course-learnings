// ACTIONS
const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// ACTION CREATORS
export function addWishListItem(productData) {
    return {
        type: WISHLIST_ADD_ITEM,
        payload: productData
    }
}

export function removeWishListItem(productId) {
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: {
            productId
        }
    }
}

// REDUCER
export default function wishListReducer(state = [], action) {
    switch (action?.type) {
        case WISHLIST_ADD_ITEM:
            const existingItem = state.find(wishListItem => wishListItem.productId === action.payload.productId)
            if (existingItem) {
                const newState = state.filter(wishListItem => {
                    return wishListItem.productId !== existingItem.productId
                })
                return [...newState, {...existingItem}]
            }
            return [...state, action.payload]
        case WISHLIST_REMOVE_ITEM:
            return state.filter((wishListitem) => wishListitem.productId !== action.payload.productId)
        default:
            return state;
    }
}