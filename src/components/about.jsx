"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import styles from "@/components/about.module.css";

export default function About() {
  const [showAbout, setShowAbout] = useState(false);
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { navState } = useNavControl();

  useEffect(() => {
    if (navState.currentPage === "about") {
      const timeout = setTimeout(() => {
        setIsLoading(true);

        (async function fetchContent() {
          try {
            const getData = await fetch("/api/content/about");
            const data = await getData.json();
            console.log(data);
            setContent(data);
            setShowAbout(true);
          } catch (e) {
            console.error("Somting went wrong!", e.message);
          } finally {
            setIsLoading(false);
          }
        })();
      }, 250);

      return () => clearTimeout(timeout);
    } else {
      setShowAbout(false);
    }
  }, [navState.currentPage]);

  return (
    <>
      {showAbout && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
          }}
        >
          {isLoading ? (
            <p
              className={styles.description}
              style={{
                margin: "auto",
                marginBlockStart: "40vh",
                fontWeight: "500",
              }}
            >
              Loading...
            </p>
          ) : (
            <div className={styles.contentShift}>
              <h2 className={styles.title}>{content.title}</h2>
              <p className={styles.description}>{content.content}</p>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
