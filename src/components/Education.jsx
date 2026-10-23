import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const ICONS = [GraduationCap, Award, BookOpen];

export default function Education() {
  return (
    <section id="education" className="portfolio-section alt-bg">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My <span>Academic Journey</span></h2>
        </div>

        <div className="education-grid">
          {educationData.map((edu, idx) => {
            const IconComp = ICONS[idx % ICONS.length];
            return (
              <div key={idx} className="education-card">
                <div className="education-icon">
                  <IconComp size={24} />
                </div>
                <div className="education-body">
                  <h5>{edu.degree}</h5>
                  <h6>{edu.institution}</h6>
                  {edu.university && (
                    <div style={{ fontSize: '12.5px', color: '#94a3b8', margin: '-4px 0 10px', fontWeight: '500' }}>
                      {edu.university}
                    </div>
                  )}
                  <p>{edu.description}</p>
                  <div className="score">
                    {edu.score && edu.score.includes('%') 
                      ? `${edu.status} • Score: ${edu.score}` 
                      : `${edu.period} • ${edu.status}`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
