import { useRef } from 'react';
import useInView from '../hooks/useInView';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 88 },
      { name: 'Python', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'DevOps / Tools',
    icon: '🚀',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'GitLab CI/CD', level: 78 },
      { name: 'Linux / Ubuntu', level: 82 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '🧠',
    skills: [
      { name: 'Problem Solving', level: 92 },
      { name: 'Creativity & Innovation', level: 88 },
      { name: 'Adaptability', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Communication', level: 85 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.15 });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">My Skills</span>
          <h2 className="section__title">Technologies & Expertise</h2>
          <p className="section__subtitle">
            A blend of technical proficiency and creative problem-solving
          </p>
        </div>

        <div className={`skills__grid ${isVisible ? 'skills__grid--visible' : ''}`}>
          {skillCategories.map((category, catIdx) => (
            <div
              className="skills__card glass-card"
              key={category.title}
              style={{ animationDelay: `${catIdx * 0.15}s` }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{category.icon}</span>
                <h3 className="skills__card-title">{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div className="skills__item" key={skill.name}>
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIdx * 0.15 + 0.3}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
