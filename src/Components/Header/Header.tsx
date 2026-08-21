import { NavLink } from "react-router";
import { Menu } from "lucide-react";
import styles from "./Header.module.scss"

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Artorias</h1>
        <h2 className={styles.Bio}>Full-Stack Dev</h2>
      </div>

      <div className={styles.linkBox}>
        <NavLink to={"/projects"} className={styles.link}>Projects</NavLink>
        <NavLink to={"/stack"} className={styles.link}>Stack</NavLink>
        <NavLink to={"/contact"} className={styles.link}>Contact</NavLink>
      </div>

      <div className={styles.menu}><Menu /></div>

    </div>
  );
};