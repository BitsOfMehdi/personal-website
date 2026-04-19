"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import Card from "@/components/ui/Card";
import styles from "@/components/sections/About.module.css";

export default function About() {
  const [showAbout, setShowAbout] = useState(false);
  const { navState } = useNavControl();

  useEffect(() => {
    if (navState.curSection === "about") {
      const timeout = setTimeout(() => {
        setShowAbout(true);
      }, 200); // wait for Hero shift animation to complete
      return () => clearTimeout(timeout);
    } else {
      setShowAbout(false);
    }
  }, [navState.curSection]);

  return (
    <>
      {showAbout && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className={styles.contentShift}>
            <h2 className={styles.title}>About Me</h2>
            <Card>
              <p className={styles.description}>
                I'm a Frontend Engineer with 7+ years of experience building
                high-performance web applications using React, Next.js, and
                Node.js. I focus on clean architecture, performance, and
                creating user-friendly interfaces. I enjoy solving complex
                problems, collaborating across teams, and building systems that
                scale.
              </p>
            </Card>
          </div>
        </motion.div>
      )}
    </>
  );
}
