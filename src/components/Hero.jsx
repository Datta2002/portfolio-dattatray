import React from "react";
// Import your image here. Ensure the path is correct based on your folder structure
import profileImg from "../assets/images/profilemy.jpeg"; 

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 fade-in-up">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for Full-Time Roles
            </div>
            <h1 className="hero-name">
              Hi, I'm <br />
              <span className="highlight">Dattatray Dudhamogre</span>
            </h1>
            {/* Updated title to reflect your Trainer background */}
            <p className="hero-title">☕ Java Full Stack Developer & Technical Trainer</p>
            <p className="hero-desc">
              I build scalable, production-grade web applications with Spring Boot & React. 
              With experience in both development and professional training, I bridge the gap between complex architecture and clear, maintainable code.
            </p>
            <div className="hero-btns">
              <a href="https://drive.google.com/file/d/1La7WFcWfjsxq-K--FkA2LnpZnaRBMYHI/view?usp=sharing" download className="btn-orange" style={{ textDecoration: 'none' }}>
                ↓ Download Resume
              </a>
              <a href="#projects" className="btn-blue-outline" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior:"smooth" }); }}>
                View Projects →
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">5+</div>
                <div className="hero-stat-label">Projects Built</div>
              </div>
              <div className="hero-stat-divider" />
              <div>
                {/* Changed Internship to Experience/Students Taught */}
                <div className="hero-stat-value">1+</div>
                <div className="hero-stat-label">Years Exp.</div>
              </div>
              <div className="hero-stat-divider" />
              <div>
                <div className="hero-stat-value">20+</div>
                <div className="hero-stat-label">Technologies</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 hero-image-wrap fade-in" style={{ animationDelay: "0.3s" }}>
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <div className="hero-glow" />
              <div className="hero-avatar-ring">
                <div className="hero-avatar">
                  {/* Replaced emoji with your actual image */}
                  <img 
                    src={profileImg} 
                    alt="Dattatray Dudhamogre" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;