// import { NavLink } from 'react-router';
// import { Header } from '../../Components/Header/Header';
// import { Footer } from '../../Components/Footer/Footer';
// import { TopProjects } from './TopProjects';
// import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
// import styles from './Home.module.scss';
// import HeroImage from '../../assets/images/Hero.jpeg';

// export function HomePage() {
//   return (
//     <>
//       <title>Projects Gallery</title>
//       <Header />

//       <main className={styles.pageShell}>
//         <section className={styles.section}>
//           <div className={styles.hero}>
//             <p className={styles.state}><span></span>Available for hire</p>
//             <h1 className={styles.title}>
//               Building apps <span>people actually use.</span>
//             </h1>
//             <p className={styles.about}>
//               Full-stack developer focused on React, TypeScript, and Python —
//               crafting responsive interfaces and scalable digital products.
//             </p>

//             <div className={styles.CTA}>
//               <NavLink to="/projects" className={styles.primaryAction}>
//                 View projects <ArrowRight size={16} />
//               </NavLink>
//               <a href="#" className={styles.secondaryAction}>
//                 <Download size={16} /> Download CV
//               </a>
//             </div>

//             <div className={styles.summaryRow}>
//               <div>
//                 <strong>4+</strong>
//                 <span>Years building</span>
//               </div>
//               <div>
//                 <strong>12</strong>
//                 <span>Live experiences</span>
//               </div>
//             </div>
//           </div>

//           <div className={styles.heroImageBox}>
//             <div className={styles.floatingCardTop}>
//               <span className={styles.dot} />
//               <div>
//                 <small>Current focus</small>
//                 <strong>Product UI + Frontend</strong>
//               </div>
//             </div>

//             <img src={HeroImage} alt="Project showcase" className={styles.heroImage} />

//             <div className={styles.floatingCardBottom}>
//               <span>Design</span>
//               <span>Build</span>
//               <span>Scale</span>
//             </div>
//           </div>
//         </section>

//         <section className={styles.projectSection}>
//           <p className={styles.top}>// 01</p>
//           <div className={styles.projetsPreview}>
//             <h2>Projects</h2>
//             <p>Latest update: 2026/06/13</p>
//           </div>

//           <div className={styles.projectsBox}>
//             <TopProjects />
//             <NavLink to="/projects" className={styles.SeeMore}>
//               See more <ArrowUpRight size={18} />
//             </NavLink>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }


import styles from './Home.module.scss';

const skills = ["React.js", "JavaScript", "Node.js", "UI / UX"];

export function HomePage() {
  return (
    <main className={styles.site}>
      <div className={styles.portfolio}>
        <header className={styles.navbar}>
          <a className={styles.logo} href="#home" aria-label="Home">
            ΛM
          </a>

          <nav className={styles['nav-links']}>
            <a className={styles.active} href="#home">Home</a>
            <a href="/projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className={styles['theme-toggle']} aria-label="Dark theme">
            ☾
          </button>
        </header>

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
              <a className={styles['button-primary']} href="/projects">
                Explore my work <span>↗</span>
              </a>

              <a className={styles['button-secondary']} href="#contact">
                Get in touch <span>→</span>
              </a>
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
