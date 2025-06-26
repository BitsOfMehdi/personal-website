"use client";
import { useState } from "react";
import styles from "./header.module.css";

const sections = ["about", "work", "contact", "blog"];

export default function Header({ navDispatch }) {
  const [activeSection, setActiveSection] = useState("");

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo} onClick={handleHomeClick}>
          Mehdi Mousavi
        </h1>

        <div className={styles.menuWrapper}>
          {/* <hr className={styles.divider} /> */}
          <ul className={styles.navList}>
            {sections.map((section, index) => (
              <li key={section} className={styles.navItem}>
                <button
                  onClick={() => {
                    setActiveSection(section);
                    navDispatch(section);
                  }}
                  className={`${styles.navLink} ${
                    activeSection === section ? styles.active : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          {/* <hr className={styles.divider} /> */}
        </div>
      </nav>
    </header>
  );
}
