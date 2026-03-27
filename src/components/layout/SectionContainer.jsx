"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import useMediaQuery from "@/hooks/useMediaQuery";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import styles from "@/components/layout/SectionContainer.module.css";

export default function SectionContainer() {
  const [sectionWidth, setSectionWidth] = useState({
    maxWidth: "0px",
    x: "1200px",
  });
  const { navState } = useNavControl();
  const { matches, targetWidth } = useMediaQuery();

  useEffect(() => {
    setSectionWidth((prev) => {
      if (matches === "large") {
        return { ...prev, maxWidth: "700px", x: "500px" };
      } else if (matches === "medium") {
        return { ...prev, maxWidth: "700px", x: "400px" };
      } else {
        return { ...prev, maxWidth: "100vw", x: "0px" };
      }
    });
  }, [matches]);

  const { maxWidth, x } = sectionWidth;

  const isAnimating = navState.isHeroShrinked
    ? { maxWidth, x, visibility: "visible" }
    : { maxWidth: 0, x: "1200px", visibility: "hidden" };

  console.log({ targetWidth, matches });

  return (
    <motion.section
      className={styles.layout}
      animate={{
        ...isAnimating,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {navState.currentPage === "work" && <Work />}
      {navState.currentPage === "about" && <About />}
    </motion.section>
  );
}
