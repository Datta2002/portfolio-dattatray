import React from "react";
import { NAV_LINKS } from "../data/navLinks";
import logoImg from "../assets/images/logo.png"; // ✅ Updated from logo.svg

function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
 
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo mb-3">
              <img src={logoImg} alt="Logo" style={{ height: "55px", width: "auto" }} />
            </div>
            <p className="footer-tagline">Java Full Stack Developer crafting scalable, secure, and stunning web experiences.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-heading">Quick Links</div>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}>
                <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.75rem", marginRight: "6px", color: "var(--color-blue)" }}></i> {l.label}
              </a>
            ))}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-heading">Connect</div>
            <div className="mb-3">
              <a href="https://github.com/Datta2002" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dattatray-dudhamogre/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:dattatray.dudhamogre@gmail.com" className="social-icon" title="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Open to opportunities worldwide.<br />
              Let's build something amazing together.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 <span>Dattatray</span>. All rights reserved.</p>
          <p className="footer-copy">Turning ideas into reality, one line of code at a time.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;