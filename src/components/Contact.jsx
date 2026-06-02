import { CONTACT_ITEMS } from "../data/contactData";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const showToastNotification = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showToastNotification("Please complete all fields.", "error");
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_0j8oj34",   // 🔁 replace
        "template_uixo6vr",  // 🔁 replace
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "zDvkdDrFIufksuRqe"    // 🔁 replace
      )
      .then(
        () => {
          setSending(false);
          setForm({ name: "", email: "", message: "" });
          showToastNotification("Message sent successfully!", "success");
        },
        (error) => {
          setSending(false);
          console.error("EmailJS Error:", error);
          showToastNotification("Failed to send. Please try again.", "error");
        }
      );
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

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="contact-info-card h-100">
              <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                Contact Information
              </h4>

              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="contact-item" style={{ color: "inherit" }}>
                  <div className="contact-item-icon">
                    <i className={item.icon} style={{ color: "var(--color-blue)" }}></i>
                  </div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </a>
              ))}

              <div style={{ marginTop: "1.5rem", padding: "1.2rem", background: "var(--color-blue-dim)", borderRadius: "12px", border: "1px solid rgba(56,189,248,0.2)" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.7 }}>
                  <i className="fa-solid fa-circle-info" style={{ color: "var(--color-blue)", marginRight: "6px" }}></i> Currently open to full-time roles, freelance projects, and exciting collaborations.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card h-100">
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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

                <button
                  type="submit"
                  className="btn-orange w-100"
                  style={{ justifyContent: "center", padding: "0.85rem" }}
                  disabled={sending}
                >
                  {sending ? "Sending Message..." : (
                    <>
                      Send Message <i className="fa-solid fa-paper-plane" style={{ marginLeft: "8px" }}></i>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Toast Alert Notification */}
      {toast.show && (
        <div className={`contact-toast ${toast.type === "error" ? "error" : ""}`}>
          <span className="contact-toast-icon">
            {toast.type === "success" ? (
              <i className="fa-solid fa-circle-check" style={{ color: "var(--color-blue)" }}></i>
            ) : (
              <i className="fa-solid fa-circle-exclamation" style={{ color: "var(--color-orange)" }}></i>
            )}
          </span>
          <span className="contact-toast-text">{toast.message}</span>
        </div>
      )}
    </section>
  );
}

export default Contact;