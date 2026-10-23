import React, { useState } from 'react';
import { ExternalLink, Briefcase, Laptop, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const personalItems = experienceData.personal || [];
  const internshipItems = experienceData.internships || [];
  const totalCount = personalItems.length + internshipItems.length;

  const renderTimelineItem = (item, idx) => (
    <div key={item.id || idx} className="timeline-item">
      <div className="timeline-date">{item.period}</div>

      <div className="experience-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
          <div>
            <h4>{item.role}</h4>
            <h6>{item.organization}</h6>
          </div>
          <span className={`exp-badge ${item.badgeClass || (item.type === 'internship' ? 'exp-badge-internship' : 'exp-badge-personal')}`}>
            {item.badge}
          </span>
        </div>

        <p>{item.description}</p>

        {item.projectName && (
          <div className="project-details">
            <div className="headline">Project : {item.projectName}</div>
            <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#94a3b8' }}>
              {item.projectDetails}
            </p>
          </div>
        )}

        <div className="technology-tags">
          {item.tags.map((tag, tIdx) => (
            <span key={tIdx}>{tag}</span>
          ))}
        </div>

        {item.link && (
          <div className="project-timeline-actions">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-accent"
              style={{ fontSize: '12.5px', padding: '6px 14px' }}
            >
              {item.link.includes('github') ? (
                <>
                  <GithubIcon size={14} /> View Code
                </>
              ) : (
                <>
                  <ExternalLink size={14} /> Live Demo
                </>
              )}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="portfolio-section alt-bg">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>CAREER &amp; WORK HISTORY</p>
          <h2>Experience in <span>Two Parts</span></h2>
        </div>

        {/* Tab Filters */}
        <div className="experience-tabs">
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Layers size={15} />
            <span>All Experience</span>
            <span className="exp-tab-count">{totalCount}</span>
          </button>

          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <Laptop size={15} />
            <span>Part 1: Personal Experience</span>
            <span className="exp-tab-count">{personalItems.length}</span>
          </button>

          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            <Briefcase size={15} />
            <span>Part 2: Internships</span>
            <span className="exp-tab-count">{internshipItems.length}</span>
          </button>
        </div>

        {/* Part 1: Personal Experience */}
        {(activeTab === 'all' || activeTab === 'personal') && (
          <div className="experience-group">
            <div className="experience-group-header">
              <div className="experience-group-header-left">
                <div className="experience-group-icon">
                  <Laptop size={22} />
                </div>
                <div className="experience-group-info">
                  <h3>Part 1 · Personal Experience &amp; Projects</h3>
                  <p>Independent full-stack &amp; responsive web engineering platforms</p>
                </div>
              </div>
              <span className="experience-part-tag personal">
                {personalItems.length} Projects
              </span>
            </div>

            <div className="timeline">
              {personalItems.map((item, idx) => renderTimelineItem(item, idx))}
            </div>
          </div>
        )}

        {/* Part 2: Internship Experience */}
        {(activeTab === 'all' || activeTab === 'internships') && (
          <div className="experience-group">
            <div className="experience-group-header">
              <div className="experience-group-header-left">
                <div className="experience-group-icon">
                  <Briefcase size={22} />
                </div>
                <div className="experience-group-info">
                  <h3>Part 2 · Internship Experience</h3>
                  <p>Industry internships across MERN SaaS development, full-stack Java/React, and web engineering</p>
                </div>
              </div>
              <span className="experience-part-tag internship">
                {internshipItems.length} Internships
              </span>
            </div>

            <div className="timeline">
              {internshipItems.map((item, idx) => renderTimelineItem(item, idx))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
