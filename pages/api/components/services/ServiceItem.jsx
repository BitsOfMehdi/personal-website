import styles from "../../../../styles/services/ServiceItem.module.css";

const ServiceItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <p className={styles.icon}>{item.icon}</p>
      </div>
      <div className={styles.titleContainer}>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  );
};

export default ServiceItem;
