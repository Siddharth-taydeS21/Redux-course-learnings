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

✅ episode 2 : Introduction & exploration of Redux Dev tools.

✅ episode 3 : Creating my own Redux (createStore function of Redux)
1) Implemented - full fledged store object. 
in store object implemented - getState() method, dispatch(action) method, subscribe(listener) method, unsubscribe() method.

✅ episode 4 - 
1) Managed complex state using Redux reducer pattern. handled different cases of action.
2) created a simple state object for an e-com store & handled different action cases of state updating.

✅ episode 5 - 
1) Learned about combine reducers : instead of making one reducer handler all kind of actions we can make separate reducers for handling just one category of actions using the `combineReducers()` method of Redux. 
2) made changes in existing project to utilize combineReducers() and it's functionality.