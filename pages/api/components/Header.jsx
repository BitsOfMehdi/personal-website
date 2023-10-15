import styles from "../../../styles/Header.module.css";

import thumbnail from "../../../public/images/joker/portfolio-pic.png";

import icSearch from "../../../public/svg/ic-search.svg";

const Header = () => {
  return (
    <section className={styles.container}>
      <span className={styles["left-span"]}>
        <div className={styles["thumbnail-container"]}>
          <img src={thumbnail.src} alt="thumbnail" />
        </div>
        <h1>My Portfolio</h1>
      </span>
      <span className={styles["right-span"]}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <div className={styles.search}>
          <input type="text" placeholder="Search in site" />
          <button>
            <img src={icSearch.src} alt="ic-search" />
          </button>
        </div>
      </span>
    </section>
  );
};

export default Header;
