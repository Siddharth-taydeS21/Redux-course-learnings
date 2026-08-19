import { createSlice } from "@reduxjs/toolkit";
import { myCreateSlice } from '../../myRtk';

const slice = myCreateSlice({
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

export const { addWishListItem, removeWishListItem } = slice.actions;
export const wishListReducer = slice.reducer;