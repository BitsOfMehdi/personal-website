"use client";

import { motion } from "motion/react";
import { useNavControl } from "@/context/nav-control-context";
import useAnimate from "@/hooks/useAnimate";
import Image from "next/image";
import styles from "./Hero.module.css";
import avatar from "@/public/avatar.png";

export default function Hero() {
  const { navState, navDispatch } = useNavControl();
  const { defaultTransformLeft, transformLeft, transition } = useAnimate();

  const isAnimating = navState.isHeroShrinked
    ? transformLeft
    : defaultTransformLeft;

  return (
    <motion.section
      className={styles.heroSection}
      initial={defaultTransformLeft}
      animate={isAnimating}
      transition={transition}
    >
      <div className={styles.avatarWrapper}>
        <Image
          src={avatar}
          alt="Mehdi Mousavi"
          className={styles.avatar}
          width={200}
          height={200}
        />
      </div>
      <h1 className={styles.heading}>Hey, I&apos;m Mehdi</h1>
      <p className={styles.description}>Software Engineer</p>
      <p className={styles.description}>Building fast, scalable web apps.</p>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.ctaButton}
          onClick={() => {
            if (navState.curSection === "home") {
              navDispatch({ type: "work" });
            } else {
              navDispatch({ type: "home" });
            }
          }}
        >
          View My Work
        </button>
      </div>
    </motion.section>
  );
}
