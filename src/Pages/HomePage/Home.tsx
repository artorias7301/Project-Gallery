import { NavLink } from 'react-router';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { TopProjects } from './TopProjects';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import styles from './Home.module.scss';
import HeroImage from '../../assets/images/Hero.jpeg';

export function HomePage() {
  return (
    <>
      <title>Projects Gallery</title>
      <Header />

      <main className={styles.pageShell}>
        <section className={styles.section}>
          <div className={styles.hero}>
            <p className={styles.state}><span></span>Available for hire</p>
            <h1 className={styles.title}>
              Building apps <span>people actually use.</span>
            </h1>
            <p className={styles.about}>
              Full-stack developer focused on React, TypeScript, and Python —
              crafting responsive interfaces and scalable digital products.
            </p>

            <div className={styles.CTA}>
              <NavLink to="/projects" className={styles.primaryAction}>
                View projects <ArrowRight size={16} />
              </NavLink>
              <a href="#" className={styles.secondaryAction}>
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className={styles.summaryRow}>
              <div>
                <strong>4+</strong>
                <span>Years building</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Live experiences</span>
              </div>
            </div>
          </div>

          <div className={styles.heroImageBox}>
            <div className={styles.floatingCardTop}>
              <span className={styles.dot} />
              <div>
                <small>Current focus</small>
                <strong>Product UI + Frontend</strong>
              </div>
            </div>

            <img src={HeroImage} alt="Project showcase" className={styles.heroImage} />

            <div className={styles.floatingCardBottom}>
              <span>Design</span>
              <span>Build</span>
              <span>Scale</span>
            </div>
          </div>
        </section>

        <section className={styles.projectSection}>
          <p className={styles.top}>// 01</p>
          <div className={styles.projetsPreview}>
            <h2>Projects</h2>
            <p>Latest update: 2026/06/13</p>
          </div>

          <div className={styles.projectsBox}>
            <TopProjects />
            <NavLink to="/projects" className={styles.SeeMore}>
              See more <ArrowUpRight size={18} />
            </NavLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}