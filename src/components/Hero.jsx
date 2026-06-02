import React from "react";
import { TypeAnimation } from "react-type-animation";
import frontImg from "../assets/images/imageprofile.png";

function Hero() {
  return (
<section id="home" className="hero-section">
  <div className="hero-bg"></div>
  <div className="hero-grid-lines"></div>

  <div className="container hero-container">
    <div className="row align-items-center">

      {/* LEFT SIDE */}
      <div className="col-lg-6 hero-left fade-in-up">

        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Open to Freelance and Part-Time Work
        </div>

        <h1 className="hero-name">
          Hi, I'm <br />
          <span className="highlight">
            Dattatray <br />
            Dudhamogre
          </span>
        </h1>

        <div className="hero-title" style={{ minHeight: "2.4rem" }}>
          <i className="fa-solid fa-mug-hot text-orange" style={{ marginRight: "8px" }}></i>

          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "Technical Trainer & Mentor",
              2000,
              "Backend Software Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="hero-desc">
          I build scalable, production-grade web applications with
          Spring Boot & React. With experience in both development
          and professional training, I bridge the gap between
          complex architecture and clear, maintainable code.
        </p>

        <div className="hero-btns">

          <a
            href="https://drive.google.com/file/d/1La7WFcWfjsxq-K--FkA2LnpZnaRBMYHI/view?usp=sharing"
            className="btn-orange btn-orange-pulse"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-download"></i>
            Download Resume
          </a>

          <a
            href="#projects"
            className="btn-blue-outline"
          >
            View Projects
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

        <div className="hero-stats">

          <div className="hero-stat-box">
            <h2>5+</h2>
            <p>PROJECTS BUILT</p>
          </div>

          <div className="hero-stat-box">
            <h2>1+</h2>
            <p>YEARS EXP.</p>
          </div>

          <div className="hero-stat-box">
            <h2>20+</h2>
            <p>TECHNOLOGIES</p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-6 hero-right fade-in">

        <div className="hero-image-card">

          {/* FRONT IMAGE */}
          <img
            src={frontImg}
            alt="Dattatray"
            className="hero-front-img"
          />

        </div>

      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;