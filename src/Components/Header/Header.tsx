import { NavLink } from "react-router";
import { Menu } from "lucide-react";
import styles from "./Header.module.scss"

export function Header() {
  return (
    <div className="header">
      <div>
        <img className={styles.logo} src=""/>
        <h1 className={styles.name}>Artorias73</h1>
      </div>
      <h2 className={styles.Bio}>Full-Stack Dev</h2>

      <div className={styles.linkBox}>
        <NavLink to={"/projects"} className={styles.link}>Projects</NavLink>
        <NavLink to={"/stack"} className={styles.link}>Stack</NavLink>
        <NavLink to={"/contact"} className={styles.link}>Contact</NavLink>
      </div>

      <div><Menu/></div>
      
    </div>
  );
};