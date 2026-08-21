import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'productsList',
    initialState: {
        list: [],
        loading: false,
        error: ''
    },
    reducers: {
        setLoading(state){
            state.loading = true;
            return state
        },
        updateProductList(state, action){
            state.loading = false;
            state.list = action.payload;
            return state
        },
        handleError(state, action){
            state.loading = false;
            state.error = action.payload || 'Something went wrong!';
            return state
        },
    }
})

export default slice.reducer
export const {updateProductList, setLoading, handleError} = slice.actions;