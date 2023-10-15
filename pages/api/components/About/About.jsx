import styles from "../../../../styles/About/About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <span className={styles["left-span"]}>
        <h2>About Me</h2>
        <p>Learn more about my skills and experience.</p>
        <button>Download Resume</button>
        <ul></ul>
      </span>
      <span className={styles["right-span"]}></span>
    </section>
  );
};

export default About;
