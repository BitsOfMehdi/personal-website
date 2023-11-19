import image from "../../../public/images/contact-me.png";

const ContactMe = () => {
  return (
    <section className="contact-me">
      <div className="contact-me__left-container">
        <img src={image.src} alt="image" />
      </div>
      <div className="contact-me__right-container">
        <h2>Contact Me</h2>
        <p>Have a project in mind or just want to say hi? Drop me a message.</p>
        <form>
          <div className="contact-me__right-container__input">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className="contact-me__right-container__input">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className="contact-me__right-container__input">
            <label htmlFor="message">Message</label>
            <input id="message" type="text" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
