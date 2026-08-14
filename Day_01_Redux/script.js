// ================== BASIC UNDER THE HOOD IMPLEMENTATION OF REDUX USING JS ===============

const State = {
    name: 'Siddharth',
    count: 3,
    age: '21'
}

const INCREMENT = 'count/increment'
const DECREMENT = 'count/decrement'
const INCREMENT_BY = 'count/increment_by'
const DECREMENT_BY = 'count/decrement_by'

function reducer(initialState = State, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...initialState, count: initialState.count + 1 }
        case DECREMENT:
            return { ...initialState, count: initialState.count - 1 }
        case INCREMENT_BY:
            return { ...initialState, count: initialState.count + action.payload }
        case DECREMENT_BY:
            return { ...initialState, count: initialState.count - action.payload }
        default:
            return initialState;
    }
}

// State = reducer(State ,{type: INCREMENT});
// console.log(State);

// State = reducer(State ,{type: DECREMENT});
// console.log(State);

// State = reducer(State ,{type: INCREMENT_BY, payload: 10});
// console.log(State);

// State = reducer(State ,{type: DECREMENT_BY, payload: 7});
// console.log(State);


// ================================ IMPLEMENTATION USING REDUX LIBRARY ================================ 
import { createStore }  from "redux"
const store = createStore(reducer);

// console.log(store) 
/**
it gives an object which contains : 
    getState() method,
    dispatch(action) method,
    subscribe(listener) method,
 */

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type: INCREMENT})
store.dispatch({type: DECREMENT})
store.dispatch({type: INCREMENT_BY, payload: 10})
store.dispatch({type: DECREMENT_BY, payload: 7})

console.log(State)