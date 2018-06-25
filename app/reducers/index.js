import { combineReducers } from 'redux';
import { sortBy } from 'lodash';

import {
  MOVIES_SUCCESS,
  MOVIE_SUCCESS,
  SORT_MOVIES,
  CLEAR_STATE,
} from 'actions';

const initialState = { sortProperty: 'releaseDate', sortOrder: 'ASC' };
const movies = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SUCCESS: {
      const sortedMovies = sortBy(action.response.data.map(prepareMovie), state.sortProperty);

      return { ...state, movies: state.sortOrder === 'ASC' ? sortedMovies : sortedMovies.reverse() };
    }
    case MOVIE_SUCCESS: {
      const movie = prepareMovie(action.response);

      return { ...state, movie };
    }
    case SORT_MOVIES: {
      const sortedMovies = sortBy(state.movies, action.payload.sortProperty);
      let sortOrder;

      if (action.payload.sortProperty !== state.sortProperty) {
        sortOrder = 'ASC';
      } else {
        sortOrder = (state.sortOrder === 'ASC' ? 'DESC' : 'ASC');
      }

      return {
        ...state,
        movies: sortOrder === 'ASC' ? sortedMovies : sortedMovies.reverse(),
        sortProperty: action.payload.sortProperty,
        sortOrder,
      };
    }
    case CLEAR_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

function prepareMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    posterSrc: movie.poster_path,
    genres: movie.genres,
    year: Number(movie.release_date.substr(0, 4)),
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    description: movie.overview,
  };
}

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
