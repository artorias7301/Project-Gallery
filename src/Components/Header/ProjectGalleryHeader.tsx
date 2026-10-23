import logo from "../../assets/images/logo.png";
import themeToggle from "../../assets/images/them-toggle.png";
import styles from "../../Pages/Projects/gallery.module.scss";

type ProjectGalleryHeaderProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

export function ProjectGalleryHeader({
  darkMode,
  onToggleTheme,
}: ProjectGalleryHeaderProps) {
  return (
    <header className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="" />

      <nav className={styles["nav-links"]}>
        <a href="#projects">Home</a>
        <a className={styles.active} href="#projects">
          Projects
        </a>
        <a href="#projects">About</a>
        <a href="#projects">Contact</a>
      </nav>

      {/* <nav className={styles["nav-links"]}>
        <a href="#home">Home</a>
        <a className={styles.active} href="#projects">
          Projects
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav> */}

      <button
        className={styles["theme-toggle"]}
        onClick={onToggleTheme}
        aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
        type="button"
      >
        <img src={themeToggle} alt="" />
      </button>
    </header>
  );
}
