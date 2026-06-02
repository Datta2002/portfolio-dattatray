import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/navLinks";
import logoImg from "../assets/images/logo.png"; // ✅ Updated from logo.svg

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); 
  const [active, setActive] = useState("home");
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const handleNav = (href) => {
    setActive(href.replace("#", ""));
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <>
      <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <a href="#home" className="navbar-logo d-flex align-items-center" onClick={() => handleNav("#home")}>
              <img src={logoImg} alt="Logo" style={{ height: "75px", width: "auto", marginTop: "-18px", marginBottom: "-18px", display: "block" }} />
            </a>
            <div className="d-none d-lg-flex align-items-center gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`nav-link-custom ${active === l.href.replace("#","") ? "active" : ""}`}
                  onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                >
                  {l.label}
                </a>
              ))}
              <button className="btn-orange ms-3" onClick={() => handleNav("#contact")}>
                Let's Talk <i className="fa-solid fa-comments" style={{ marginLeft: "4px" }}></i>
              </button>
            </div>
            <button className="hamburger d-lg-none" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
 
      <div className={`mobile-overlay ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setMobileOpen(false)}>✕</button>
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
          >
            {l.label}
          </a>
        ))}
        <button className="btn-orange mt-3" onClick={() => handleNav("#contact")}>
          Let's Talk <i className="fa-solid fa-comments" style={{ marginLeft: "4px" }}></i>
        </button>
      </div>
    </>
  );
}

export default Navbar;