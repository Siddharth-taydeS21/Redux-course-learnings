import { produce } from 'immer';

export function myCreateSlice(configObject) {
    const { name, initialState, reducers } = configObject;

    // CREATING ACTION CREATOR FUNCTIONS 
    const actions = {};
    Object.keys(reducers).forEach((key) => {
        return actions[key] = function (payload) {
            return {
                type: `${name}/${key}`,
                payload
            }
        }
    })

    // HANDLING THE WORK OF CASE REDUCERS 
    function reducer(originalState = initialState, action) {
        return produce(originalState, (draft) => {
            const caseReducerName = action.type.split('/')[1];
            const caseReducer = reducers[caseReducerName];
            if (caseReducer) caseReducer(draft, action)
            else return draft
        })
    }

    return { actions, reducer }
}