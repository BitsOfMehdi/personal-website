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
          <img />
          <p> Hello! How are you today?</p>
          <div className="recent-posts__right-container__tag-container">
            <span className="recent-posts__right-container__tag-container__tag">
              <p className="recent-posts__right-container__tag-container__tag__text">
                Design
              </p>
            </span>
            <span className="recent-posts__right-container__tag-container__tag">
              <p className="recent-posts__right-container__tag-container__tag__text">
                Inspiration
              </p>
            </span>
          </div>
          <div className="recent-posts__right-container__item__avatar">
            <p></p>
            <img />
          </div>
          <div className="recent-posts__right-container__item__icon"></div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
