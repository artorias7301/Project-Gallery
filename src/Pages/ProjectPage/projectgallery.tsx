import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { projects } from '../../assets/Data/Data';
import styles from './gallery.module.scss';

export function ProjectGalleryPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.heroSection}>
          <p className={styles.kicker}>// project gallery</p>
          <h1 className={styles.title}>Demo snapshots of the work.</h1>
          <p className={styles.subtitle}>
            A compact gallery of example projects, each with a visual preview,
            a short summary, and the stack used to build it.
          </p>
        </section>

        <section className={styles.galleryGrid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.badge}>Demo</span>
                  {project.featured && <span className={styles.featured}>Featured</span>}
                </div>

                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}> 
                  {project.usedTechs.map((tech) => (
                    <span key={`${project.id}-${tech}`} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <button type="button" className={styles.primaryButton}>
                    Live Demo <ExternalLink size={15} />
                  </button>
                  <button type="button" className={styles.secondaryButton}>
                    View Details <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
