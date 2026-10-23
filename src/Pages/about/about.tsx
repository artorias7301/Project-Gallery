import { Link } from 'react-router';
import { PortfolioHeader } from '../../Components/Header/PortfolioHeader';
import styles from './about.module.scss';

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with maintainable component architecture.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Designing reliable APIs, application logic, authentication, and server-side systems.",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication", "WebSockets"],
  },
  {
    number: "03",
    title: "Databases & Storage",
    description:
      "Modeling data, optimizing queries, and building dependable persistence layers.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Database Design"],
  },
  {
    number: "04",
    title: "DevOps & CI/CD",
    description:
      "Automating builds, running tests, and delivering applications through repeatable pipelines.",
    skills: ["Docker", "GitHub Actions", "CI/CD Pipelines", "Linux", "Nginx", "Deployment"],
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Deploying and operating applications with attention to availability and scalability.",
    skills: ["AWS", "Vercel", "Cloud Services", "Environment Configuration", "Monitoring"],
  },
  {
    number: "06",
    title: "Quality & Engineering",
    description:
      "Writing testable code, reviewing changes, and maintaining secure, reliable software.",
    skills: ["Git", "GitHub", "Jest", "Vitest", "Playwright", "Code Review", "Security"],
  },
];

const workflow = [
  {
    number: "01",
    title: "Plan",
    description: "Requirements, architecture, and technical decisions.",
  },
  {
    number: "02",
    title: "Build",
    description: "Clean code, reusable components, and robust APIs.",
  },
  {
    number: "03",
    title: "Test",
    description: "Automated tests, validation, and quality checks.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "CI/CD pipelines, production releases, and monitoring.",
  },
];

