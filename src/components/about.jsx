"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/components/about.module.css";

export default function About({ isAbout }) {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    if (isAbout) {
      const timeout = setTimeout(() => {
        setShowAbout(true);
      }, 100); // wait for Hero shift animation to complete
      return () => clearTimeout(timeout);
    } else {
      setShowAbout(false);
    }
  }, [isAbout]);

  return (
    <>
      {showAbout && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2>About Me</h2>
          <p>
            Experienced Full Stack Web Developer with a strong track record of
            building responsive, scalable, and maintainable applications across
            the frontend and backend. Proficient in JavaScript, and skilled in
            React.js, Next.js, Vue.js, and TypeScript for crafting intuitive
            UIs, and in Node.js with Express for developing robust APIs.
          </p>
        </motion.div>
      )}
    </>
  );
}
