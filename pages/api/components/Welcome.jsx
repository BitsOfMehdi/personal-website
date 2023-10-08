import styles from "../../../styles/Welcome.module.css";
import vahid from "../../../public/images/dash-vahid.png";

const Welcome = () => {
  return (
    <section className={styles.container}>
      <div className={styles["left-container"]}>
        <h1>Welcome Component</h1>
      </div>
      <div className={styles["right-container"]}>
        <img className={styles.vahid} src={vahid.src} alt="Vahid" />
      </div>
    </section>
  );
};

export default Welcome;
