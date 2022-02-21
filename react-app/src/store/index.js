import session from './session'
import affirmations from './affirmations'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    session,
    affirmations
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
