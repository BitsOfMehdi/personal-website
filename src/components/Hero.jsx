import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heading}>Hey, I'm Mehdi Mousavi</h1>
      <p className={styles.description}>
        Frontend Engineer — crafting fast, modern websites with React, Next.js &
        Tailwind CSS.
      </p>
      <div className={styles.buttonWrapper}>
        <a href="#projects" className={styles.ctaButton}>
          View My Work
        </a>
      </div>
    </section>
  );
}
