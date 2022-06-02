
import {all} from 'redux-saga/effects';
import mySaga from './movies/movie/movie.saga';


function* rootSaga() {
  yield all([mySaga() ]);
}

export default rootSaga;

