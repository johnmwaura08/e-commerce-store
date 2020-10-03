import React from "react";
import styles from "./ContactForm.module.css";
import contact2 from "../../assets/gifs/contact2.gif";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src={contact2} alt="gif" />
        <form className={styles.contactForm}>
          <input
            name="name"
            type="text"
            className={styles.feedbackInput}
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className={styles.feedbackInput}
            placeholder="Email"
          />
          <textarea
            name="text"
            className={styles.feedbackInput}
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="submit" className={styles.btn} />
        </form>
      </div>
      <section className={styles.contact}>
        <h2>You can find us on</h2>

        <ul className={styles.socials}>
          <li>
            <FaTwitter className={styles.socialIcons} />
          </li>
          <li>
            <FaPinterest className={styles.socialIcons} />
          </li>
          <li>
            <FaFacebookF className={styles.socialIcons} />
          </li>
          <li>
            <FaInstagram className={styles.socialIcons} />
          </li>
          <li>
            <FaTumblr className={styles.socialIcons} />
          </li>
        </ul>
      </section>
      <section className={styles.bgBlack}>
        <div className={styles.mailingList}>
          <form className={styles.mailingListForm}>
            <h2>Join Our Mailing List</h2>
            <div className={styles.formStyle}>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email..."
              />
              <input
                id="submit"
                type="submit"
                className={styles.btnGhost}
                value="Submit"
              />
            </div>
          </form>
        </div>
      </section>
      <footer style={{backgroundColor:"black", height: "80px"}}></footer>
    </div>
  );
}
