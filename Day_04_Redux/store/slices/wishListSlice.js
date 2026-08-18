import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addWishListItem(state, action) {
            console.log(action)
            const existingItemIndex = state.findIndex(wishListItem => wishListItem.productId === action.payload.productId)
            if (existingItemIndex !== -1) {
                return state;
            } else {
                state.push(action.payload)
                return state;
            }
        },
        removeWishListItem(state, action) {
            return state.filter((wishListitem) => wishListitem.productId !== action.payload)
        },
    }
})

export const { addWishListItem, removeWishListItem } = slice.actions;
export const wishListReducer = slice.reducer;