export function AboutPage() {
  return (
    <main className={styles['about-site']}>
      <div className={styles['about-portfolio']}>
        <PortfolioHeader
          activePage="about"
          logoClassName={styles['about-logo']}
          classes={{
            root: styles['about-navbar'],
            nav: styles['about-nav-links'],
            active: styles.active,
            theme: styles['about-theme-icon'],
          }}
        />

        {/* Intro */}
        <section className={styles['about-hero']}>
          <div className={styles['about-counter']}>
            <span>02</span> / 04
          </div>

          <div className={styles['about-hero-grid']}>
            <div className={styles['about-hero-copy']}>
              <p className={styles['about-eyebrow']}>
                <span className={styles['about-status-dot']} />
                ABOUT ME / ENGINEERING
              </p>

              <h1>
                Engineering
                <br />
                ideas into
                <br />
                <span>reality.</span>
              </h1>

              <p className={styles['about-lead']}>
                Full Stack Developer focused on building
                reliable, scalable, and thoughtfully designed
                digital products — from the first interface
                to the production infrastructure.
              </p>

              <div className={styles['about-hero-actions']}>
                <Link className={styles['about-primary-btn']} to="/projects">
                  Explore projects <span>↗</span>
                </Link>

                <Link className={styles['about-secondary-btn']} to="/contact">
                  Let's connect <span>→</span>
                </Link>
              </div>
            </div>

            <div className={styles['about-visual']}>
              <div className={styles['about-visual-glow']} />

              <div className={styles['about-code-window']}>
                <div className={styles['about-window-bar']}>
                  <div className={styles['about-window-dots']}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>developer.ts</span>
                  <span className={styles['about-window-status']}>● LIVE</span>
                </div>

                <div className={styles['about-code']}>
                  <p>
                    <span className={styles['code-muted']}>01</span>{" "}
                    <span className={styles['code-purple']}>const</span>{" "}
                    <span className={styles['code-blue']}>developer</span> = {"{"}
                  </p>
                  <p>
                    <span className={styles['code-muted']}>02</span>{" "}
                    &nbsp; role: <span className={styles['code-green']}>"Full Stack"</span>,
                  </p>
                  <p>
                    <span className={styles['code-muted']}>03</span>{" "}
                    &nbsp; frontend: <span className={styles['code-green']}>true</span>,
                  </p>
                  <p>
                    <span className={styles['code-muted']}>04</span>{" "}
                    &nbsp; backend: <span className={styles['code-green']}>true</span>,
                  </p>
                  <p>
                    <span className={styles['code-muted']}>05</span>{" "}
                    &nbsp; automation: <span className={styles['code-green']}>true</span>,
                  </p>
                  <p>
                    <span className={styles['code-muted']}>06</span>{" "}
                    &nbsp; mindset: <span className={styles['code-green']}>"Always learning"</span>
                  </p>
                  <p>
                    <span className={styles['code-muted']}>07</span> {"}"};
                  </p>
                </div>

                <div className={styles['about-terminal']}>
                  <span>➜</span> npm run build
                  <p>
                    <span>✓</span> Build completed successfully
                  </p>
                </div>
              </div>

              <div className={styles['about-visual-caption']}>
                <span />
                <div>
                  <p>SYSTEM STATUS</p>
                  <small>Building / Testing / Shipping</small>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['about-principles']}>
            <div>
              <span className={styles['principle-index']}>01</span>
              <p>Clean architecture</p>
            </div>
            <div>
              <span className={styles['principle-index']}>02</span>
              <p>Reliable systems</p>
            </div>
            <div>
              <span className={styles['principle-index']}>03</span>
              <p>Continuous delivery</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={styles['about-skills']} id="skills">
          <div className={styles['about-section-heading']}>
            <div>
              <p className={styles['about-section-label']}>
                <span>01</span> / TECHNICAL EXPERTISE
              </p>
              <h2>
                The <span>toolkit.</span>
              </h2>
            </div>

            <p className={styles['about-section-description']}>
              The technologies and engineering practices
              involved in delivering software end to end.
            </p>
          </div>

          <div className={styles['about-skill-grid']}>
            {skillGroups.map((group) => (
              <article className={styles['about-skill-card']} key={group.number}>
                <div className={styles['about-skill-card-top']}>
                  <span className={styles['about-skill-number']}>{group.number}</span>
                  <span className={styles['about-skill-arrow']}>↗</span>
                </div>

                <h3>{group.title}</h3>
                <p className={styles['about-skill-description']}>
                  {group.description}
                </p>

                <div className={styles['about-skill-tags']}>
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className={styles['about-workflow']}>
          <div className={styles['about-section-heading']}>
            <div>
              <p className={styles['about-section-label']}>
                <span>02</span> / ENGINEERING WORKFLOW
              </p>
              <h2>
                From commit to <span>production.</span>
              </h2>
            </div>
          </div>

          <div className={styles['workflow-grid']}>
            {workflow.map((step) => (
              <article className={styles['workflow-step']} key={step.number}>
                <div className={styles['workflow-step-top']}>
                  <span>{step.number}</span>
                  <span className={styles['workflow-arrow']}>↗</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.pipeline}>
            <span className={styles['pipeline-label']}>DELIVERY PIPELINE</span>
            <div className={styles['pipeline-flow']}>
              <span>CODE</span>
              <i>→</i>
              <span>BUILD</span>
              <i>→</i>
              <span>TEST</span>
              <i>→</i>
              <span>DEPLOY</span>
              <i>→</i>
              <span className={styles['pipeline-production']}>PRODUCTION</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles['about-cta']}>
          <div>
            <p className={styles['about-section-label']}>
              <span>03</span> / WHAT'S NEXT?
            </p>

            <h2>
              Have an idea?
              <br />
              Let's <span>build it.</span>
            </h2>

            <p>
              Interested in building something useful, solving a
              challenging problem, or collaborating on a new project?
            </p>
          </div>

          <Link to="/contact" className={styles['about-primary-btn']}>
            Start a conversation <span>↗</span>
          </Link>
        </section>

        <footer className={styles['about-footer']}>
          <p>Thoughtful engineering. Built with intention.</p>
          <div />
          <Link to="/contact">
            Let's work together <span>→</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}
