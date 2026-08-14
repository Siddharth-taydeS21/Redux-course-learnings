import { myCreateStore } from "./myRedux"

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

const myStore = myCreateStore(reducer);
const subscriber1 = myStore.subscribe(() => {
    console.log(myStore.getState())
})

const subscriber2 = myStore.subscribe(() => {
    console.log('hii')
})

const subscriber3 = myStore.subscribe(() => {
    console.log('hello')
})

myStore.dispatch({type: INCREMENT})
subscriber2()

myStore.dispatch({type: INCREMENT})
subscriber3()

myStore.dispatch({type: INCREMENT_BY, payload: 8})

myStore.dispatch({type: DECREMENT_BY, payload: 4})