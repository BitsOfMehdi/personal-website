"use client";
import { useState, useReducer } from "react";

import SectionContainer from "@/components/section-container";
import Header from "@/components/header";
import Hero from "@/components/hero";
import styles from "@/styles/home.module.css";

const initialState = {
  isHome: false,
  isAbout: false,
  isWork: false,
  isContact: false,
};

const navReducer = (state, action) => {
  switch (action) {
    case "about":
      return { isHome: false, isAbout: true, isWork: false, isContact: false };
    case "work":
      return { isHome: false, isAbout: false, isWork: true, isContact: false };
    case "contact":
      return { isHome: false, isAbout: false, isWork: false, isContact: true };
    case "home":
      return { isHome: false, isAbout: false, isWork: false, isContact: false };
    default:
      return state;
  }
};

export default function App() {
  const [navState, navDispatch] = useReducer(navReducer, initialState);
  return (
    <main className={styles.main}>
      <Header navState={navState} navDispatch={navDispatch} />
      <div className={styles.heroContainer}>
        <Hero isAbout={navState.isAbout} isWork={navState.isWork} />
        <SectionContainer navState={navState} />
      </div>
      {/* <SectionContainer id="contact">
        <h2>Contact</h2>
        <p>Email: mehdi@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </SectionContainer>

      <SectionContainer id="blog">
        <h2>Blog (Coming Soon)</h2>
        <p>This section will feature articles and tutorials in the future.</p>
      </SectionContainer> */}
    </main>
  );
}
