// "use server";

import { useState, useEffect } from "react";

import styles from "@/components/work.module.css";

export default function Work() {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    async function fetchWork() {
      const response = await fetch("/api/work");
      if (!response.ok) return;

      const data = await response.json();

      setWorkItems(data);
    }

    fetchWork();
  }, []);

  console.log(workItems);
  return (
    <div className={styles.container}>
      {workItems.length > 0 &&
        workItems.map((el, i) => {
          return (
            <div className={styles.jobItem} key={i}>
              <h3>{`${el.title} - ${el.company}`}</h3>
              <p className={styles.jobMeta}>{`${el.date}, ${el.location}`}</p>
              <ul>
                {el.experiences.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
}
