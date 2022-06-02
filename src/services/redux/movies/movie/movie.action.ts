import {REQUEST_API_DATA, RECEIVE_API_DATA, RECEIVE_API_DATA_SUCCESS} from './movie.types';


export const requestApiData = () => ({
    type: REQUEST_API_DATA
});


export const receiveApiData = (payload: any) => ({
    type: RECEIVE_API_DATA,
    payload
});

export const receiveApiDataSuccess = (payload: any) => ({
    type: RECEIVE_API_DATA_SUCCESS,
    payload
})