import React, { useState } from "react";
import { PROJECTS_DATA } from "../data/projectsData";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Java & Backend", "Python & ML"];

  const filteredProjects = filter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

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

        {/* Interactive Filter Tabs */}
        <div className="filter-tabs fade-in">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((p) => (
            <div key={p.title} className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-img-wrap">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-img"
                    />
                  ) : (
                    <div className="project-img-placeholder">
                      <i className="fa-solid fa-laptop-code" style={{ fontSize: "2.5rem" }}></i>
                    </div>
                  )}
                  <div className="project-img-overlay" />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn project-btn-github"
                    >
                      <i className="fa-brands fa-github" style={{ marginRight: "4px" }}></i> GitHub
                    </a>
                    <a 
                      href={p.live} 
                      className="project-btn project-btn-live"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginRight: "4px" }}></i> Live Demo
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