import { Link } from 'react-router';
import { PortfolioHeader } from '../../Components/Header/PortfolioHeader';
import styles from './Home.module.scss';

const skills = ["React.js", "JavaScript", "Node.js", "UI / UX"];

export function HomePage() {
  return (
    <main className={styles.site}>
      <div className={styles.portfolio}>
        <PortfolioHeader
          activePage="home"
          logoClassName={styles.logo}
          classes={{
            root: styles.navbar,
            nav: styles['nav-links'],
            active: styles.active,
            theme: styles['theme-toggle'],
          }}
        />

        <section className={styles.hero} id="home">
          <div className={styles['hero-content']}>
            <p className={styles.eyebrow}>
              <span className={styles['status-dot']} />
              AVAILABLE FOR SELECT PROJECTS
            </p>

            <h1>
              Crafting digital
              <br />
              experiences with
              <br />
              <span>purpose.</span>
            </h1>

            <p className={styles['hero-description']}>
              I'm a creative developer building modern,
              <br className={styles['desktop-break']} />
              thoughtful digital experiences through code
              <br className={styles['desktop-break']} />
              and minimalist design.
            </p>

            <div className={styles['hero-actions']}>
              <Link className={styles['button-primary']} to="/projects">
                Explore my work <span>↗</span>
              </Link>

              <Link className={styles['button-secondary']} to="/contact">
                Get in touch <span>→</span>
              </Link>
            </div>

            <div className={styles['hero-meta']}>
              <div>
                <span className={styles['meta-label']}>BASED IN</span>
                <span className={styles['meta-value']}>Earth, Everywhere</span>
              </div>

              <div>
                <span className={styles['meta-label']}>FOCUS</span>
                <span className={styles['meta-value']}>Design & Development</span>
              </div>
            </div>
          </div>

          <div className={styles['hero-visual']} aria-label="Abstract green orb">
            <div className={styles['orb-glow']} />
            <div className={styles.orb}>
              <div className={styles['orb-highlight']} />
            </div>
            <div className={`${styles['orbit-ring']} ${styles['orbit-ring-one']}`} />
            <div className={`${styles['orbit-ring']} ${styles['orbit-ring-two']}`} />

            <div className={styles['visual-caption']}>
              <span className={styles['caption-line']} />
              <div>
                <p>CREATIVE DEVELOPMENT</p>
                <span>Digital craft / 001</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.expertise} id="about">
          <div className={styles['expertise-heading']}>
            <span className={styles['section-index']}>01 / EXPERTISE</span>
            <p>Ideas into interfaces.</p>
          </div>

          <div className={styles['skill-list']}>
            {skills.map((skill, index) => (
              <div className={styles['skill-item']} key={skill}>
                <span className={styles['skill-number']}>
                  0{index + 1}
                </span>
                <span className={styles['skill-name']}>{skill}</span>
                <span className={styles['skill-arrow']}>↗</span>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.footer} id="contact">
          <p>Designed with intention. Built with passion.</p>
          <div className={styles['footer-line']} />
          <a href="mailto:hello@example.com">
            Let's work together <span>→</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
