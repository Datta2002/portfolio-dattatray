import React from "react";
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

        {/* Detailed Skills Categories with Single Progress Bar and Badges */}
        <div className="row g-4 fade-in">
          {SKILLS_DATA?.map((cat, i) => (
            <div key={cat.name} className="col-md-6 col-lg-4" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-card">
                <div className="skill-card-header mb-3">
                  <div className="skill-cat-icon">
                    <i className={cat.icon} style={{ color: "var(--color-blue)" }}></i>
                  </div>
                  <div className="skill-cat-name">{cat.name}</div>
                </div>

                {/* Overall category proficiency bar */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1" style={{ fontSize: "0.82rem" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Overall Mastery</span>
                    <span style={{ color: "var(--color-blue)", fontWeight: 600 }}>{cat.level}%</span>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "10px", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${cat.level}%`,
                        height: "100%",
                        background: "linear-gradient(90deg, var(--color-blue), var(--color-orange))",
                        borderRadius: "10px"
                      }}
                    />
                  </div>
                </div>

                {/* Flat list of technology tags */}
                <div className="d-flex flex-wrap gap-2">
                  {cat.items?.map((item) => (
                    <span key={item} className="skill-badge" style={{ margin: 0 }}>{item}</span>
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