import React from 'react';
import { Mail, Phone, ArrowRight, Download, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column Content */}
        <div className="hero-content">
          <div className="hero-small">
            <span>👋</span> Hello, I'm
          </div>
          <h1 className="hero-title">{personalInfo.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <h2 className="hero-role" style={{ marginBottom: 0 }}>
              <span>{personalInfo.roleTitle}</span> — {personalInfo.roleSubtitle}
            </h2>
            <span className="exp-badge">
              <Sparkles size={13} /> {personalInfo.experienceYears}
            </span>
          </div>

          <p className="hero-description">
            {personalInfo.shortPitch}
          </p>

          <div className="hero-buttons">
            <button
              className="btn-accent"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me <ArrowRight size={16} />
            </button>

            <button
              className="btn-outline-accent"
              onClick={() => scrollToSection('experience')}
            >
              View Projects
            </button>

            <a
              className="btn-outline-accent"
              href={personalInfo.resumePath}
              download="Padmesh_Kumar_Singh_Resume.pdf"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub Profile"
            >
              <GithubIcon size={21} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={21} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link"
              title="Email Padmesh"
            >
              <Mail size={21} />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="social-link"
              title="Call Padmesh"
            >
              <Phone size={21} />
            </a>
          </div>
        </div>

        {/* Right Column Profile Image with Glow and Floating Badges */}
        <div className="profile-container">
          <div className="profile-glow"></div>
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="profile-image"
          />
          <div className="floating-icon icon-one" title="Node.js, Express & MongoDB">
            🚀
          </div>
          <div className="floating-icon icon-two" title="React & Modern JavaScript">
            ⚛️
          </div>
        </div>
      </div>
    </section>
  );
}
