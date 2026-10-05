import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import styles from './Contact.module.scss';

export function ContactPage() {
  const [emailNotice, setEmailNotice] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailNotice('Your email app should open with the message ready. Add the recipient address before sending.');
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.intro}>
          <p className={styles.eyebrow}>// get in touch</p>
          <h1 className={styles.title}>Have a project in mind?</h1>
          <p className={styles.subtitle}>
            I’m always open to interesting ideas, thoughtful collaborations, and
            opportunities to build useful things. Send a note and let’s talk.
          </p>
        </section>

        <section className={styles.content}>
          <aside className={styles.infoPanel}>
            <p className={styles.panelEyebrow}>A good place to start</p>
            <h2>Tell me what you’re working on.</h2>
            <p className={styles.infoText}>
              Share a little about your project, what you need, and where you
              are in the process. I’ll take it from there.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.icon}><Mail size={18} /></span>
                <div>
                  <span className={styles.infoLabel}>Best way to reach me</span>
                  <span className={styles.infoValue}>Send a message using the form</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.icon}><MapPin size={18} /></span>
                <div>
                  <span className={styles.infoLabel}>Working from</span>
                  <span className={styles.infoValue}>Available for remote projects</span>
                </div>
              </div>
            </div>

            <a className={styles.projectsLink} href="#contact-form">
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </aside>

          <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeading}>
              <span className={styles.formStep}>01 / 01</span>
              <h2>Send a message</h2>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.field}>
                <span>Your name</span>
                <input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
              </label>
              <label className={styles.field}>
                <span>Email address</span>
                <input name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
              </label>
            </div>

            <label className={styles.field}>
              <span>What can I help with?</span>
              <textarea
                name="message"
                placeholder="A little about your project, timeline, or idea..."
                rows={6}
                required
              />
            </label>

            <p className={styles.formNote}>
              This preview prepares your message in your email app. You’ll need
              to add the recipient address before sending.
            </p>

            <button className={styles.submitButton} type="submit">
              Prepare email <Send size={16} />
            </button>
            {emailNotice && <p className={styles.notice} role="status">{emailNotice}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
