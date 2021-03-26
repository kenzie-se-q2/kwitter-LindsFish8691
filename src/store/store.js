import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state

let initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_MESSAGES = "GET_MESSAGES";
export const LIKE = "LIKE";
// export const GOOGLE_LOGIN = "GOOGLE_LOGIN"

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GET_MESSAGES:
      return { ...state, messages: action.payload };
    case LIKE:
      return { ...state, like: action.payload };
      // case GOOGLE_LOGIN:
      //   return{ messages: action.payload }
    default:
      return state;
  }
};

// create useStore hook

export const useStore = create(devtools(redux(reducer, initialState)), { name: "storage" });
