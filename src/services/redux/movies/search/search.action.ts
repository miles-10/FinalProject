import { SEARCH_API_REQUEST, SEARCH_API_RESPONSE, RESPONSE_API_DATA_SUCCESS } from "./search.type";


export const requestSearch = () => ({
    type: SEARCH_API_REQUEST 
})


export const resonseSearch = (payload: any) => ({
    type: SEARCH_API_RESPONSE,
    payload
});

export const responseApiDataSucess = (payload: any) => ({
    type: RESPONSE_API_DATA_SUCCESS,
    payload
});