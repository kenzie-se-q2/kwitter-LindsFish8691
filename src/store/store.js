import create from "zustand";
import { devtools, redux, persist } from "zustand/middleware";

// define the store's initial state

const localStorage = window.localStorage.getItem("storage");

let initialState = { user: { token: "" }, messages: [] };
if (localStorage) {
  initialState = JSON.parse(localStorage).state;
}

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_MESSAGES = "GET_MESSAGES";
export const LIKES = "LIKES";


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
        return{ user: action.payload }
        default:
      return state;
  }
};

// create useStore hook

export const useStore = create(
  persist(devtools(redux(reducer, initialState)), { name: "storage" })
);
