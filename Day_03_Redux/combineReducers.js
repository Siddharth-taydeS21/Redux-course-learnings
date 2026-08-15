import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";

//============================ COMBINE REDUCER RAW IMPLEMENTATION WITH SIMPLE JS ============================//
export default function myCombineReducers(reducers) {
    // it should return a function, and the function should return a state object after calling it
    const reducerPairs = Object.entries(reducers)

    return function(state = {}, action){ // the one reducer function, createStore method will use this function for handling any dispatch call
        const newState = {}

        reducerPairs.forEach(([key, value]) => {
            console.log(state)
            // we need to call every reducer here and the returned values from each reducer should be stored in newState object
            const reducerName = key; // got the reducer Name
            const reducerFunction = value; // got the reducer function
            const prevState = state[reducerName] // got the previous state of reducer function

            newState[reducerName] = reducerFunction(prevState, action)
        })

        return newState;
    }
}

// const reducer = myCombineReducers({
//     allProducts: productsReducer,
//     cartList: cartReducer,
//     wishList: wishListReducer,
// })
// reducer()
