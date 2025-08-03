"use client";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import { workHistory } from "@/app/api/work";
import styles from "@/components/Work.module.css";

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
          <div>
            {workHistory.map((el, i) => {
              return (
                <div className={styles.jobItem} key={i}>
                  <h3>{`${el.title} - ${el.company}`}</h3>
                  <p
                    className={styles.jobMeta}
                  >{`${el.date}, ${el.location}`}</p>
                  <p className={styles.jobDescription}>{el.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}
