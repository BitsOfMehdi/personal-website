"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import useMediaQuery from "@/hooks/useMediaQuery";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import styles from "@/components/layout/SectionContainer.module.css";

export default function SectionContainer() {
  const [animateValues, setAnimateValues] = useState({
    maxWidth: "0px",
    x: "1200px",
  });
  const { navState } = useNavControl();
  const { matches } = useMediaQuery();

  useEffect(() => {
    setAnimateValues((prev) => {
      if (matches === "large") {
        return { ...prev, maxWidth: "700px", x: "500px" };
      } else if (matches === "medium") {
        return {
          ...prev,
          maxWidth: "calc(100vw - 400px)",
          x: "400px",
        };
      } else {
        return { ...prev, maxWidth: "100vw", x: "0px" };
      }
    });
  }, [matches]);

  const { maxWidth, x } = animateValues;
  const isAnimating = navState.isHeroShrinked
    ? { maxWidth, width: "100vw", x, visibility: "visible" }
    : {
        maxWidth: "0px",
        width: "0px",
        x: "min(1200px, 100vw)",
        visibility: "hidden",
      };

  return (
    <motion.section
      className={styles.layout}
      animate={{
        ...isAnimating,
      }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      // style={{ transformOrigin: "right", position: "absolute" }}
    >
      {navState.currentPage === "work" && <Work />}
      {navState.currentPage === "about" && <About />}
    </motion.section>
  );
}
