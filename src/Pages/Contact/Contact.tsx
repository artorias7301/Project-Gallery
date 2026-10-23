// import { useState, type FormEvent } from 'react';
// import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
// import { Header } from '../../Components/Header/Header';
// import { Footer } from '../../Components/Footer/Footer';
// import styles from './Contact.module.scss';

// export function ContactPage() {
//   const [emailNotice, setEmailNotice] = useState('');

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const name = String(formData.get('name') ?? '');
//     const email = String(formData.get('email') ?? '');
//     const message = String(formData.get('message') ?? '');
//     const subject = `Portfolio message from ${name}`;
//     const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

//     window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     setEmailNotice('Your email app should open with the message ready. Add the recipient address before sending.');
//   }

//   return (
//     <>
//       <Header />
//       <main className={styles.page}>
//         <section className={styles.intro}>
//           <p className={styles.eyebrow}>// get in touch</p>
//           <h1 className={styles.title}>Have a project in mind?</h1>
//           <p className={styles.subtitle}>
//             I’m always open to interesting ideas, thoughtful collaborations, and
//             opportunities to build useful things. Send a note and let’s talk.
//           </p>
//         </section>

//         <section className={styles.content}>
//           <aside className={styles.infoPanel}>
//             <p className={styles.panelEyebrow}>A good place to start</p>
//             <h2>Tell me what you’re working on.</h2>
//             <p className={styles.infoText}>
//               Share a little about your project, what you need, and where you
//               are in the process. I’ll take it from there.
//             </p>

//             <div className={styles.infoList}>
//               <div className={styles.infoItem}>
//                 <span className={styles.icon}><Mail size={18} /></span>
//                 <div>
//                   <span className={styles.infoLabel}>Best way to reach me</span>
//                   <span className={styles.infoValue}>Send a message using the form</span>
//                 </div>
//               </div>
//               <div className={styles.infoItem}>
//                 <span className={styles.icon}><MapPin size={18} /></span>
//                 <div>
//                   <span className={styles.infoLabel}>Working from</span>
//                   <span className={styles.infoValue}>Available for remote projects</span>
//                 </div>
//               </div>
//             </div>

//             <a className={styles.projectsLink} href="#contact-form">
//               Start a conversation <ArrowUpRight size={17} />
//             </a>
//           </aside>

//           <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
//             <div className={styles.formHeading}>
//               <span className={styles.formStep}>01 / 01</span>
//               <h2>Send a message</h2>
//             </div>

//             <div className={styles.fieldRow}>
//               <label className={styles.field}>
//                 <span>Your name</span>
//                 <input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
//               </label>
//               <label className={styles.field}>
//                 <span>Email address</span>
//                 <input name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
//               </label>
//             </div>

//             <label className={styles.field}>
//               <span>What can I help with?</span>
//               <textarea
//                 name="message"
//                 placeholder="A little about your project, timeline, or idea..."
//                 rows={6}
//                 required
//               />
//             </label>

//             <p className={styles.formNote}>
//               This preview prepares your message in your email app. You’ll need
//               to add the recipient address before sending.
//             </p>

//             <button className={styles.submitButton} type="submit">
//               Prepare email <Send size={16} />
//             </button>
//             {emailNotice && <p className={styles.notice} role="status">{emailNotice}</p>}
//           </form>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }



import { useState, type ChangeEvent, type FormEvent } from "react";
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
        <header className={styles['contact-navbar']}>
          <a className={styles['contact-logo']} href="/">ΛM</a>

          <nav className={styles['contact-nav-links']}>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a className={styles.active} href="/contact">Contact</a>
          </nav>

          <span className={styles['contact-theme-icon']}>☾</span>
        </header>

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
