import classes from "../../../styles/Header.module.css";
import thumbnail from "../../../public/asset/portfolio-pic.png";
import icSearch from "../../../public/images/ic-search.svg";
const Header = () => {
  console.log(thumbnail);
  return (
    <div className={classes.container}>
      <span className={classes["right-container"]}>
        <div className={classes["thumbnail-container"]}>
          <img src={thumbnail.src} alt="thumbnail" />
        </div>
        <h1>My Portfolio</h1>
      </span>
      <span className={classes["left-container"]}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <div className={classes.search}>
          <input type="text" placeholder="Search in site" />
          <button>
            <img src={icSearch.src} alt="ic-search" />
          </button>
        </div>
      </span>
    </div>
  );
};

export default Header;
