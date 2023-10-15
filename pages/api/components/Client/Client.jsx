import ClientItem from "./ClientItem";

import styles from "../../../../styles/Client/Client.module.css";
import stars from "../../../../public/svg/stars5.svg";
import client1 from "../../../../public/images/client/client1.png";
import client2 from "../../../../public/images/client/client2.png";

const dummy_reviews = [
  {
    id: "c01",
    avatar: client1.src,
    title: "Client 1",
    review: "It's always nice to start a conversation with a friendly",
    stars: stars.src,
    emoji: "🌟 👏",
  },
  {
    id: "c02",
    avatar: client2.src,
    title: "Client 2",
    review: "It's always nice to start a conversation with a friendly",
    stars: stars.src,
    emoji: "🌟 👏",
  },
];

const Client = () => {
  const list = dummy_reviews.map((e) => <ClientItem key={e.id} item={e} />);
  return (
    <section className={styles.container}>
      <span className={styles["left-span"]}>
        <h2>Client Testimonials</h2>
        <p>Here's what my clients are saying about my work.</p>
      </span>
      <span className={styles["right-span"]}>{list}</span>
    </section>
  );
};

export default Client;
