import { projects } from "../../../public/Data/EnData";
import styles from "./TopProjects.module.scss"

export function TopProjects() {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id} className={styles.project}>
            <div className={styles.projectInfo}>
              <h1 className={styles.ProjectTitle}>{project.title}</h1>
              <p>{project.description}</p>
              <div className={styles.stack}>
                {project.usedTechs.map((tech) => {
                  return (
                    <h3 key={tech} className={styles.tech}>{tech}</h3>
                  );
                })}
              </div>
              <button className={styles.seeMore}>View Project</button>
            </div>
            <div className={styles.projectImage}>
              <img src={project.image} />
            </div>
          </div>
        );
      })}
    </>
  );
};