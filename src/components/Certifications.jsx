import React from 'react';
import { Calendar, Maximize2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications({ onOpenLightbox }) {
  return (
    <section id="certifications" className="portfolio-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>CERTIFICATIONS</p>
          <h2>Verified <span>Credentials &amp; Courses</span></h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => onOpenLightbox(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenLightbox(cert);
                }
              }}
            >
              <div className="cert-img-wrap">
                <img src={cert.image} alt={cert.name} loading="lazy" />
                <div className="cert-zoom-overlay">
                  <Maximize2 size={16} /> Click to view full certificate
                </div>
              </div>

              <div className="cert-info">
                <span className="cert-badge">{cert.platform}</span>
                <h3 className="cert-title">{cert.name}</h3>
                <div className="cert-meta">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '5px' }} />
                  {cert.date} • {cert.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
