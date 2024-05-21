import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { nav } from "../../constants/nav";
import Footer from "../Footer/Footer";
import styles from "./PageTemplate.module.css";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div>
      <Header pageName="Ask'a'Choom" nav={nav} />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
