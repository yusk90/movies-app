import { CALL_API } from '../middleware/api';

export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';
export const MOVIES_FAILURE = 'MOVIES_FAILURE';

export const MOVIE_REQUEST = 'MOVIE_REQUEST';
export const MOVIE_SUCCESS = 'MOVIE_SUCCESS';
export const MOVIE_FAILURE = 'MOVIE_FAILURE';

export const SORT_MOVIES = 'SORT_MOVIES';

export const CLEAR_STATE = 'CLEAR_STATE';

export const sortBy = sortProperty => ({
  type: SORT_MOVIES,
  payload: {
    sortProperty,
  },
});

export const clearState = () => ({
  type: CLEAR_STATE,
});

// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchMovies = query => ({
  [CALL_API]: {
    types: [MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_FAILURE],
    endpoint: `movies?${query}`,
  },
});

// Relies on Redux Thunk middleware.
export const loadMovies = queryObj => dispatch => {
  const query = Object.keys(queryObj)
    .map(prop => `${prop}=${queryObj[prop]}`)
    .join('&');

  dispatch(fetchMovies(query));
};

export const loadMovie = id => ({
  [CALL_API]: {
    types: [MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE],
    endpoint: `movies/${id}`,
  },
});
