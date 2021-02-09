import axios from "axios";
import { api } from "../../config";
import { session } from "../../utils";

export function set() {
  return async (dispatch) => {
    try {
      session.getSession();
      const response = await axios.get(`${process.env.REACT_APP_API}${api.user.info}`);
      if (response.data.error) {
        throw new Error(response.data.error.detail);
      }

      dispatch({ type: "SET_USER", data: response.data.data });
    } catch (e) {
      dispatch({ type: "SET_USER", data: null });
    }
  };
}

export function clear() {
  return (dispatch) => {
    session.removeAuth();
    dispatch({ type: "CLEAR_USER", data: null });
  };
}
