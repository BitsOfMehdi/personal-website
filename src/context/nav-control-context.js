"use client";

import { createContext, useReducer, useContext } from "react";

const initialState = {
  currentPage: "home",
};

const navReducer = (_, action) => ({ currentPage: action.type });

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
