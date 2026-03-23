"use client";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "@/components/layout/SectionContainer.module.css";

export default function SectionContainer() {
  const { navState } = useNavControl();
  const { matches, targetWidth } = useMediaQuery();

  const widthNum = parseInt(targetWidth) || 0;
  const maxWidth = matches === "large" ? 1200 : matches === "medium" ? 1000 : 0;
  const isVisible = navState.isHeroShrinked;
  const sectionWidth = isVisible
    ? matches === "mobile"
      ? "100vw"
      : `${maxWidth - widthNum}px`
    : matches === "mobile"
      ? "100vw"
      : 0;
  const xPos =
    matches === "mobile"
      ? isVisible
        ? 0
        : "100vw"
      : isVisible
        ? targetWidth
        : "100vw";
  const display = isVisible ? "block" : "none";

  return (
    <motion.div
      className={styles.layout}
      initial={{
        width: sectionWidth,
        x: "100vw",
        display: "none",
      }}
      animate={{ x: xPos, display }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        transformOrigin: "right",
        position: "absolute",
      }}
    >
      {navState.currentPage === "work" && <Work />}
      {navState.currentPage === "about" && <About />}
    </motion.div>
  );
}
