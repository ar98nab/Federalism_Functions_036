import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from './userActionTypes';

let initState = {
  users:null,
  errors:null,
  user: null,
  error: null,
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...state, users: action.payload, errors: null };
    case SIGN_UP_FAILURE:
      return { ...state, users: null, errors: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, user: null, error: action.payload };
    case LOGOUT:
      return {...state,user:null}
    default:
      return state;
  }
};
