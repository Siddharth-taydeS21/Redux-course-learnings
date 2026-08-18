import { createSlice } from '@reduxjs/toolkit'

const findItemIndex = (state, action) =>
    state.findIndex(cartItem => cartItem.productId === action.payload.productId);

const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCartItem(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            const existingItem = state[exitingItemIndex];
            if (existingItem) {
                existingItem.productQuantity += 1;
            } else {
                state.push({...action.payload, productQuantity: 1})
            }
        },
        removeCartItem(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            state.splice(exitingItemIndex, 1)
        },
        CartItemQuantityIncrease(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            state[exitingItemIndex].productQuantity += 1;
        },
        CartItemQuantityDecrease(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            state[exitingItemIndex].productQuantity -= 1;
            if (state[exitingItemIndex].productQuantity === 0) {
                state.splice(exitingItemIndex, 1)
            }
        }
    }
})

export const cartReducer = slice.reducer;

export const {
    addCartItem,
    removeCartItem,
    CartItemQuantityIncrease,
    CartItemQuantityDecrease,
} = slice.actions;