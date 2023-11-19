import image01 from "../../../public/images/recent-posts/image-01.png";
import image02 from "../../../public/images/recent-posts/image-02.png";

const RecentPosts = () => {
  return (
    <section className="recent-posts">
      <div className="recent-posts__left-container">
        <h2>Recent Posts</h2>
        <p>Stay updated with my latest works and thoughts.</p>
        <button>View All</button>
      </div>
      <div className="recent-posts__right-container">
        <div className="recent-posts__right-container__item">
          <img src={image01.src} alt="image01" />
          <p> Hello! How are you today?</p>
          <div className="recent-posts__right-container__item__tag-container">
            <span className="recent-posts__right-container__item__tag-container__tag">
              <p className="recent-posts__right-container__item__tag-container__tag__text">
                Design
              </p>
            </span>
            <span className="recent-posts__right-container__item__tag-container__tag">
              <p className="recent-posts__right-container__item__tag-container__tag__text">
                Inspiration
              </p>
            </span>
          </div>
          <div className="recent-posts__right-container__item__avatar">
            <p></p>
            <img />
          </div>
          <div className="recent-posts__right-container__item__icon">
            <div className="recent-posts__right-container__item__icon__container">
              <p className="recent-posts__right-container__item__icon__container__content">
                📷
              </p>
            </div>
            <div className="recent-posts__right-container__item__icon__container">
              <p className="recent-posts__right-container__item__icon__container__content">
                💬
              </p>
            </div>
          </div>
        </div>
        {/* second item  */}
        <div className="recent-posts__right-container__item">
          <img src={image02.src} alt="image02" />
          <p> Hello! How are you today?</p>
          <div className="recent-posts__right-container__item__tag-container">
            <span className="recent-posts__right-container__item__tag-container__tag">
              <p className="recent-posts__right-container__item__tag-container__tag__text">
                Design
              </p>
            </span>
            <span className="recent-posts__right-container__item__tag-container__tag">
              <p className="recent-posts__right-container__item__tag-container__tag__text">
                Inspiration
              </p>
            </span>
          </div>
          <div className="recent-posts__right-container__item__avatar">
            <p></p>
            <img />
          </div>
          <div className="recent-posts__right-container__item__icon">
            <div className="recent-posts__right-container__item__icon__container">
              <p className="recent-posts__right-container__item__icon__container__content">
                📷
              </p>
            </div>
            <div className="recent-posts__right-container__item__icon__container">
              <p className="recent-posts__right-container__item__icon__container__content">
                💬
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
