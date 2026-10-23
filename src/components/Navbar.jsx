import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'internship-credentials', label: 'Credentials' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <nav className="portfolio-navbar">
      <div className="navbar-container">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="navbar-brand">
          {personalInfo.firstName}'s <span>Portfolio</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="navbar-action">
          <a
            href={personalInfo.resumePath}
            download="Padmesh_Kumar_Singh_Resume.pdf"
            className="btn-accent"
          >
            <Download size={15} /> Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
