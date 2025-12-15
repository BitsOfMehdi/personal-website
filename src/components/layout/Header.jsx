import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Mehdi Mousavi
        </Link>
        <div className={styles.menuWrapper}>
          <div className={styles.navList}>
            <Link href="/#about" className={styles.navItem}>
              About
            </Link>
            <Link href="/#work" className={styles.navItem}>
              Work
            </Link>
            <Link href="/#contact" className={styles.navItem}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
