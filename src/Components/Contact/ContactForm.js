import React from "react";
import styles from "./ContactForm.module.css";
import contact2 from "../../assets/gifs/contact2.gif"
export default function ContactForm() {
  return (
    <div className={styles.body}>
    <div className={styles.container}>
     <img src={contact2} alt="gif" />
      <form>
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
        <input type="submit" value="submit" className={styles.btn}/>
      </form>
      </div>
    </div>
  );
}
