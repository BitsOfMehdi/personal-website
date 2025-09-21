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
          <section>
            <h2>Recent Project</h2>
            <ul>
              <li>
                <h3>
                  <a href="https://github.com/BitsOfMehdi/aws-url-shortener/blob/master/README.md" target="_blank" rel="noopener noreferrer">
                    AWS Serverless URL Shortener
                  </a>
                </h3>
                <p>A minimal serverless URL shortener built with AWS Lambda, API Gateway (HTTP API v2), and DynamoDB.</p>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/BitsOfMehdi/aws-file-drop/blob/master/README.md" target="_blank" rel="noopener noreferrer">
                    AWS File Drop
                  </a>
                </h3>
                <p>A lightweight file sharing service: users upload a file, receive a shareable link, and others can download it up to N times within D days.</p>
              </li>
            </ul>
          </section>
          <div>
            <h2>Career Story</h2>
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
