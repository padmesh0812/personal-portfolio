import React, { useState } from 'react';
import { Award, FileText, Calendar, Maximize2, ShieldCheck, CheckCircle2, Download, ExternalLink, IdCard, Building2, Briefcase } from 'lucide-react';
import { companyCredentials } from '../data/portfolioData';

export default function InternshipCredentials({ onOpenLightbox }) {
  const companies = companyCredentials || [];
  const [activeCompany, setActiveCompany] = useState(companies[0]?.companyId || 'developer-arena');

  const filteredCompanies = companies.filter(c => c.companyId === activeCompany);

  const renderDocumentCard = (doc) => (
    <div key={doc.id} className="credential-card">
      {/* Header */}
      <div className="credential-card-header">
        <div>
          <span className={`credential-badge ${doc.badgeClass || 'badge-cert'}`}>
            {doc.badge}
          </span>
          <h3 className="credential-title">{doc.title}</h3>
          <div className="credential-company">{doc.company}</div>
        </div>
      </div>

      {/* Description */}
      <p className="credential-desc">{doc.description}</p>

      {/* Document Preview Slot */}
      <div className="credential-preview-slot">
        {doc.image ? (
          <div
            className="credential-img-wrap"
            onClick={() => onOpenLightbox(doc)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenLightbox(doc);
              }
            }}
          >
            <img src={doc.image} alt={doc.title} loading="lazy" />
            <div className="cert-zoom-overlay">
              <Maximize2 size={16} /> Click to view full document
            </div>
          </div>
        ) : doc.pdfLink ? (
          <div className="credential-placeholder pdf-ready">
            <div className="placeholder-watermark">
              <FileText size={38} />
            </div>
            <div className="placeholder-badge">
              <CheckCircle2 size={13} /> Official PDF Document
            </div>
            <div className="placeholder-company">{doc.company}</div>
            <p className="placeholder-hint">
              Verified corporate PDF on file with seals &amp; signatures.
            </p>
            <div style={{ marginTop: '12px' }}>
              <a
                href={doc.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ fontSize: '12px', padding: '6px 14px', display: 'inline-flex' }}
              >
                <ExternalLink size={13} /> Open Official PDF
              </a>
            </div>
          </div>
        ) : (
          <div className="credential-placeholder">
            <div className="placeholder-watermark">
              {doc.type === 'lor' ? <FileText size={38} /> : <Award size={38} />}
            </div>
            <div className="placeholder-badge">
              <CheckCircle2 size={13} /> Document Slot Ready
            </div>
            <div className="placeholder-company">{doc.company}</div>
            <p className="placeholder-hint">
              Ready to attach your certificate file (JPG, PNG, or PDF).
            </p>
          </div>
        )}
      </div>

      {/* Footer Meta */}
      <div className="credential-footer">
        <div className="credential-meta">
          <Calendar size={13} style={{ display: 'inline', marginRight: '6px' }} />
          {doc.date}
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {doc.image && (
            <button
              type="button"
              className="btn-outline-accent"
              style={{ fontSize: '12px', padding: '5px 12px' }}
              onClick={() => onOpenLightbox(doc)}
            >
              <Maximize2 size={13} /> Inspect
            </button>
          )}

          {doc.pdfLink && (
            <a
              href={doc.pdfLink}
              download
              className="btn-outline-accent"
              style={{ fontSize: '12px', padding: '5px 12px' }}
              title="Download Official Document"
            >
              <Download size={13} /> PDF
            </a>
          )}

          {doc.verificationUrl && (
            <a
              href={doc.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-accent"
              style={{ fontSize: '12px', padding: '5px 12px' }}
              title="Verify Credential Online"
            >
              <ExternalLink size={13} /> Verify
            </a>
          )}

          {!doc.image && !doc.pdfLink && (
            <span style={{ fontSize: '11.5px', color: '#94a3b8', fontStyle: 'italic' }}>
              Awaiting File
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="internship-credentials" className="portfolio-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>COMPANY-WISE VERIFICATION VAULT</p>
          <h2>Internship <span>Documents &amp; Credentials</span></h2>
        </div>

        {/* Company Switcher Tabs */}
        <div className="experience-tabs">
          {companies.map((comp) => (
            <button
              key={comp.companyId}
              type="button"
              className={`exp-tab-btn ${activeCompany === comp.companyId ? 'active' : ''}`}
              onClick={() => setActiveCompany(comp.companyId)}
            >
              <Building2 size={15} />
              <span>{comp.companyName}</span>
              <span className="exp-tab-count">{comp.documents ? comp.documents.length : 0}</span>
            </button>
          ))}
        </div>

        {/* Corporate Vault Info Banner */}
        <div className="credentials-info-banner">
          <div className="credentials-banner-icon">
            <ShieldCheck size={24} />
          </div>
          <div className="credentials-banner-text">
            <h4>Verified Corporate Credentials Repository</h4>
            <p>
              Corporate credentials organized company-wise featuring employee identity cards, formal appointment/offer letters, and relieving letters from The Developers Arena and Mindmash Data Labs.
            </p>
          </div>
        </div>

        {/* Company Groups */}
        {filteredCompanies.map((comp, cIdx) => (
          <div key={comp.companyId} className="experience-group">
            {/* Company Group Header */}
            <div className="experience-group-header">
              <div className="experience-group-header-left">
                <div className="experience-group-icon">
                  {comp.companyId === 'developer-arena' ? (
                    <Briefcase size={22} />
                  ) : comp.companyId === 'mindmash-data-labs' ? (
                    <Building2 size={22} />
                  ) : (
                    <Award size={22} />
                  )}
                </div>
                <div className="experience-group-info">
                  <h3>{comp.companyName}</h3>
                  <p>{comp.role} • {comp.period} • ID: {comp.idNumber}</p>
                </div>
              </div>
              <span className={`experience-part-tag ${comp.companyId === 'mindmash-data-labs' ? 'internship' : 'personal'}`}>
                {comp.documents ? comp.documents.length : 0} Documents
              </span>
            </div>

            {/* Grid of Company Documents */}
            <div className="credentials-grid" style={{ marginBottom: cIdx < filteredCompanies.length - 1 ? '48px' : '0' }}>
              {comp.documents.map((doc) => renderDocumentCard(doc))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
