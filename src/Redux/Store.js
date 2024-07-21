
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { reducer as Productreducer } from "./ProductData/reducer";
import { userReducer } from "./Authentication/userReducer";
import { dataReducer } from "./Reducer/dataReducer";

const rootreducer=combineReducers({
    Data:Productreducer,
    user: userReducer,
    tank:dataReducer
})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
