// import React from "react";
import { SKILLS_DATA } from "../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="divider mx-auto" />
          <p className="section-desc mx-auto text-center" style={{ textAlign: "center" }}>
            A curated toolkit built through real-world projects and continuous learning.
          </p>
        </div>
        <div className="row g-4">
          {SKILLS_DATA?.map((cat, i) => (
            <div key={cat.name} className="col-md-6 col-lg-4" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-cat-icon">{cat.icon}</div>
                  <div className="skill-cat-name">{cat.name}</div>
                </div>
                <div>
                  {cat.items?.map((item) => (
                    <span key={item} className="skill-badge">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;