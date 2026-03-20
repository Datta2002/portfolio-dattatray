import { CONTACT_ITEMS } from "../data/contactData";
import { useState, useEffect, useRef } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
 
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration point
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };
 
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="divider mx-auto" />
          <p className="section-desc mx-auto" style={{ textAlign: "center" }}>
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                Contact Information
              </h4>
              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="contact-item" style={{ color: "inherit" }}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </a>
              ))}
              <div style={{ marginTop: "1.5rem", padding: "1.2rem", background: "var(--color-blue-dim)", borderRadius: "12px", border: "1px solid rgba(56,189,248,0.2)" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.7 }}>
                  ✦ Currently open to full-time roles, freelance projects, and exciting collaborations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form-card">
              <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                Send a Message
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label-custom">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-input-custom"
                        placeholder="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label-custom">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-input-custom"
                        placeholder="abc@gmail.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label-custom">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input-custom"
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                <button type="submit" className="btn-orange w-100" style={{ justifyContent: "center", padding: "0.85rem" }}>
                  {sent ? "✓ Message Sent!" : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;