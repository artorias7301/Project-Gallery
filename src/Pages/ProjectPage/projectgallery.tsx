import { useState } from "react";
import { projects } from "../../assets/Data/Data";
import { ProjectGalleryHeader } from "../../Components/Header/ProjectGalleryHeader";
import styles from "./gallery.module.scss";

export function ProjectGalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(true);

  const filters = ["All", ...new Set(projects.flatMap((project) => project.category))];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // const siteClassName = darkMode ? styles.site : `${styles.site} ${styles.light}`;
  const siteClassName = darkMode ? styles.site : `${styles.site} ${styles.site}`;

  return (
    <main className={siteClassName}>
      <div className={styles.portfolio}>
        <ProjectGalleryHeader
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(!darkMode)}
        />

        <section className={styles["projects-section"]} id="projects">
          <div className={styles["section-top"]}>
            <div className={styles["heading-block"]}>
              <p className={styles.counter}>
                <span>03</span> / 04
              </p>

              <h1>
                My <span>Projects</span>
              </h1>

              <p className={styles.intro}>
                A collection of web applications and side projects
                <br />
                I've built with modern technologies.
              </p>
            </div>

            <div className={styles.filters} aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? `${styles.filter} ${styles.active}`
                      : styles.filter
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className={styles["project-grid"]}>
            {filteredProjects.map((project, index) => (
              <article
                className={styles["project-card"]}
                key={`${project.id}-${index}`}
              >
                <a
                  className={styles["project-image"]}
                  href={`#${project.id}`}
                  aria-label={`View ${project.title}`}
                >
                  <img src={project.image} alt={`${project.title} preview`} />
                  <span className={styles["image-overlay"]} />
                </a>

                <div className={styles["project-info"]}>
                  <div className={styles["project-copy"]}>
                    <h2>{project.title}</h2>
                    <p className={styles["project-description"]}>
                      {project.description}
                    </p>
                    <p>
                      {project.usedTechs.map((tech, techIndex) => (
                        <span key={`${project.id}-${tech}`}>
                          {tech}
                          {techIndex < project.usedTechs.length - 1 && (
                            <i>/</i>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>

                  <a
                    className={styles["project-arrow"]}
                    href={`#${project.id}`}
                    aria-label={`Open ${project.title}`}
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className={styles.footer} id="contact">
          <p>Selected work. Built with passion.</p>
          <div className={styles["footer-line"]} />
          <a href="mailto:hello@example.com">
            Let's work together <span>→</span>
          </a>
        </footer>
      </div>
    </main>
  );
}