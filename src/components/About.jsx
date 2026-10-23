import React from 'react';
import { CheckCircle2, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="portfolio-section alt-bg">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Let me introduce <span>myself</span></h2>
        </div>

        <div className="about-grid">
          {/* Left Text & Highlights Card */}
          <div className="about-left-card">
            <div>
              <p className="about-text">
                {personalInfo.bio}
              </p>
              <p className="about-text" style={{ marginTop: '16px' }}>
                Pursuing Computer Science &amp; Engineering (2022–2026) at IEC College of Engineering and Technology (AKTU Lucknow) along with industry internship experience, I focus on building complete end-to-end web applications—engineering robust Node.js and Express backends, structuring MongoDB schemas, and crafting seamless React user interfaces.
              </p>
            </div>

            {/* 4 Requested Highlights */}
            <ul className="about-list">
              {personalInfo.highlights.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Info Card */}
          <div className="about-card">
            <div className="info-item">
              <User className="info-icon" size={20} />
              <div>
                <small>Name</small>
                <strong>{personalInfo.name}</strong>
              </div>
            </div>

            <div className="info-item">
              <Award className="info-icon" size={20} />
              <div>
                <small>Experience</small>
                <strong style={{ color: 'var(--accent)' }}>{personalInfo.experienceYears}</strong>
              </div>
            </div>

            <div className="info-item">
              <GraduationCap className="info-icon" size={20} />
              <div>
                <small>Education</small>
                <strong>{personalInfo.education?.degree || personalInfo.degree || 'B.Tech in CSE (Passout Graduate)'}</strong>
              </div>
            </div>

            <div className="info-item">
              <MapPin className="info-icon" size={20} />
              <div>
                <small>Location</small>
                <strong>{personalInfo.location}</strong>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" size={20} />
              <div>
                <small>Email</small>
                <strong>{personalInfo.email}</strong>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" size={20} />
              <div>
                <small>Phone</small>
                <strong>{personalInfo.phone}</strong>
              </div>
            </div>

            <div className="info-item">
              <Briefcase className="info-icon" size={20} />
              <div>
                <small>Status</small>
                <strong>{personalInfo.freelanceStatus}</strong>
              </div>
            </div>

            <a
              href={personalInfo.resumePath}
              download="Padmesh_Kumar_Singh_Resume.pdf"
              className="btn-accent"
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
