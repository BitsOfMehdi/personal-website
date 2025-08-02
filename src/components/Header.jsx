"use client";
import { useState, useEffect } from "react";
import { useNavControl } from "@/context/nav-control-context";
import styles from "./Header.module.css";

const sections = ["about", "work", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const { navDispatch, navState } = useNavControl();

  const handleHomeClick = () => {
    setActiveSection("");
    navDispatch({ type: "home" });
  };

  useEffect(() => {
    if (navState.isModalClosed) {
      setActiveSection("");
    }
  }, [navState.isModalClosed]);

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
                    navDispatch({ type: section });
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
