import { combineReducers } from 'redux';
import { merge } from 'lodash';

import { MOVIES_SUCCESS } from 'actions';

const movies = (state = {}, action) => {
  switch (action.type) {
    case MOVIES_SUCCESS:
      return merge({}, state, action.response);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
