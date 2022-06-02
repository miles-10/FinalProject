import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootsaga';

const sagaMiddleware = createSagaMiddleware();

const globalStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default globalStore;