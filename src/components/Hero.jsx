import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) el.classList.add('hero--visible');
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__greeting animate-fade-in-up">
            <span className="hero__wave">👋</span> Hello, I'm
          </div>
          <h1 className="hero__name animate-fade-in-up delay-1">
            Soufiane<br />
            <span className="hero__name-accent">Benhayda</span>
          </h1>
          <p className="hero__title animate-fade-in-up delay-2">
            Full Stack Web Developer
          </p>
          <p className="hero__description animate-fade-in-up delay-3">
            I build modern, scalable, and user-friendly web applications
            using <strong>React.js</strong>, <strong>Laravel</strong>, and cutting-edge technologies.
            Passionate about turning ideas into elegant digital solutions.
          </p>
          <div className="hero__actions animate-fade-in-up delay-4">
            <a href="#projects" className="btn btn--primary btn--lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline btn--lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Me
            </a>
          </div>
          <div className="hero__stats animate-fade-in-up delay-5">
            <div className="hero__stat">
              <span className="hero__stat-number">6+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">Top</span>
              <span className="hero__stat-label">Of Class</span>
            </div>
          </div>
        </div>

        <div className="hero__image-wrapper animate-fade-in delay-2">
          <div className="hero__image-glow"></div>
          <div className="hero__image-ring"></div>
          <img
            src="/portrait.png"
            alt="Soufiane Benhayda — Full Stack Web Developer"
            className="hero__image"
          />
        </div>
      </div>

      <div className="hero__scroll-indicator animate-fade-in delay-6">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
