"use client";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import { workHistory } from "@/app/api/work";
import styles from "@/components/work.module.css";

export default function Work() {
  const [showWork, setShowWork] = useState(false);
  const { navState } = useNavControl();

  useEffect(() => {
    if (navState.currentPage === "work") {
      const timeout = setTimeout(() => {
        setShowWork(true);
      }, 200); // wait for Hero shift animation to complete
      return () => clearTimeout(timeout);
    } else {
      setShowWork(false);
    }
  }, [navState.currentPage]);
  return (
    <>
      {showWork && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
          }}
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
