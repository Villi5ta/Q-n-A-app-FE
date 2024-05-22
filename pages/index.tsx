import styles from "../styles/Home.module.css";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import heroImg from "../assets/heroImg.png";
import Features from "../components/Features/Features";
import Link from "next/link";

import React from "react";

const Index = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <div className={styles.heroSectionWrapper}>
          <div className={styles.heroTextWrapper}>
            <div className={styles.heroText}>
              <p>you got questions we got answers</p>
            </div>
            <div className={styles.heroBtn}>
              <button>
                <Link href={"/login"}>Try it NOW!</Link>
              </button>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={heroImg.src} alt="Hero image" />
          </div>
        </div>
        <Features />
      </div>
    </PageTemplate>
  );
};

export default Index;
