import { SEARCH_API_REQUEST, SEARCH_API_RESPONSE, RESPONSE_API_DATA_SUCCESS } from "./search.type";

export const initialState = {
    loading: false,
    search:[],
}

const searchReducer = (state = initialState, action: { type: any; payload: any; }) => {
    console.log('type', action.type);
    console.log('payload', action.payload);
    switch (action.type){
        case SEARCH_API_REQUEST:
            return {...state, loading: true};
        case SEARCH_API_RESPONSE:
            return {...state, search: action.payload };
        case RESPONSE_API_DATA_SUCCESS: 
            return {...state, loading: false};
            default:
                return state;
    }
}

export default searchReducer;