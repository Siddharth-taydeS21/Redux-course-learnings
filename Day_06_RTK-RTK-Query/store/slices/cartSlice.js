import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
    state.list.findIndex(cartItem => cartItem.productId === action.payload.productId);


const slice = createSlice({
    name: 'cart',
    initialState: {
        list: [],
        loading: false,
        error: ''
    },
    reducers: {
        
        setCartLoading(state){
            state.loading = true;
        },
        fetchCartData(state, action){
            // debugger
            state.loading = false;
            state.list = action.payload
        },
        handleCartError(state, action){
            state.loading = false;
            state.error = action.payload || 'Something went wrong!';
        },
        addCartItem(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            const existingItem = state.list[exitingItemIndex];
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.list.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCartItem(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            state.list.splice(exitingItemIndex, 1)
        },
        CartItemQuantityIncrease(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            state.list[exitingItemIndex].quantity += 1;
        },
        CartItemQuantityDecrease(state, action) {
            const exitingItemIndex = findItemIndex(state, action);
            state.list[exitingItemIndex].quantity -= 1;
            if (state.list[exitingItemIndex].quantity === 0) {
                state.list.splice(exitingItemIndex, 1)
            }
        }
    }
})


export const cartReducer = slice.reducer;

export const {
    setCartLoading,
    fetchCartData,
    handleCartError,
    addCartItem,
    removeCartItem,
    CartItemQuantityIncrease,
    CartItemQuantityDecrease,
} = slice.actions;