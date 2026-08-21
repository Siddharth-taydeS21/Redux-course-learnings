export const apiMiddleware = (store) => (next) => (action) => {
    const BASE_URL = 'https://fakestoreapi.com'
    const dispatch = store.dispatch;
    if (action.type === 'api/makeCall') {
        const { url_endPoint, onStart, onSuccess, onError } = action.payload;

        dispatch({ type: onStart })
        fetch(`${BASE_URL}/${url_endPoint}`)
            .then(res => res.json())
            .then(data => {
                if(onSuccess === 'cart/fetchCartData') dispatch({ type: onSuccess, payload: data.products })
                else dispatch({ type: onSuccess, payload: data })
            }).catch((err) => {
                console.log(err);
                dispatch({ type: onError })
            })
    }
    next(action);
}

// action creator 
export const fetchData = (payload) => ({ type: 'api/makeCall', payload })