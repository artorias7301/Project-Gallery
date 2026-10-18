import { NavLink } from "react-router";
import logo from "../../assets/images/logo.png";
import themeToggle from "../../assets/images/them-toggle.png";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink to="/" className={styles.logoBox} aria-label="Home">
          <img src={logo} className={styles.logo} alt="Site logo" />
        </NavLink>

        <div className={styles.linkBox}>
          <NavLink to="/" className={styles.link}>Home</NavLink>
          <NavLink to="/projects" className={styles.link}>Projects</NavLink>
          <NavLink to="/stack" className={styles.link}>Stack</NavLink>
          <NavLink to="/contact" className={styles.link}>Contact</NavLink>
        </div>
      </div>

      <button
        className={styles.themeButton}
        type="button"
        aria-label="Toggle theme"
      >
        <img src={themeToggle} className={styles.themToggle} alt="" />
      </button>
    </div>
  );
}
