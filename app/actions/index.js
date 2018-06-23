import { CALL_API } from '../middleware/api';

export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';
export const MOVIES_FAILURE = 'MOVIES_FAILURE';
export const SORT_MOVIES = 'SORT_MOVIES';

export const sortBy = sortProperty => ({
  type: SORT_MOVIES,
  payload: {
    sortProperty,
  },
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
