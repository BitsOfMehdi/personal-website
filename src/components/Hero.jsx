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
              : "500px",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          transformOrigin: "left", // Key: shrink from the right
        }}
      >
        <h1 className={styles.heading}>Hey, I'm Mehdi</h1>
        <p className={styles.description}>
          Frontend Engineer — Building fast, scalable web apps with React,
          Next.js, and Node.js.
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
