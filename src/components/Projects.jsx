import { useRef } from 'react';
import useInView from '../hooks/useInView';
import './Projects.css';

const featuredProjects = [
  {
    title: 'SITI Intranet RH',
    description:
      'Enterprise intranet platform developed during internship at SITI — Société Impériale des Thés et Infusions. Comprehensive HR management system with employee, department, and leave workflows.',
    tech: ['React.js', 'Laravel', 'MySQL', 'Docker'],
    features: [
      'Employee management',
      'Department tracking',
      'Leave request workflows',
      'Document management',
      'Certificate issuance',
      'Role-based access control',
    ],
    color: '#38bdf8',
  },
  {
    title: "Bricol'Connect",
    description:
      'Full-stack platform connecting clients with local handymen and service providers. Features multi-role authentication, service booking, and an administrative dashboard.',
    tech: ['React.js', 'Laravel', 'MySQL'],
    features: [
      'Multi-role authentication',
      'Service requests',
      'Booking system',
      'Admin dashboard',
      'Client/provider management',
    ],
    color: '#818cf8',
  },
  {
    title: 'Nora Chatbot',
    description:
      'AI-powered chatbot designed to provide users with fast and interactive assistance through a conversational interface. Built with modern web technologies and AI integration.',
    tech: ['AI', 'React', 'Python', 'PostgreSQL'],
    features: [
      'AI-powered responses',
      'Conversational interface',
      'Knowledge base integration',
      'Real-time messaging',
    ],
    color: '#34d399',
  },
];

const otherProjects = [
  {
    title: 'EduTrack — Mon Carnet de Cours',
    description:
      'Academic management application for faculty and students to manage course records, track grades, and access educational materials.',
    tech: ['PHP', 'MySQL'],
    icon: '📚',
  },
  {
    title: 'Pharmacy Management System',
    description:
      'Desktop application for pharmacy operations including inventory tracking, product categorization, and automated sales recording.',
    tech: ['Python', 'Tkinter'],
    icon: '💊',
  },
  {
    title: 'Simple Shell',
    description:
      'Custom UNIX command-line interpreter implementing system calls, process creation, execution, and memory management.',
    tech: ['C'],
    icon: '🖥️',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.1 });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">My Work</span>
          <h2 className="section__title">Featured Projects</h2>
          <p className="section__subtitle">
            A showcase of applications I've built with passion and attention to detail
          </p>
        </div>

        {/* Featured Projects */}
        <div className={`projects__featured ${isVisible ? 'projects__featured--visible' : ''}`}>
          {featuredProjects.map((project, idx) => (
            <div
              className="projects__card glass-card"
              key={project.title}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div
                className="projects__card-accent"
                style={{ background: project.color }}
              ></div>
              <div className="projects__card-content">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <div className="projects__card-tech">
                    {project.tech.map((t) => (
                      <span className="badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-features">
                  {project.features.map((f) => (
                    <div className="projects__feature" key={f}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="projects__more">
          <h3 className="projects__more-title">More Projects</h3>
          <div className={`projects__more-grid ${isVisible ? 'projects__more-grid--visible' : ''}`}>
            {otherProjects.map((project, idx) => (
              <div
                className="projects__mini-card glass-card"
                key={project.title}
                style={{ animationDelay: `${0.6 + idx * 0.15}s` }}
              >
                <span className="projects__mini-icon">{project.icon}</span>
                <h4 className="projects__mini-title">{project.title}</h4>
                <p className="projects__mini-description">{project.description}</p>
                <div className="projects__mini-tech">
                  {project.tech.map((t) => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
