import { useRef } from 'react';
import useInView from '../hooks/useInView';
import './Education.css';

const educationData = [
  {
    degree: 'Specialized Technician Diploma (DTS)',
    school: 'OFPPT (ISGI)',
    program: 'Digital Development: Web Full Stack',
    highlight: 'GPA: 17.83 / 20 — Ranked Top of Class (Valedictorian)',
    icon: '🏆',
    color: '#fbbf24',
  },
  {
    degree: 'University Science Studies',
    school: 'Faculty of Sciences Semlalia — Marrakech',
    program: 'Foundational studies in hard sciences and mathematics',
    highlight: null,
    icon: '🔬',
    color: '#38bdf8',
  },
];

const certifications = [
  'Green Hackathon — HEEC Marrakech',
  'MongoDB Certification',
  'PHP Certification',
  'Laravel Certification',
  'GitLab CI/CD Certification',
  'Docker Certification',
  'Linux / Ubuntu Certification',
  'Git / GitHub Certification',
];

export default function Education() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.2 });

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">Education</span>
          <h2 className="section__title">Academic Background</h2>
          <p className="section__subtitle">
            Foundation of knowledge that shapes my development approach
          </p>
        </div>

        <div className={`education__content ${isVisible ? 'education__content--visible' : ''}`}>
          {/* Timeline */}
          <div className="education__timeline">
            {educationData.map((item, idx) => (
              <div
                className="education__item glass-card"
                key={item.degree}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div
                  className="education__item-icon"
                  style={{ background: `${item.color}20`, borderColor: `${item.color}40` }}
                >
                  <span>{item.icon}</span>
                </div>
                <div className="education__item-content">
                  <h3 className="education__item-degree">{item.degree}</h3>
                  <p className="education__item-school">{item.school}</p>
                  <p className="education__item-program">{item.program}</p>
                  {item.highlight && (
                    <div className="education__item-highlight">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                      <span>{item.highlight}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="education__certs">
            <h3 className="education__certs-title">
              🏆 Certifications & Activities
            </h3>
            <div className="education__certs-grid">
              {certifications.map((cert, idx) => (
                <div
                  className="education__cert glass-card"
                  key={cert}
                  style={{ animationDelay: `${0.4 + idx * 0.08}s` }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
