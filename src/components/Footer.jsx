// import React from "react";
import { NAV_LINKS } from "../data/navLinks";
function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
 
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">Dattatray<span>Dudhamogre</span></div>
            <p className="footer-tagline">Java Full Stack Developer crafting scalable, secure, and stunning web experiences.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-heading">Quick Links</div>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}>
                → {l.label}
              </a>
            ))}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-heading">Connect</div>
            <div className="mb-3">
              <a href="https://github.com/Datta2002" className="social-icon" title="GitHub">🐙</a>
              <a href="https://www.linkedin.com/in/dattatray-dudhamogre/" className="social-icon" title="LinkedIn">💼</a>
              <a href="#home" className="social-icon" title="Twitter">🐦</a>
              <a href="mailto:dattatray.dudhamogre@gmail.com" className="social-icon" title="Email">✉️</a>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Open to opportunities worldwide.<br />
              Let's build something amazing together.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 <span>Dattatray</span>. All rights reserved.</p>
          <p className="footer-copy">Crafted with <span>♥</span> using React & Spring Boot</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;