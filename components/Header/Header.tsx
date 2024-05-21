import React from "react";
import styles from "./Header.module.css";

type NavType = {
  id: number;
  title: string;
  href: string;
};

type HeaderProps = {
  pageName: string;
  nav: NavType[];
};

const Header = ({ pageName, nav }: HeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.brand}>
        <h1>{pageName}</h1>
      </div>
      <div className={styles.menu}>
        <nav>
          <ul className={styles.links}>
            {nav.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
