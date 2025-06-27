"use client";
import { useState } from "react";
import styles from "./header.module.css";

const sections = ["about", "work", "contact", "blog"];

export default function Header({ navDispatch }) {
  const [activeSection, setActiveSection] = useState("");

  const handleHomeClick = () => {
    setActiveSection("");
    navDispatch("home");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo} onClick={handleHomeClick}>
          Mehdi Mousavi
        </h1>
        <div className={styles.menuWrapper}>
          <ul className={styles.navList}>
            {sections.map((section) => (
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
        </div>
      </nav>
    </header>
  );
}
