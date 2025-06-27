"use client";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { workHistory } from "@/app/api/work";
import styles from "@/components/work.module.css";

export default function Work({ isWork }) {
  const [showWork, setShowWork] = useState(false);

  useEffect(() => {
    if (isWork) {
      const timeout = setTimeout(() => {
        setShowWork(true);
      }, 100); // wait for Hero shift animation to complete
      return () => clearTimeout(timeout);
    } else {
      setShowWork(false);
    }
  }, [isWork]);
  return (
    <>
      {showWork && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={styles.container}>
            {workHistory.map((el, i) => {
              return (
                <div className={styles.jobItem} key={i}>
                  <h3>{`${el.title} - ${el.company}`}</h3>
                  <p
                    className={styles.jobMeta}
                  >{`${el.date}, ${el.location}`}</p>
                  <ul>
                    {el.experiences.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}
