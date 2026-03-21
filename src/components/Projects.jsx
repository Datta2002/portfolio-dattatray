import React from "react";
import { PROJECTS_DATA } from "../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="divider mx-auto" />
          <p className="section-desc mx-auto" style={{ textAlign: "center" }}>
            A selection of projects showcasing my full-stack capabilities and problem-solving approach.
          </p> 
        </div>
        <div className="row g-4">
          {PROJECTS_DATA.map((p) => (
            <div key={p.title} className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-img-wrap" style={{ background: p.gradient }}>
                  <div className="project-img-placeholder">{p.emoji}</div>
                  <div className="project-img-overlay" />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div>
                    {p.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={p.github} className="project-btn project-btn-github">
                      🐙 GitHub
                    </a>
                    <a href={p.live} className="project-btn project-btn-live">
                      ↗ Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;