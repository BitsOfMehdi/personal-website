import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Mehdi Mousavi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
