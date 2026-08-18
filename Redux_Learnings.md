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

✅ episode 6 - implemented my own `combineReducers()` method using simple JavaScript

✅ episode 7 - 
1) Learned about action creators : action creators are simple functions who returns reusable action objects for dispatch calls. this considered as a good practice while working with Redux state management. 

✅ episode 8 - 
1) Learned about how to connect the Redux library with our React application.
2) Learned about the `<Provider></Provider>` component and it's state prop = `state={**Redux-state-store**}` and the `useSelector()` hook provided by React-Redux.
3) Build a quick and working prototype project using React-Redux's <Provider /> component, `state` prop, and its `useSelector()` hook.

✅ episode 9 - 
1) Learn about `useDispatch()` hook of React-Redux.
2) Build a simple multi-page website which has e-com product page, add to cart functionality with remove products, increase and decrease their quantity feature. The website also has add to wish list functionality for each product. In the wish list section, we can remove the products using the remove button. 

✅ episode 10 -
1) Implementing React-Redux simple library code form scratch.
2) Implementing React-Redux's <Provider /> component, `state` prop, `useSelector()` & `useDispatch()` hooks using React's context API.

✅ episode 11 - In redux toolkit, Slices represents Reducers logic, there Action types, action creators as a single bundled code file, or Feature of our application.

✅ episode 12 - 
1) Learned about how to write mutable style code For our Reducer function logic using `produce()` method of  Immer.js 
2) the produce method takes the original state, and gives us a instance of the state. on this instance of state we can use push(), 
pop() like operations to write mutable style state updating code so it can become less, clean & readable.