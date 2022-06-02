// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
// import { SEARCH_API_REQUEST, SEARCH_API_RESPONSE } from './search.type';
// import {SEARCH_API} from '@services/api/searchApi';
// import axios from 'axios';

// async function searchFetch() {
//     const response = await axios.get(SEARCH_API)
//     return response.data.results;
// }

// console.log('hello', searchFetch);

// function* workGetSearchfetch(): any {
//     try{
//         const search =yield call(searchFetch);
//         yield put({
//             type: SEARCH_API_RESPONSE, 
//             payload: search,
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// function* searchSaga() {
//     yield takeLatest(SEARCH_API_REQUEST, workGetSearchfetch)


// }

// export default searchSaga;

// // import {put, takeLatest} from 'redux-saga/effects';
// // import {searchNewsApi} from '../../apis/SearchNewsApi';
// // import searchTypes from '../actions/SearchTypes';

// // function* searchWatcher() {
// //   yield takeLatest(searchTypes.SEARCH_REQUEST, searchWorker);
// // }

// // function* searchWorker(action) {
// //   try {
// //     const response = yield searchNewsApi(action.payload);
// //     const news = response.data.articles;
// //     yield put({type: searchTypes.SEARCH_SUCCESS, payload: news});
// //   } catch (error) {
// //     yield put({type: searchTypes.SEARCH_FAILED});
// //   }
// // }

// // export default searchWatcher;