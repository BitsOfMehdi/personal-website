"use client";

import { useState, useEffect } from "react";

import styles from "@/components/work.module.css";

export default function Work() {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    async function fetchWork() {
      const response = await fetch("/api/work/");
      console.log(response);
    }

    fetchWork();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Test Work</h1>
      <div className={styles.jobItem}>
        <h3>Frontend Web Developer - Radio Free Asia</h3>
        <p className={styles.jobMeta}>Aug 2023 - May 2025, Washington, D.C.</p>
        <ul>
          <li>
            Led migration of 17 websites to React/Next.js improving performance
            and editorial control.
          </li>
          <li>Built 40+ reusable React components in ArcXP CMS.</li>
          <li>
            Implemented forms with AWS Lambda integration, pagination logic, and
            custom asset delivery via S3.
          </li>
          <li>
            Worked on RESTful and GraphQL API integration and participated in
            CI/CD pipeline.
          </li>
        </ul>
      </div>
    </div>
  );
}
