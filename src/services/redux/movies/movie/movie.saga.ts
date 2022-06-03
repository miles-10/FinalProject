import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {REQUEST_API_DATA, RECEIVE_API_DATA} from './movie.types';

import axios from 'axios';

import {URI} from '@services/api/api';

async function usersFetch() {
    const response = await axios.get(URI);
    return response.data.results;

}

function* workGetUsersFetch(): any {
    const users = yield call(usersFetch);
    yield put({
        type: RECEIVE_API_DATA,
        payload: users,
    })
}
// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* mySaga() {
   yield takeEvery(REQUEST_API_DATA, workGetUsersFetch);
//    yield takeEvery(RECEIVE_API_DATA, workGetSearchfetch);
}



export default mySaga;