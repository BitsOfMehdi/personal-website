import classes from "../../../styles/Header.module.css";
import thumbnail from "../../../public/asset/portfolio-pic.png";
import icSearch from "../../../public/images/ic-search.svg";
const Header = () => {
  console.log(thumbnail);
  return (
    <div className={classes.container}>
      <div className={classes["thumbnail-container"]}>
        <img src={thumbnail.src} alt="thumbnail" />
      </div>
      <h1>My Portfolio</h1>
      <button>Home</button>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
      <div>
        <input type="text" placeholder="Search in site" />
        <img src={icSearch.src} alt="ic-search" />
      </div>
    </div>
  );
};

export default Header;
