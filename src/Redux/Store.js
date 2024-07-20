import { applyMiddleware, legacy_createStore, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from './Authentication/userReducer';

const rootReducer = combineReducers({ user: userReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
