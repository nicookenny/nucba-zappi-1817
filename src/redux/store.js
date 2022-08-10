import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const initialState = {};

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
