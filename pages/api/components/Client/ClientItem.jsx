import styles from "../../../../styles/Client/ClientItem.module.css";

const ClientItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.client}>
        <img src={item.avatar} />
        <p>{item.title}</p>
        {/* <img className={styles.stars} src={item.stars} alt="review rate" /> */}
        <p className={styles.stars}>⭐⭐⭐⭐⭐</p>
      </div>
      <p>{item.review}</p>
      <p className={styles.emoji}>{item.emoji}</p>
    </div>
  );
};

export default ClientItem;
