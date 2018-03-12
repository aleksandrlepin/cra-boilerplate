import * as types from '../actions/actionTypes';
import initialState from './initialState';

const navBarReducer = (state = initialState.navBarItems, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default navBarReducer;