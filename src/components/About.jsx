import { useRef } from 'react';
import useInView from '../hooks/useInView';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.2 });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">About Me</span>
          <h2 className="section__title">Get to Know Me</h2>
          <p className="section__subtitle">
            A passionate developer driven by curiosity and craftsmanship
          </p>
        </div>

        <div className={`about__content ${isVisible ? 'about__content--visible' : ''}`}>
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <div className="about__image-glow"></div>
              <img
                src="/portrait.png"
                alt="Soufiane Benhayda"
                className="about__image"
              />
              <div className="about__image-badge glass-card">
                <span className="about__image-badge-number">17.83</span>
                <span className="about__image-badge-label">GPA / 20</span>
              </div>
            </div>
          </div>

          <div className="about__text-col">
            <h3 className="about__heading">
              I'm <span className="about__heading-accent">Soufiane Benhayda</span>,
              a Full Stack Web Developer based in Marrakech, Morocco.
            </h3>
            <p className="about__paragraph">
              I'm a passionate Full Stack Web Developer focused on building modern, scalable,
              and user-friendly web applications. I work primarily with
              <strong> React.js, Laravel, PHP, MySQL, and MongoDB</strong>, with additional
              experience in Docker, GitLab CI/CD, Linux, and Git/GitHub.
            </p>
            <p className="about__paragraph">
              I enjoy solving complex problems, learning new technologies, and turning ideas
              into practical digital solutions. I graduated top of my class with a GPA of
              <strong> 17.83/20</strong> in Digital Development: Web Full Stack.
            </p>

            <div className="about__highlights">
              <div className="about__highlight glass-card">
                <div className="about__highlight-icon">🎓</div>
                <div>
                  <h4>Valedictorian</h4>
                  <p>Top of Class — OFPPT ISGI</p>
                </div>
              </div>
              <div className="about__highlight glass-card">
                <div className="about__highlight-icon">💼</div>
                <div>
                  <h4>Full Stack Developer</h4>
                  <p>React · Laravel · Docker</p>
                </div>
              </div>
              <div className="about__highlight glass-card">
                <div className="about__highlight-icon">🌍</div>
                <div>
                  <h4>Multilingual</h4>
                  <p>Arabic · English · French · German</p>
                </div>
              </div>
            </div>

            <div className="about__actions">
              <a href="#contact" className="btn btn--primary">
                Let's Work Together
              </a>
              <a href="#projects" className="btn btn--outline">
                See My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
