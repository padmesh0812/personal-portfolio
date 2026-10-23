import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div>
          © {currentYear} <strong>{personalInfo.name}</strong>. All rights reserved.
        </div>

        <div>
          Built with <span style={{ color: '#ef4444' }}>♥</span> by{' '}
          <a href="#home">{personalInfo.firstName}</a>
        </div>

        <button className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
