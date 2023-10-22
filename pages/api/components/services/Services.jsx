import ServiceItem from "./ServiceItem";

import styles from "../../../../styles/services/Services.module.css";
import servicesImg from "../../../../public/images/services/services.png";

const dummy_list = [
  {
    id: "s01",
    title: "UI/UX Design",
    subtitle: "User-centered design",
    icon: "💡",
    desc: "It's always nice to start a conversation with a friendly",
  },
  {
    id: "s02",
    title: "Web Development",
    subtitle: "Responsive websites",
    icon: "🔨",
    desc: "It's always nice to start a conversation with a friendly",
  },
];
const Services = () => {
  const list = dummy_list.map((e) => <ServiceItem key={e.id} item={e} />);
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={servicesImg.src} alt="Services" />
      </div>
      <div className={styles.rightContainer}>
        <h2>Services</h2>
        <p>Check the services I offer.</p>
        <button>Contact Me</button>
        <div className={styles.list}>{list}</div>
      </div>
    </section>
  );
};

export default Services;
