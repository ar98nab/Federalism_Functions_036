
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { reducer as Productreducer } from "./ProductData/reducer";

const rootreducer=combineReducers({
    Data:Productreducer,
    user: userReducer
})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
