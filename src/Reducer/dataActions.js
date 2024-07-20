// src/actions/dataActions.js
import axios from 'axios';
import { DATA_ERROR, DATA_LOADING } from './actionTypes';



const URL = 'http://localhost:3000/productdata';

export const fetchData = () => async (dispatch) => {
    dispatch({ type: DATA_LOADING});
    try {
        const response = await axios.get(URL);
        dispatch({ type: DATA_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DATA_ERROR });
    }
};
