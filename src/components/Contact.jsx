import { useRef } from 'react';
import useInView from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.2 });

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">Get in Touch</span>
          <h2 className="section__title">Let's Work Together</h2>
          <p className="section__subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className={`contact__content ${isVisible ? 'contact__content--visible' : ''}`}>
          {/* Contact Info */}
          <div className="contact__info">
            <div className="contact__info-card glass-card">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:soufianebenhayda3@gmail.com">soufianebenhayda3@gmail.com</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+212690649990">+212 6 90 64 99 90</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Tamansourt, Marrakech, Morocco</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/SOUFIANEBENHAYDA" target="_blank" rel="noopener noreferrer">
                    github.com/SOUFIANEBENHAYDA
                  </a>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="contact__cta glass-card">
              <h3>Ready to start a project?</h3>
              <p>Send me an email and let's turn your idea into reality.</p>
              <a
                href="mailto:soufianebenhayda3@gmail.com?subject=Project%20Inquiry"
                className="btn btn--primary btn--lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send a Message
              </a>
            </div>
          </div>

          {/* Contact Form (visual + mailto-based) */}
          <div className="contact__form-wrapper glass-card">
            <form
              className="contact__form"
              action="mailto:soufianebenhayda3@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <div className="contact__form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input type="text" id="contact-name" name="name" placeholder="John Doe" required />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input type="email" id="contact-email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input type="text" id="contact-subject" name="subject" placeholder="Project Inquiry" required />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--lg contact__form-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
