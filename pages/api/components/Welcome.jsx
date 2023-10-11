import styles from "../../../styles/Welcome.module.css";
import vahid from "../../../public/images/dash-vahid.png";

const Welcome = () => {
  return (
    <section className={styles.container}>
      <span className={styles["left-container"]}>
        <h2>Welcome to My Protfolio</h2>
        <p>I'm a passionate designer and developer.</p>
        <input type="text" placeholder="Search for projects" />
        <div className={styles.button1}>
          <button className={styles.learn}>Learn more</button>
          <button className={styles.go}>Go</button>
        </div>
        <div className={styles.button2}>
          <button className={styles.featured}>Featured</button>
          <button className={styles.recent}>Recent</button>
        </div>
      </span>
      <span className={styles["right-container"]}>
        <img className={styles.vahid} src={vahid.src} alt="Vahid" />
      </span>
    </section>
  );
};

export default Welcome;
