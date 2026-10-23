import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Skills &amp; <span>Technologies</span></h2>
        </div>

        <div className="skills-wrapper">
          {skillsData.map((group, gIdx) => (
            <div key={gIdx}>
              <h3 className="skill-category">
                <span>{group.category}</span>
              </h3>

              <div className="skills-grid">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-card">
                    <span className="skill-emoji">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
