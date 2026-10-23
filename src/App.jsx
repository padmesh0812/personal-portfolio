import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Education,
  InternshipCredentials,
  Certifications,
  Contact,
  Footer,
  LightboxModal,
  Toast
} from './components';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCert, setSelectedCert] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'internship-credentials', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secElem = document.getElementById(sections[i]);
        if (secElem && scrollPos >= secElem.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Copy to clipboard helper
  const handleCopy = (text, customMessage = 'Copied to clipboard!') => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast(customMessage))
        .catch(() => showToast(`Copied: ${text}`));
    } else {
      showToast(`Copied: ${text}`);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-wrapper">
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <InternshipCredentials onOpenLightbox={(doc) => setSelectedCert(doc)} />
        <Education />
        <Certifications onOpenLightbox={(cert) => setSelectedCert(cert)} />
        <Contact onCopy={handleCopy} />
      </main>

      <Footer />

      <LightboxModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
