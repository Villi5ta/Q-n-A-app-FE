import React from "react";
import styles from "./Header.module.css";

type NavType = {
  id: number;
  title: string;
  href: string;
};

type LogoType = {
  id: number;
  title: string;
  href: string;
};

type HeaderProps = {
  pageName: LogoType[];
  nav: NavType[];
};

const Header = ({ pageName, nav }: HeaderProps) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.brand}>
        <div>
          {pageName.map((name) => {
            return (
              <h1 key={name.id}>
                <a href={name.href}>{name.title}</a>
              </h1>
            );
          })}
        </div>
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
    </header>
  );
};

export default Header;
