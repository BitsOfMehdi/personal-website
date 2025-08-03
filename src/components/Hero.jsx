import Image from "next/image";
import * as motion from "motion/react-client";
import { useNavControl } from "@/context/nav-control-context";
import styles from "./Hero.module.css";
import avatar from "@/public/avatar.png";
import { useMediaQuery } from "@/utility/useMediaQuery"; // adjust path as needed

export default function Hero() {
  const { navState, navDispatch } = useNavControl();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Responsive width logic
  let targetWidth;
  if (isDesktop) {
    targetWidth =
      navState.currentPage === "home" || navState.currentPage === "contact"
        ? "1200px"
        : "500px";
  } else {
    targetWidth =
      navState.currentPage === "home" || navState.currentPage === "contact"
        ? "100vw"
        : "0px";
  }

  return (
    <div>
      <motion.section
        className={styles.heroSection}
        initial={{ width: isDesktop ? "1200px" : "100vw" }}
        animate={{ width: targetWidth }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          transformOrigin: "left",
        }}
      >
        {!isDesktop &&
        navState.currentPage !== "home" &&
        navState.currentPage !== "contact" ? (
          <motion.div
            className={styles.content}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "linear" }}
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
            <h1 className={styles.heading}>Hey, I'm Mehdi</h1>
            <p className={styles.description}>
              Frontend Engineer — Building fast, scalable web apps with React,
              Next.js, and Node.js.
            </p>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.ctaButton}
                onClick={() => navDispatch({ type: "work" })}
              >
                View My Work
              </button>
            </div>
          </motion.div>
        ) : (
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
            <p className={styles.description}>
              Frontend Engineer — Building fast, scalable web apps with React,
              Next.js, and Node.js.
            </p>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.ctaButton}
                onClick={() => navDispatch({ type: "work" })}
              >
                View My Work
              </button>
            </div>
          </div>
        )}
      </motion.section>
    </div>
  );
}
