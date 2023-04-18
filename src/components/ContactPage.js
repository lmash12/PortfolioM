import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact.css";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqfu6vj",
        "template_6xe37aq",
        form.current,
        "nMAEWyJ8xHsmgeh0P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h1>Let's Connect</h1>
      <p>
        I'm always open to connecting with new people, whether it's for work
        opportunities or just a casual chat over coffee. If you have a project
        in mind or simply want to say hello, feel free to get in touch using the
        contact form below. I'd love to hear from you and see how we can work
        together to bring your ideas to life.
      </p>
      <main className="contact-sec">
        <form className="EmailForm form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter Your Name" />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
