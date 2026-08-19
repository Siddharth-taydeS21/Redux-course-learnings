export const logger = (store) => (next) => (action) => {
    // console.log('store: ', store)
    // console.log('next: ', next)
    // console.log('action: ', action)
    // console.log('wait, you are not allowed to go further...')
    // const dispatch = next;
    next(action);
}