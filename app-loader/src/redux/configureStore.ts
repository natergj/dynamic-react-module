import { combineReducers, compose, createStore } from 'redux';
import reducerRegistry from './reducerRegistry';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  stateItem: 'value',
};
// Preserve initial state for not-yet-loaded reducers
const combine = (reducers) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach((item) => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};
const reducer = combine(reducerRegistry.getReducers());
const store = createStore(reducer, initialState, composeEnhancers());

// Replace the store's reducer whenever a new reducer is registered.
reducerRegistry.setChangeListener((reducers) => {
  store.replaceReducer(combine(reducers));
  // immediately dispatch action to set initial states of new reducers
  store.dispatch({ type: '@@REDUCER_REGISTRY/UPDATE_REGISTRY' });
});

export default store;
