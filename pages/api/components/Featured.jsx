import styles from "../../../styles/Featured.module.css";

const Featured = () => {
  return (
    <section className={styles.container}>
      <span className={styles["upper-span"]}>
        <h2>Featured Projects</h2>
        <p>Take a look at some of my best works.</p>
        <button>View More</button>
      </span>
      <span className={styles["lower-span"]}></span>
    </section>
  );
};

export default Featured;
