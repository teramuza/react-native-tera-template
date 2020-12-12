// @flow

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import combinedReducer from './Reducers';

const middlewares = [thunk];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  blacklist: [],
  whitelist: []
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(...middlewares))
);
let persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => store.getState();

export { getStore, getState, getPersistor };
