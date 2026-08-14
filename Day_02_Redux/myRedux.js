export function myCreateStore(reducer) {
    let state;
    let listeners = [];
    const store = {
        getState() {
            return state;
        },

        dispatch(action) {
            state = reducer(state, action);
            listeners.forEach((listener) => {
                listener();
            })
        },

        subscribe(listener) {
            listeners.push(listener)

            const unSubscribe = () => {
                const index = listeners.indexOf(listener);
                listeners.splice(index, 1);
            }

            return unSubscribe;
        },
    }

    store.dispatch({type: 'initial'})
    return store
}