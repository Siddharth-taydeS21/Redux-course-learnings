✅ episode 1 : Intro to Redux.js & complete fundamentals of Redux.js.
1) it uses React's context API behind the scene to store all out states data, it utilize the concept of creating a deep copy vs a shallow copy of original state object.
2) it has a `reducer()` function which plays the role of state updater in Redux.
3) reducer() function takes 2 prams - 
    1.`state`: the initial state we have, and 
    2.`action`: an object which will contain 2 props - type & payload. type is mandatory prop & payload is an optional prop.
4) How to crete a Redux store: the legacy Redux way - using `createStore()` method.
5) `createStore()` method receives the reducer() function as a pram which has our initial state, then it returns an object which includes :- store.getState(), store.dispatch(action = {}) & store.subscribe(listener) methods.
6) `store.getState()` : reads the current state,
7) `store.dispatch(action = {})` : this method by createStore(), is actually the state updater. it receives an action object which contains the type of state update; for.ex increment/decrement in state or anything else.
8) `store.subscribe(listener)` : It receives a callback function which can work like an event listener. This callback function runs every time when we use the `store.dispatch` method. 