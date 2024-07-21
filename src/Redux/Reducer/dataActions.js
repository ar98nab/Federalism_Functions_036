// import axios from 'axios';
import axios from 'axios';
import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from './actionTypes';



const URL = 'http://localhost:3000/productdata';

export const fetchData = () => async (dispatch) => {
    dispatch({ type: DATA_LOADING});
    try {
        const response = await axios.get(URL);
        console.log('Fetched Data:', response.data);
        dispatch({ type: DATA_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error fetching data:', error);
        dispatch({ type: DATA_ERROR });
    }
};