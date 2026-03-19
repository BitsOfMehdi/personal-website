"use client";

import { useNavControl } from "@/context/nav-control-context";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "motion/react";
import Image from "next/image";
import styles from "./Hero.module.css";
import avatar from "@/public/avatar.png";

export default function Hero() {
  const { navState, navDispatch } = useNavControl();
  const { matches, targetWidth } = useMediaQuery();

  return (
    <motion.section
      className={styles.heroSection}
      initial={{ width: matches === "large" ? "1200px" : "100vw" }}
      animate={
        matches === "mobile" && navState.isHeroShrinked
          ? { x: "-100vw" }
          : { width: targetWidth }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        transformOrigin: "left",
        position: "absolute",
      }}
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
