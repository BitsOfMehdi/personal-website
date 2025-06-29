"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import styles from "@/components/about.module.css";

export default function About() {
  const [showAbout, setShowAbout] = useState(false);
  const { navState } = useNavControl();

  useEffect(() => {
    if (navState.currentPage === "about") {
      const timeout = setTimeout(() => {
        setShowAbout(true);
      }, 100); // wait for Hero shift animation to complete
      return () => clearTimeout(timeout);
    } else {
      setShowAbout(false);
    }
  }, [navState.currentPage]);

  return (
    <>
      {showAbout && (
        <div className={styles.container}>
          <h2>About Me</h2>
          <p>
            Experienced Full Stack Web Developer with a strong track record of
            building responsive, scalable, and maintainable applications across
            the frontend and backend. Proficient in JavaScript, and skilled in
            React.js, Next.js, Vue.js, and TypeScript for crafting intuitive
            UIs, and in Node.js with Express for developing robust APIs.
          </p>
        </div>
      )}
    </>
  );
}
