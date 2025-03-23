import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nitish</h1>
        <p className={styles.description}>
        I'm a full-stack developer in the making, learning Java, Spring Boot, and React to build scalable and secure applications.
         Reach out if you'd like to connect or learn together!
        </p>
        <a href="mailto:robertrock6255@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/nobg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
