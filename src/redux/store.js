import todoReducer from "./todoReducer";
import { createStore, applyMiddleware, compose } from 'redux';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
const peristedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoReducer, peristedState ,composeEnhancers(
    applyMiddleware()
  ));

  store.subscribe(() => {
    saveState(store.getState());
  });
export default store;