import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import styles from './Stack.module.scss';

const stackGroups = [
  {
    title: 'Frontend',
    description: 'Responsive interfaces that prioritize clarity, performance, and conversion.',
    items: ['React', 'TypeScript', 'Vite', 'SCSS', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend',
    description: 'Reliable APIs, business logic, and data flows that keep products stable.',
    items: ['Python', 'Node.js', 'REST APIs', 'Authentication', 'Database design', 'Performance tuning'],
  },
  {
    title: 'Workflow',
    description: 'Lean delivery habits that keep teams shipping without losing quality.',
    items: ['Git', 'Testing', 'Debugging', 'CI/CD', 'Design systems', 'Agile collaboration'],
  },
];

export function StackPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.heroSection}>
          <p className={styles.kicker}>// stack</p>
          <h1 className={styles.title}>Full-stack developer building from concept to launch.</h1>
          <p className={styles.subtitle}>
            I connect the user experience with the systems behind it, making sure interfaces are
            polished while the application logic, data, and deployment remain dependable.
          </p>
        </section>

        <section className={styles.grid}>
          {stackGroups.map((group) => (
            <article key={group.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>{group.title}</span>
              </div>

              <h2 className={styles.cardTitle}>{group.title}</h2>
              <p className={styles.cardDescription}>{group.description}</p>

              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span key={`${group.title}-${item}`} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className={styles.details}>
          <div className={styles.infoBlock}>
            <p className={styles.smallLabel}>What I value</p>
            <h2>Thoughtful product engineering.</h2>
            <ul className={styles.list}>
              <li>Designing interfaces that feel intuitive and fast.</li>
              <li>Building APIs and data models that scale without chaos.</li>
              <li>Shipping features with testing, clarity, and maintainability in mind.</li>
              <li>Working across product, design, and engineering to turn ideas into real experiences.</li>
            </ul>
          </div>

          <aside className={styles.callout}>
            <p className={styles.smallLabel}>Core focus</p>
            <p>
              A full-stack programmer bridges the gap between product vision and technical execution,
              turning user needs into clean frontend flows and dependable backend systems.
            </p>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}
