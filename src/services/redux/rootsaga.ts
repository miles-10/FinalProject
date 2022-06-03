
import {all} from 'redux-saga/effects';
import mySaga from './movies/movie/movie.saga';
import searchSaga from './movies/search/search.saga';

function* rootSaga() {
  yield all([mySaga(), searchSaga()]);
}

export default rootSaga;

