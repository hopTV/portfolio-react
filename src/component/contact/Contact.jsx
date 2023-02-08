import React, { useRef } from 'react'

import "./contact.css"

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();

    //   emailjs
    //     .sendForm(
    //       "YOUR_SERVICE_ID",
    //       "YOUR_TEMPLATE_ID",
    //       form.current,
    //       "YOUR_PUBLIC_KEY"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    };

  return (
    <div className="contact-form">
      <div className="w__left">
        <div className="awesome">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s__blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="btn c__btn" />
          <span> "Thanks for Contacting me"</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact