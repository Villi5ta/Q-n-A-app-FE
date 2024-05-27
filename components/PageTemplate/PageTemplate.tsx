import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { nav } from "../../constants/nav";
import { logo } from "../../constants/logo";
import Footer from "../Footer/Footer";
import styles from "./PageTemplate.module.css";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header pageName={logo} nav={nav} />
      <div className={styles.content}>{children}</div>
      <Footer
        websiteName="@Willsoft, 2024"
        preface="We do not take responsibility for user generated content. All questions and answers are created by other individuals and not the website team, unless marked otherwise. "
      />
    </div>
  );
};

export default PageTemplate;
