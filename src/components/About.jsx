import React from "react";

function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="divider mx-auto" />
        </div>
        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <div className="about-text-card mb-4">
              <p className="about-p mb-3">
                I’m a passionate Java Full Stack Developer with hands-on experience in building scalable applications using Spring Boot, Django, and modern web technologies. I have trained 250+ students in Java Full Stack development, helping them understand core programming concepts, backend development, and real-world project implementation.
              </p>
              <p className="about-p mb-3">
                Along with training, I have practical experience working as a developer, where I contributed to building backend systems, developing REST APIs, and working on full-stack projects. My experience also includes working with Linux environments and Docker, giving me a strong understanding of system-level operations and containerization.
              </p>
              <p className="about-p">
                I enjoy solving complex problems and continuously improving my technical skills. I am highly motivated to work on impactful projects and grow in areas like backend development, cloud technologies, and scalable system design.
              </p>
            </div>
            <div className="row g-3">
              {[
                { value: "5+", label: "Projects Completed" },
                { value: "1+ Year", label: "Java Developer" },
                { value: "20+", label: "Technologies" },
                { value: "250+", label: "Students Trained in java" }
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
          <div className="col-lg-5">
            <div className="exp-card">
              <div className="exp-icon">💻</div>
              <div className="exp-company">RS Softtecs Solutions Pvt. Ltd.</div>
              <div className="exp-role">Associate Java Developer</div>
              <div className="exp-date">Jan 2025 – Present · 1.3 Year · On-site</div>
              <p className="exp-desc">
                Developed and maintained scalable backend applications using Java and Spring Boot. Built REST APIs and integrated frontend systems for seamless user experience. Trained 250+ students in Java Full Stack development, focusing on real-world project implementation and problem-solving skills. Worked on Linux environments and Docker for application deployment and containerization.
              </p>
              <div className="mt-3">
                {["Java", "Spring Boot", "REST API", "MySQL", "Linux", "Docker", "Git"].map((t) => (
                <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;