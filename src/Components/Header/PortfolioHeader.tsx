import type { ReactNode } from "react";
import { NavLink } from "react-router";

type Page = "home" | "projects" | "about" | "contact";

type PortfolioHeaderProps = {
  activePage: Page;
  classes: {
    root: string;
    nav: string;
    theme: string;
    active: string;
  };
  logoClassName?: string;
  logoContent?: ReactNode;
  themeToggle?: {
    ariaLabel: string;
    icon: ReactNode;
    onClick: () => void;
  };
};

const navigationItems: { page: Page; label: string; to: string }[] = [
  { page: "home", label: "Home", to: "/" },
  { page: "projects", label: "Projects", to: "/projects" },
  { page: "about", label: "About", to: "/about" },
  { page: "contact", label: "Contact", to: "/contact" },
];

export function PortfolioHeader({
  activePage,
  classes,
  logoClassName,
  logoContent = "ΛM",
  themeToggle,
}: PortfolioHeaderProps) {
  return (
    <header className={classes.root}>
      <NavLink to="/" className={logoClassName} aria-label="Home">
        {logoContent}
      </NavLink>

      <nav className={classes.nav} aria-label="Main navigation">
        {navigationItems.map(({ page, label, to }) => (
          <NavLink
            key={page}
            to={to}
            end={page === "home"}
            className={activePage === page ? classes.active : undefined}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {themeToggle ? (
        <button
          className={classes.theme}
          type="button"
          aria-label={themeToggle.ariaLabel}
          onClick={themeToggle.onClick}
        >
          {themeToggle.icon}
        </button>
      ) : (
        <span className={classes.theme} aria-hidden="true">
          ☾
        </span>
      )}
    </header>
  );
}
