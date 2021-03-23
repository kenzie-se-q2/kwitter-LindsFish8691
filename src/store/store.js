import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state

let initialState = { user: { token: "" }, messages: [] };


// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_MESSAGES = "GET_MESSAGES";
export const LIKES = "LIKES";

export const GET_LIKES = "GET_LIKES";

// define reducer function
const reducer = (state, action, pop) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GET_MESSAGES:
      return { ...state, messages: action.payload };
    case LIKES:
      return { ...state, user: action.payload };
    case GET_LIKES:
      return { ...state, likes: action.payload };
    default:
      return state;
  }
};

// create useStore hook

export const useStore = create(devtools(redux(reducer, initialState)), { name: "storage" });
