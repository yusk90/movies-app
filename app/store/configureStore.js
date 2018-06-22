import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import rootReducer from '../reducers';
import api from '../middleware/api';

const engine = createEngine('movies');
const reducer = storage.reducer(rootReducer);
const engineMiddleware = storage.createMiddleware(engine);

const configureStore = preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
    compose(applyMiddleware(api, thunk, engineMiddleware))
  );
  const load = storage.createLoader(engine);

  load(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
