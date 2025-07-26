import * as motion from "motion/react-client";

import { useNavControl } from "@/context/nav-control-context";

import styles from "./Hero.module.css";

export default function Hero() {
  const { navState, navDispatch } = useNavControl();

  return (
    <div>
      <motion.section
        className={styles.heroSection}
        initial={{ width: "1200px" }}
        animate={{
          width:
            navState.currentPage === "home" ||
            navState.currentPage === "contact"
              ? "1200px"
              : "600px",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          transformOrigin: "left", // Key: shrink from the right
        }}
      >
        <h1 className={styles.heading}>Hey, I'm Mehdi Mousavi</h1>
        <p className={styles.description}>
          Frontend Engineer — crafting fast, modern websites with React, Next.js
          & Tailwind CSS.
        </p>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.ctaButton}
            onClick={() => navDispatch({ type: "work" })}
          >
            View My Work
          </button>
        </div>
      </motion.section>
    </div>
  );
}
