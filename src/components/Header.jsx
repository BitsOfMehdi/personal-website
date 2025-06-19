"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

const sections = ["about", "work", "contact", "blog"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let found = false;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          const offsetTop = window.scrollY + top;
          const offsetBottom = window.scrollY + bottom;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <hr className={styles.divider} />
          <ul className={styles.navList}>
            {sections.map((section, index) => (
              <li key={section} className={styles.navItem}>
                <a
                  href={`#${section}`}
                  onClick={() => setActiveSection(section)}
                  className={`${styles.navLink} ${
                    activeSection === section ? styles.active : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <hr className={styles.divider} />
        </div>
      </nav>
    </header>
  );
}
