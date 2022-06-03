import { combineReducers } from "redux";
import ApiReducer from "./movies/movie/movie.Reducer";
import SearchReducer from './movies/search/search.Reducer';

export default combineReducers({
    user: ApiReducer,
    search: SearchReducer,
  });