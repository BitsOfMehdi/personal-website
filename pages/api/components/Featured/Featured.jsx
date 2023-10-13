import ProjectItem from "./ProjectItem";

import styles from "../../../../styles/Featured/Featured.module.css";
import webImg from "../../../../public/images/featured/web.png";
import uiuxImg from "../../../../public/images/featured/uiux.png";
import mobileImg from "../../../../public/images/featured/mobile.png";

const dummy_data = [
  {
    id: "01",
    title: "Project 2",
    subtitle: "Web Development",
    image: webImg.src,
  },
  {
    id: "02",
    title: "Project 1",
    subtitle: "UI/UX Design",
    image: uiuxImg.src,
  },
  {
    id: "03",
    title: "Project 3",
    subtitle: "Mobile App Development",
    image: mobileImg.src,
  },
];

const list = dummy_data.map((e) => <ProjectItem key={e.id} item={e} />);

const Featured = () => {
  return (
    <section className={styles.container}>
      <span className={styles["upper-span"]}>
        <h2>Featured Projects</h2>
        <p>Take a look at some of my best works.</p>
        <button>View More</button>
      </span>
      <span className={styles["lower-span"]}>{list}</span>
    </section>
  );
};

export default Featured;
