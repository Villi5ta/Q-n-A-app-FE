import styles from "./Footer.module.css";
import React from "react";

type FooterProps = {
  websiteName: string;
  preface: string;
};

const Footer = ({ websiteName, preface }: FooterProps) => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.websiteName}>
          <h4>{websiteName}</h4>
        </div>
        <div className={styles.preface}>
          <p>{preface}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
