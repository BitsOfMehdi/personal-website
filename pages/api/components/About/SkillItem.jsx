import styles from "../../../../styles/About/SkillItem.module.css";

const SkillItem = ({ item }) => {
  const tools = item.tools.map((e) => <span>{e}</span>);
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.rightContainer}>
        <h3>{item.title}</h3>
        <p className={styles.subtitle}>{item.subtitle}</p>
        <p>{item.desc}</p>
        <div className={styles.tools}>{tools}</div>
      </div>
    </div>
  );
};

export default SkillItem;
