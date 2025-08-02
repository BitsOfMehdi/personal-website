"use client";

import { createContext, useReducer, useContext } from "react";

const initialState = {
  currentPage: "home",
  isModalClosed: true, // Default state for modal
};

const navReducer = (state, action) => {
  switch (action.type) {
    case "home":
      return { ...state, currentPage: "home" };
    case "contact":
      return { ...state, currentPage: "contact" };
    case "work":
      return { ...state, currentPage: "work" };
    case "about":
      return { ...state, currentPage: "about" };
    case "blog":
      return { ...state, currentPage: "blog" };
    case "closeModal":
      return { ...state, isModalClosed: true, currentPage: "home" };
    case "openModal":
      return { ...state, isModalClosed: false };
    default:
      return state;
  }
};

const NavControlContext = createContext();

export function NavControlProvider({ children }) {
  const [navState, navDispatch] = useReducer(navReducer, initialState);

  return (
    <NavControlContext.Provider value={{ navState, navDispatch }}>
      {children}
    </NavControlContext.Provider>
  );
}

export function useNavControl() {
  const context = useContext(NavControlContext);
  if (!context) {
    throw new Error("useNavControl must be used within a NavControlProvider");
  }
  return context;
}
