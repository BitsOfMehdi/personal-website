import styles from "../../../../styles/Featured/ProjectItem.module.css";

const ProjectItem = ({ item }) => {
  console.log(item.image);
  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.text}>
        <p className={styles.p}>{item.title}</p>
        <h3>{item.subtitle}</h3>
      </div>
    </div>
  );
};

export default ProjectItem;
