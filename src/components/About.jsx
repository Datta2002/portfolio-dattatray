import React from "react";

function About() {
  // Dynamically calculate experience based on Jan 15, 2025 joining date
  const calculateExperience = () => {
    const startDate = new Date("2025-01-15");
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return (diffDays / 365.25).toFixed(1);
  };

  const expYears = calculateExperience();

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="divider mx-auto" />
        </div>
        
        {/* Main Info Row (Equal Heights) */}
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="about-text-card h-100">
              <h3 style={{ color: "var(--color-blue)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
                Developer & Educator
              </h3>
              <p className="about-p mb-3">
                I am a passionate <strong>Java Full Stack Developer & Technical Trainer</strong> with experience building scalable backend architectures and guiding aspiring engineers. Currently based in Pune, India, I specialize in designing microservices using <strong>Spring Boot</strong>, developing custom database models with <strong>MySQL / Hibernate</strong>, and setting up modern development pipelines.
              </p>
              <p className="about-p mb-3">
                Driven by a deep love for teaching and software craftsmanship, I have successfully trained and mentored over <strong>250+ students</strong> in Java Full Stack development. I design hands-on curricula covering database modeling, RESTful APIs, and integration with modern frontend ecosystems like React and Angular.
              </p>
              <p className="about-p">
                I believe that clean, readable code and robust system architecture go hand-in-hand. Whether coding backend REST APIs or conducting training bootcamps, my goal is to deliver excellence and bridge the gap between technical complexity and real-world implementation.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="exp-card">
              <div className="exp-company">RS Softtecs Solutions Pvt. Ltd.</div>
              <div className="exp-role">Associate Software Developer & Trainer</div>
              <div className="exp-date">Jan 2025 – Present · {expYears} Years · On-site</div>
              
              <div className="mt-3">
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Key Responsibilities:
                </p>
                <ul style={{ color: "var(--text-secondary)", fontSize: "0.85rem", paddingLeft: "1.2rem", margin: "0.5rem 0", lineHeight: 1.6 }}>
                  <li style={{ marginBottom: "0.4rem" }}>
                    <strong>Java Backend:</strong> Design and build RESTful APIs and secure microservices using Spring Boot, Spring Security, and JPA/Hibernate.
                  </li>
                  <li style={{ marginBottom: "0.4rem" }}>
                    <strong>Full-Stack Integration:</strong> Deliver responsive interfaces in React/Angular and link them with Spring REST endpoints.
                  </li>
                  <li style={{ marginBottom: "0.4rem" }}>
                    <strong>DevOps & Systems:</strong> Manage Linux deployments, containerize applications with Docker, and organize Git version control.
                  </li>
                  <li style={{ marginBottom: "0.4rem" }}>
                    <strong>Technical Training:</strong> Instructed 250+ trainees on object-oriented programming, data structures, and database principles.
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                {["Java", "Spring Boot", "REST API", "MySQL", "Linux", "Docker", "Git"].map((t) => (
                <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats metrics row below the cards */}
        <div className="row g-3 mt-4">
          {[
            { value: "5+", label: "Projects Built" },
            { value: `${expYears} Years`, label: "Experience" },
            { value: "20+", label: "Technologies" },
            { value: "250+", label: "Students Trained" }
          ].map((s) => (
            <div key={s.label} className="col-6 col-sm-3">
              <div className="stat-pill">
                <div className="stat-pill-value">{s.value}</div>
                <div className="stat-pill-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default About;