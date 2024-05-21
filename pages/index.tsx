import styles from "../styles/Home.module.css";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Image from "next/image";
import heroImg from "../assets/heroImg.png";

import React from "react";

const Index = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <div className={styles.heroSectionWrapper}>
          <div className={styles.heroTextWrapper}>
            <p className={styles.heroText}>you got questions we got answers</p>
          </div>
          <div className={styles.imgWrapper}>
            <img src={heroImg.src} alt="Hero image" />
          </div>
        </div>
        <div className={styles.featureWrapper}>
          <p>1 feature</p>
          <p>2 feature</p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Index;
