const WebsiteAnalytics = () => {
  return (
    <section className="website-analytics">
      <div className="website-analytics__container">
        <h2>Website Analytics</h2>
        <p>Track your website's performance with real-time data.</p>
        <button>View Report</button>
        <div className="website-analytics__container__list">
          <div className="website-analytics__container__list__metric">
            <p className="website-analytics__container__list__metric__title">
              visitors
            </p>
            <p className="website-analytics__container__list__metric__data">
              1,000
            </p>
            <p className="website-analytics__container__list__metric__change">
              -10%
            </p>
          </div>
          <div className="website-analytics__container__list__metric">
            <p className="website-analytics__container__list__metric__title">
              Page Views
            </p>
            <p className="website-analytics__container__list__metric__data">
              5000
            </p>
          </div>
          <div className="website-analytics__container__list__metric">
            <p className="website-analytics__container__list__metric__title">
              Conversion Rate
            </p>
            <p className="website-analytics__container__list__metric__data">
              2.5%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteAnalytics;
