import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Copyright © {new Date().getFullYear()} Mehdi Mousavi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
