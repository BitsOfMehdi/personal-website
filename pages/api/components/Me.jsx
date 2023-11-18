const Me = () => {
  return (
    <section className="me">
      <div className="me__avatar"></div>
      <div className="me__middle-container">
        <h3 className="me__middle-container__title">Vahid Alilou</h3>
        <div className="me__middle-container__tag-container">
          <span className="me__middle-container__tag-container__tag">
            <p className="me__middle-container__tag-container__tag__text">
              Designer
            </p>
          </span>
          <span className="me__middle-container__tag-container__tag">
            <p className="me__middle-container__tag-container__tag__text">
              Developer
            </p>
          </span>
        </div>
        <p className="me__middle-container__paragraph">
          Passionate about creating intuitive and user-friendly interfaces.
        </p>
      </div>
      <div className="me__button-container">
        <button className="me__button-container__button--white">Contact</button>
        <button className="me__button-container__button">Hire Me</button>
      </div>
    </section>
  );
};

export default Me;
