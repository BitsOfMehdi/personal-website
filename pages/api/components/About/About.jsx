import SkillItem from "./SkillItem";

import styles from "../../../../styles/About/About.module.css";
import designSkill from "../../../../public/images/about/designSkill.png";
import devSkill from "../../../../public/images/about/devSkill.png";
import aboutImg from "../../../../public/images/about/aboutImg.png";

const dummy_skills = [
  {
    title: "Design Skills",
    subtitle: "UI/UX Design",
    desc: "indness and say hello to those around you",
    image: designSkill.src,
    tools: ["Sketch", "Figma"],
  },
  {
    title: "Development Skills",
    subtitle: "Web Development",
    desc: "indness and say hello to those around you",
    image: devSkill.src,
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

const About = () => {
  const skillItems = dummy_skills.map((e) => <SkillItem key={e.id} item={e} />);

  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <h2>About Me</h2>
        <p>Learn more about my skills and experience.</p>
        <button>Download Resume</button>
        <div>{skillItems}</div>
      </div>
      <div className={styles.rightContainer}>
        <img src={aboutImg.src} />
      </div>
    </section>
  );
};

export default About;
