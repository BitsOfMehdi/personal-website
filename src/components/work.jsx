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
          <section className={styles.projectList}>
            <h2>Recent Projects</h2>
            <ul>
              <li>
                <h3>
                    AWS Serverless URL Shortener
                   <a
                    className={styles.iconLink}
                    href="https://github.com/BitsOfMehdi/aws-url-shortener/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open AWS Serverless URL Shortener (GitHub)"
                    title="Open project (GitHub)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z"
                      ></path>
                    </svg>
                  </a>
                </h3>
                <p>A minimal serverless URL shortener built with AWS Lambda, API Gateway (HTTP API v2), and DynamoDB.</p>
              </li>
              <li>
                <h3>
                    AWS File Drop
                    <a
                    className={styles.iconLink}
                    href="https://github.com/BitsOfMehdi/aws-file-drop/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open AWS File Drop (GitHub)"
                    title="Open project (GitHub)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z"
                      ></path>
                    </svg>
                  </a>
                </h3>
                <p>A lightweight file sharing service: users upload a file, receive a shareable link, and others can download it up to N times within D days.</p>
              </li>
            </ul>
          </section>
          <section className={styles.careerStory}>
            <h2>Career Story</h2>
            <ul>
            {workHistory.map((el, i) => {
              return (
                <li className={styles.jobItem} key={i}>
                  <h3>{`${el.title} - ${el.company}`}</h3>
                  <p
                    className={styles.jobMeta}
                  >{`${el.date}, ${el.location}`}</p>
                  <p className={styles.jobDescription}>{el.description}</p>
                </li>
              );
            })}
            </ul>
          </section>
        </motion.div>
      )}
    </>
  );
}
