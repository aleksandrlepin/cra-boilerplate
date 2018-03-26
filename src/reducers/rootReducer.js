import { combineReducers } from 'redux';
import movies from './moviesReducer';
import navBarItems from './navBarReducer';

const rootReducer = combineReducers({
  movies,
  navBarItems,
});

export default rootReducer;
