"use client";
import styles from "./Footer.module.css";
import * as motion from "motion/react-client";
import { useNavControl } from "@/context/nav-control-context";
import useMediaQuery from "@/hooks/useMediaQuery";

function Footer() {
  const { navState } = useNavControl();
  const queryMedia = useMediaQuery();

  // compute width targets in the same manner as Hero for alignment
  let targetWidth;
  if (queryMedia === "large") {
    targetWidth =
      navState.currentPage === "home" || navState.currentPage === "contact"
        ? "100vw"
        : "500px";
  } else if (queryMedia === "medium") {
    targetWidth =
      navState.currentPage === "home" || navState.currentPage === "contact"
        ? "100vw"
        : "400px";
  } else {
    targetWidth =
      navState.currentPage === "home" || navState.currentPage === "contact"
        ? "100vw"
        : "0px";
  }

  return (
    <motion.footer
      className={styles.footer}
      initial={{ width: queryMedia === "large" ? "1200px" : "100vw" }}
      animate={{ width: targetWidth }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ transformOrigin: "left" }}
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
