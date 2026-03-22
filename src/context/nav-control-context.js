"use client";
import { createContext, useReducer, useContext } from "react";

const initialState = {
  currentPage: "home",
  isHeroShrinked: false,
  isModalClosed: true,
};

const navReducer = (state, action) => {
  switch (action.type) {
    case "home":
      return { ...state, isHeroShrinked: false, currentPage: "home" };
    case "contact":
      return { ...state, isHeroShrinked: false, currentPage: "contact" };
    case "work":
      return { ...state, isHeroShrinked: true, currentPage: "work" };
    case "about":
      return { ...state, isHeroShrinked: true, currentPage: "about" };
    case "blog":
      return { ...state, isHeroShrinked: true, currentPage: "blog" };
    case "openModal":
      return { ...state, isHeroShrinked: false, isModalOpen: true };
    case "closeModal":
      return { ...state, isModalOpen: false, currentPage: "home" };
    default:
      return state;
  }
};

const NavControlContext = createContext();

export default function NavControlProvider({ children }) {
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
