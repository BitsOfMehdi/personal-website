"use client";

import { useState, useEffect, use } from "react";
import { useNavControl } from "@/context/nav-control-context";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "motion/react";
import Image from "next/image";
import styles from "./Hero.module.css";
import avatar from "@/public/avatar.png";

export default function Hero() {
  const [animateValues, setAnimateValues] = useState({
    maxWidth: "1200px",
    x: "0px",
  });
  const { navState, navDispatch } = useNavControl();
  const { matches } = useMediaQuery();

  useEffect(() => {
    setAnimateValues((prev) => {
      if (matches === "large") {
        return {
          ...prev,
          maxWidth: "500px",
          x: "0px",
        };
      } else if (matches === "medium") {
        return {
          ...prev,
          maxWidth: "400px",
          x: "0px",
        };
      } else {
        return {
          ...prev,
          maxWidth: "0px",
          x: "-100vw",
        };
      }
    });
  }, [matches]);

  const { maxWidth, x } = animateValues;
  const isAnimating = navState.isHeroShrinked
    ? { maxWidth, x, width: "100vw" }
    : { maxWidth: "1200px", x: "0px", width: "100vw" };

  return (
    <motion.section
      className={styles.heroSection}
      initial={{ width: matches === "large" ? "1200px" : "100vw" }}
      animate={{ ...isAnimating }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <div className={styles.content}>
        <div className={styles.avatarWrapper}>
          <Image
            src={avatar}
            alt="Mehdi Mousavi"
            className={styles.avatar}
            width={200}
            height={200}
          />
        </div>
        <h1 className={styles.heading}>Hey, I'm Mehdi</h1>
        <p className={styles.description}>Software Engineer</p>
        <p className={styles.description}>Building fast, scalable web apps.</p>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.ctaButton}
            onClick={() => {
              if (navState.currentPage === "home") {
                navDispatch({ type: "work" });
              } else {
                navDispatch({ type: "home" });
              }
            }}
          >
            View My Work
          </button>
        </div>
      </div>
    </motion.section>
  );
}
