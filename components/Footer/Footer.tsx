import styles from "./Footer.module.css";
import React from "react";

type FooterProps = {
  websiteName: string;
  socialLinks: string;
};

const Footer = ({ websiteName, socialLinks }: FooterProps) => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.websiteName}>
          <h4>{websiteName}</h4>
        </div>
        <div className={styles.socialLinks}>
          <p>{socialLinks}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
