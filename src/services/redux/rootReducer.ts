import { combineReducers } from "redux";
import ApiReducer from "./movies/movie/movie.Reducer";


export default combineReducers({
    user: ApiReducer,
  });