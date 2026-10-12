
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Enter at least 2 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "Enter at least 10 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <div className="inner-page">
      <section className="page-banner">
        <span className="eyebrow">LET'S CONNECT</span>
        <h1>We'd love to hear from you.</h1>
        <p>Questions, feedback, or ideas? Send us a message.</p>
      </section>

      <section className="container contact-layout section">
        <div className="contact-info">
          <span className="eyebrow">CONTACT SHOPSPHERE</span>
          <h2>Let's start a conversation.</h2>
          <p>
            Complete the form and explore how a contact experience
            can be implemented in React.
          </p>

          <div className="contact-detail">
            <span><Mail size={21} /></span>
            <div>
              <h3>Email</h3>
              <p>hello@shopsphere.example</p>
            </div>
          </div>

          <div className="contact-detail">
            <span><Phone size={21} /></span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210 (sample)</p>
            </div>
          </div>

          <div className="contact-detail">
            <span><MapPin size={21} /></span>
            <div>
              <h3>Location</h3>
              <p>India · Online store</p>
            </div>
          </div>

          <p className="form-note">
            Contact information is illustrative and is not connected
            to a real support service.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send a message</h2>
          <p>Your message details</p>

          {submitted && (
            <div className="success-message" role="status">
              <CheckCircle size={20} />
              Form validated successfully! No message was sent to a server.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
            />
            {errors.subject && (
              <small className="error">{errors.subject}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
            />
            {errors.message && (
              <small className="error">{errors.message}</small>
            )}
          </div>

          <button className="btn btn-primary submit-btn" type="submit">
            Send Message <Send size={17} />
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
