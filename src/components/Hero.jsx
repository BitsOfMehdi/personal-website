import * as motion from "motion/react-client";

import { useNavControl } from "@/context/nav-control-context";

import styles from "./hero.module.css";

export default function Hero() {
  const { navState } = useNavControl();
  return (
    <div>
      <motion.section
        className={styles.heroSection}
        initial={{ width: "1200px" }}
        animate={{ width: !navState.currentPage ? "600px" : "1200px" }}
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
          <a href="#projects" className={styles.ctaButton}>
            View My Work
          </a>
        </div>
      </motion.section>
    </div>
  );
}
