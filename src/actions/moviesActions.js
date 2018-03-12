import * as types from './actionTypes';
import MovieApi from '../api/movieApi';

export const loadMovies = () => {
  return (dispatch) => {
    return MovieApi.getMovies()
    .then(movies => {
      console.log('movies: ', movies);
        dispatch(loadMoviesSuccess(movies));
      })
      .catch(error => {
        throw(error);
      });
  }
}

export const loadMoviesSuccess = (movies) => {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}