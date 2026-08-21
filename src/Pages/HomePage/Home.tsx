import { Header } from "../../Components/Header/Header";
import { TopProjects } from "./TopProjects";
import { ArrowUpRight } from "lucide-react";
import styles from "./Home.module.scss"

export function HomePage() {
  return (
    <>
      <title>Projects Gallery</title>
      <Header />
      <div className={styles.section}>
        <div className={styles.hero}>
          <p className={styles.state}><span>.</span>AVAILABLE FOR HIRE</p>
          <h1 className={styles.title}>Building Apps People actually Use.<span>|</span></h1>
          <p className={styles.about}>
            Full-Stack developer in React, Python, TypeScript.
            fast, accessible, and build scale.
          </p>
          <div className={styles.CTA}>
            <button className={styles.projectsBtn}>Projects</button>
            <button className={styles.contactBtn}>Hire Me</button>
          </div>
          <div></div>
        </div>
        <div className={styles.heroImage}>
          <img src="../../../public/images/testImage.jpg" />
        </div>
      </div>

      <p className={styles.top}>// 01</p>
      <div className={styles.projetsPreview}>
        <h1>Projects:</h1>
        <p>Latest update: 2026/06/13</p>
      </div>


      {/* move to its own component */}
      <div className={styles.projectsBox}>
        <TopProjects />
        <button className={styles.SeeMore}>See More<ArrowUpRight /></button>
      </div>
    </>
  );
};