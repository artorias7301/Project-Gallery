import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p className={styles.text}>© 2026 Artorias7301. All rights reserved.</p>
        <div className={styles.linkBox}>
          <a className={styles.link} href="">•GitHub</a>
          <a className={styles.link} href="">•LinkedIn</a>
          <a className={styles.link} href="">•Email</a>
        </div>
      </div>
    </footer>
  );
};