import { REQUEST_API_DATA, RECEIVE_API_DATA, RECEIVE_API_DATA_SUCCESS } from './movie.types';

export const initialState = {
    loading: false,
    users: [],
}
const apiReducer = (state = initialState, action: { type: any; payload: any; }) => {
    // console.log('type', action.type);
    // console.log('payload', action.payload);
    switch (action.type){
        case REQUEST_API_DATA:
            return {...state, loading: true};
        case RECEIVE_API_DATA:
            return {...state, users: action.payload };
        case RECEIVE_API_DATA_SUCCESS:
            return {...state, loading: false};
        default: 
            return state;
    }
}

export default apiReducer;