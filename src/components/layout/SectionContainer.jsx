"use client";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "@/components/layout/SectionContainer.module.css";
import { useEffect } from "react";

export default function SectionContainer() {
  const { navState } = useNavControl();
  const { matches, targetWidth } = useMediaQuery();

  const desktopView = {
    initial: { width: 0, height: 0, display: "none" },
    animate: { width: 1000, display: "block" },
  };
  const mobileView = {
    initial: { width: "0", height: "0", display: "block" },
    animate: { width: "100vw", height: "100vh", display: "block" },
  };

  // const motionProps = matches === "mobile" ? mobileView : desktopView;

  // console.log({ motionProps });
  return (
    <motion.section
      className={styles.layout}
      initial={{ width: targetWidth, x: "100vw" }}
      animate={
        matches === "mobile" && navState.isHeroShrinked
          ? { x: 0 }
          : { x: "100vw" }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        transformOrigin: "right",
        marginLeft: "auto",
        marginRight: "auto",
        position: "absolute",
      }}
    >
      {navState.currentPage === "work" && <Work />}
      {navState.currentPage === "about" && <About />}
    </motion.section>
  );
}
