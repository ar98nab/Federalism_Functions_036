import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from "./userActionTypes";

export const signedUp = (email, password, onSuccess) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3000/users", {
        email,
        password,
      });
      console.log(res);
      if (res.status === 201) {
        dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
        if (onSuccess) onSuccess();
      } else {
        dispatch({ type: SIGN_UP_FAILURE, payload: "Signup failed" });
      }
    } catch (error) {
      console.error("Signup error:", error);
      dispatch({ type: SIGN_UP_FAILURE, payload: "Error during signup" });
    }
  };
};

export const login = (email, password, onSuccess) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      const user = res.data.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        if (onSuccess) onSuccess();
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "Invalid email or password" });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: "Error during login" });
    }
  };
};
