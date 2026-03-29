"use client";
import styles from "./Footer.module.css";
import * as motion from "motion/react-client";
import useMediaQuery from "@/hooks/useMediaQuery";

function Footer() {
  const { matches, targetWidth } = useMediaQuery();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ width: matches === "large" ? "1200px" : "100vw" }}
      animate={{ width: targetWidth }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Copyright © {new Date().getFullYear()} Mehdi Mousavi
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
