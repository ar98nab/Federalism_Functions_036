
// import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./actionTypes";

import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./actionTypes";


export const initialState = {
    loading: false,
    data: [],
    error: false,
};

export const dataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DATA_LOADING:
            return { ...state, loading: true };
        case DATA_SUCCESS:
            return { ...state, loading: false, data: payload };
        case DATA_ERROR:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};