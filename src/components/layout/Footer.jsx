"use client";

import styles from "./Footer.module.css";
import * as motion from "motion/react-client";
import useAnimate from "@/hooks/useAnimate";
import { useNavControl } from "@/context/nav-control-context";

function Footer() {
  const { transformLeft, defaultTransformLeft, transition } = useAnimate();
  const { navState } = useNavControl();

  const isAnimate = navState.isHeroShrinked
    ? transformLeft
    : defaultTransformLeft;
  return (
    <motion.footer
      className={styles.footer}
      initial={defaultTransformLeft}
      animate={isAnimate}
      transition={transition}
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
