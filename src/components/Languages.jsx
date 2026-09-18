import { useRef } from 'react';
import useInView from '../hooks/useInView';
import './Languages.css';

const languages = [
  { name: 'Arabic', flag: '🇲🇦', level: 'Native', percentage: 100 },
  { name: 'English', flag: '🇬🇧', level: 'Upper-Intermediate (B2)', percentage: 78 },
  { name: 'French', flag: '🇫🇷', level: 'Intermediate (B1)', percentage: 60 },
  { name: 'German', flag: '🇩🇪', level: 'Elementary (A2)', percentage: 35 },
];

export default function Languages() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.2 });

  return (
    <section className="section languages" id="languages" ref={ref}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">Languages</span>
          <h2 className="section__title">Languages I Speak</h2>
          <p className="section__subtitle">
            Communicating across cultures and communities
          </p>
        </div>

        <div className={`languages__grid ${isVisible ? 'languages__grid--visible' : ''}`}>
          {languages.map((lang, idx) => (
            <div
              className="languages__card glass-card"
              key={lang.name}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="languages__card-top">
                <span className="languages__flag">{lang.flag}</span>
                <h3 className="languages__name">{lang.name}</h3>
                <p className="languages__level">{lang.level}</p>
              </div>
              <div className="languages__ring-wrapper">
                <svg className="languages__ring" viewBox="0 0 100 100">
                  <circle
                    className="languages__ring-bg"
                    cx="50" cy="50" r="42"
                  />
                  <circle
                    className="languages__ring-fill"
                    cx="50" cy="50" r="42"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 42}`,
                      strokeDashoffset: isVisible
                        ? `${2 * Math.PI * 42 * (1 - lang.percentage / 100)}`
                        : `${2 * Math.PI * 42}`,
                      transitionDelay: `${idx * 0.15 + 0.3}s`,
                    }}
                  />
                </svg>
                <span className="languages__percentage">{lang.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
