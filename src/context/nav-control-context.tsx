"use client";
import { createContext, useReducer, useContext, ReactNode } from "react";

export type CurSection = "home" | "work" | "about" | "project" | "contact";

type State = {
  curSection: CurSection;
  isHeroShrinked: boolean;
  isModalOpen: boolean;
};

type ActionType = CurSection | "openModal" | "closeModal";
type Action = { type: ActionType };

type NavControlContextType = {
  navState: State;
  navDispatch: React.Dispatch<Action>;
};

const initialState: State = {
  curSection: "home",
  isHeroShrinked: false,
  isModalOpen: false,
};

const navReducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case "home":
      return { ...prevState, isHeroShrinked: false, curSection: "home" };
    case "contact":
      return { ...prevState, isHeroShrinked: false, curSection: "contact" };
    case "work":
      return { ...prevState, isHeroShrinked: true, curSection: "work" };
    case "about":
      return { ...prevState, isHeroShrinked: true, curSection: "about" };
    case "project":
      return { ...prevState, isHeroShrinked: true, curSection: "project" };
    case "openModal":
      return { ...prevState, isHeroShrinked: false, isModalOpen: true };
    case "closeModal":
      return { ...prevState, isModalOpen: false, curSection: "home" };
    default:
      return prevState;
  }
};

const NavControlContext = createContext<NavControlContextType | null>(null);

export default function NavControlProvider({
  children,
}: {
  children: ReactNode;
}) {
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
