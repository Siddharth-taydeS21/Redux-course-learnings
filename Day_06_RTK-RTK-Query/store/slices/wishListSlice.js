import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addWishListItem(state, action) {
            const existingItemIndex = state.findIndex(wishListItem => wishListItem.productId === action.payload.productId)
            if (existingItemIndex !== -1) {
                return state;
            } else {
                state.push(action.payload)
                return state;
            }
        },
        removeWishListItem(state, action) {
            const existingItemIndex = state.findIndex(wishListItem => wishListItem.productId === action.payload)
            state.splice(existingItemIndex, 1);
            return state
        },
    }
})

// Selectors
export const selectWishListProducts = (state) => (state.wishList)

export const { addWishListItem, removeWishListItem } = slice.actions;
export const wishListReducer = slice.reducer;