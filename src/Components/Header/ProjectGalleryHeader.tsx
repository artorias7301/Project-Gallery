import logo from "../../assets/images/logo.png";
import themeToggle from "../../assets/images/them-toggle.png";
import styles from "../../Pages/Projects/gallery.module.scss";
import { PortfolioHeader } from "./PortfolioHeader";

type ProjectGalleryHeaderProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

export function ProjectGalleryHeader({
  darkMode,
  onToggleTheme,
}: ProjectGalleryHeaderProps) {
  return (
    <PortfolioHeader
      activePage="projects"
      logoContent={<img className={styles.logo} src={logo} alt="" />}
      classes={{
        root: styles.navbar,
        nav: styles["nav-links"],
        active: styles.active,
        theme: styles["theme-toggle"],
      }}
      themeToggle={{
        onClick: onToggleTheme,
        ariaLabel: `Switch to ${darkMode ? "light" : "dark"} theme`,
        icon: <img src={themeToggle} alt="" />,
      }}
    />
  );
}
