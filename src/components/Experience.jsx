import React from "react";

const EXPERIENCE = [
  {
    company: "RS Softtecs Solutions Pvt. Ltd.",
    role: "Associate Software Developer & Trainer",
    date: "Jan 2025 – Present",
    location: "Pune, India",
    description: [
      "Design and build RESTful APIs and secure microservices using Spring Boot, Spring Security, and JPA/Hibernate.",
      "Deliver responsive interfaces in React/Angular and link them with Spring REST endpoints.",
      "Manage Linux deployments, containerize applications with Docker, and organize Git version control.",
      "Instructed 250+ trainees on OOP, data structures, and database principles."
    ],
    tags: ["Java", "Spring Boot", "React", "Docker", "MySQL"]
  },
  {
    company: "Self-Learning & Projects",
    role: "Full Stack Developer",
    date: "2024 – 2025",
    location: "Remote",
    description: [
      "Built multiple personal projects including Expense Tracker and Advanced Java demos.",
      "Explored JDBC, Servlets, JSP, and modern Spring Boot applications.",
      "Practiced clean code, Git workflows, and deployment practices."
    ],
    tags: ["Java", "Spring", "File Handling", "Git"]
  }
];

function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Journey</span>
          <h2 className="section-title">Experience</h2>
          <div className="divider mx-auto" />
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="mb-5 position-relative" style={{ paddingLeft: "2rem", borderLeft: "2px solid var(--color-blue)" }}>
                <div style={{ position: "absolute", left: "-9px", top: "8px", width: "16px", height: "16px", borderRadius: "50%", background: "var(--color-blue)" }} />
                <div className="exp-card">
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-date">{exp.date} · {exp.location}</div>
                  <ul className="mt-3" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", paddingLeft: "1.2rem" }}>
                    {exp.description.map((d, i) => (
                      <li key={i} style={{ marginBottom: "0.4rem" }}>{d}</li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    {exp.tags.map((t) => (
                      <span key={t} className="exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;