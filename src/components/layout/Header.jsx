"use client";
import { useEffect } from "react";
import { useNavControl } from "@/context/nav-control-context";
import styles from "./Header.module.css";

const sections = ["about", "work", "contact"];

export default function Header() {
  const { navState, navDispatch } = useNavControl();

  const handleHomeClick = () => {
    navDispatch({ type: "home" });
  };

  useEffect(() => {
    if (navState.isModalClosed) {
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
                    navDispatch({ type: section });
                  }}
                  className={`${styles.navLink} ${
                    navState.currentPage === section ? styles.active : ""
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
