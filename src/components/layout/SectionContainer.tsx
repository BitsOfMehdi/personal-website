"use client";

import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import useAnimate from "@/hooks/useAnimate";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import styles from "@/components/layout/SectionContainer.module.css";

export default function SectionContainer() {
  const { navState } = useNavControl();
  const { defaulttransformRight, transformRight, transition } = useAnimate();

  const isAnimating = navState.isHeroShrinked
    ? transformRight
    : defaulttransformRight;

  return (
    <motion.section
      className={styles.layout}
      initial={defaulttransformRight}
      animate={isAnimating}
      transition={transition}
    >
      {navState.curSection === "work" && <Work />}
      {navState.curSection === "about" && <About />}
    </motion.section>
  );
}
