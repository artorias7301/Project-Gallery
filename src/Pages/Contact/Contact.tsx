import { useState, type ChangeEvent, type FormEvent } from "react";
import { PortfolioHeader } from '../../Components/Header/PortfolioHeader';
import styles from './Contact.module.scss';

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Project inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const recipient = "hello@example.com";
    const mailSubject = encodeURIComponent(form.subject);
    const mailBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

    setSubmitted(true);
  }

  return (
    <main className={styles['contact-site']}>
      <div className={styles['contact-portfolio']}>
        <PortfolioHeader
          activePage="contact"
          logoClassName={styles['contact-logo']}
          classes={{
            root: styles['contact-navbar'],
            nav: styles['contact-nav-links'],
            active: styles.active,
            theme: styles['contact-theme-icon'],
          }}
        />

        <section className={styles['contact-heading']}>
          <p className={styles['contact-counter']}>
            <span>04</span> / 04
          </p>

          <div className={styles['contact-title-row']}>
            <div>
              <h1>
                Let's <span>talk.</span>
              </h1>

              <p className={styles['contact-intro']}>
                Have a project in mind or just want to say hello?
                <br />
                I'd love to hear from you.
              </p>
            </div>

            <div className={styles['contact-status']}>
              <span className={styles['contact-status-dot']} />
              AVAILABLE FOR PROJECTS
            </div>
          </div>
        </section>

        <section className={styles['contact-content']}>
          <aside className={styles['contact-details']}>
            <p className={styles['contact-section-label']}>
              <span>01</span> / GET IN TOUCH
            </p>

            <h2>
              Let's create
              <br />
              something <span>meaningful.</span>
            </h2>

            <p className={styles['contact-description']}>
              Whether it's a new idea, a collaboration, or an
              interesting challenge, my inbox is always open.
            </p>

            <div className={styles['contact-method']}>
              <span className={styles['contact-method-number']}>01</span>
              <div>
                <span className={styles['contact-method-label']}>EMAIL ME AT</span>
                <a href="mailto:hello@example.com">
                  hello@example.com <span>↗</span>
                </a>
              </div>
            </div>

            <div className={styles['contact-method']}>
              <span className={styles['contact-method-number']}>02</span>
              <div>
                <span className={styles['contact-method-label']}>FOLLOW MY WORK</span>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
              </div>
            </div>

            <div className={styles['contact-method']}>
              <span className={styles['contact-method-number']}>03</span>
              <div>
                <span className={styles['contact-method-label']}>CONNECT WITH ME</span>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span>↗</span>
                </a>
              </div>
            </div>

            <div className={styles['contact-note']}>
              <div className={styles['contact-note-icon']}>✳</div>
              <p>
                Usually respond within
                <br />
                <span>24–48 hours.</span>
              </p>
            </div>
          </aside>

          <div className={styles['contact-form-panel']}>
            <div className={styles['form-heading']}>
              <div>
                <p className={styles['contact-section-label']}>
                  <span>02</span> / YOUR MESSAGE
                </p>
                <h2>Send an inquiry</h2>
              </div>

              <span className={styles['form-index']}>FORM_001</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles['form-row']}>
                <label>
                  <span>YOUR NAME</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <span>EMAIL ADDRESS</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                <span>WHAT'S THIS ABOUT?</span>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>Project inquiry</option>
                  <option>Freelance opportunity</option>
                  <option>Collaboration</option>
                  <option>Just saying hello</option>
                </select>
              </label>

              <label>
                <span>YOUR MESSAGE</span>
                <textarea
                  name="message"
                  placeholder="Tell me a little about your idea..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className={styles['form-bottom']}>
                <p>
                  <span>*</span> All fields are required.
                </p>

                <button type="submit">
                  Send message <span>↗</span>
                </button>
              </div>

              {submitted && (
                <p className={styles['form-feedback']} role="status">
                  Your email application should open with your message.
                  Send the email there to complete your inquiry.
                </p>
              )}
            </form>
          </div>
        </section>

        <footer className={styles['contact-footer']}>
          <p>Available for meaningful collaborations.</p>
          <div />
          <a href="mailto:hello@example.com">
            Let's work together <span>→</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
