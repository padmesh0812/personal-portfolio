import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Contact({ onCopy }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onCopy) {
        onCopy(personalInfo.email, 'Thank you! Your message has been prepared.');
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 700);
  };

  return (
    <section id="contact" className="portfolio-section alt-bg">
      <div className="section-container">
        {/* Centered Section Heading */}
        <div className="section-heading text-center">
          <p>CONTACT</p>
          <h2>Get In <span>Touch</span></h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Info Card */}
          <div className="contact-card contact-info">
            <div className="contact-card-header">
              <h3 className="contact-card-title">Contact Information</h3>
              <p className="contact-card-desc">
                Have a project in mind or an open software engineering role? Feel free to reach out directly or drop a message.
              </p>
            </div>

            <div className="contact-items-list">
              {/* Location */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Location</span>
                  <p className="contact-value">{personalInfo.location}</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Email</span>
                  <div className="contact-value-row">
                    <a href={`mailto:${personalInfo.email}`} className="contact-link">
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      className="copy-badge-btn"
                      onClick={() => onCopy && onCopy(personalInfo.email, 'Email copied to clipboard!')}
                      title="Copy Email"
                    >
                      <Copy size={12} /> Copy
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Phone</span>
                  <div className="contact-value-row">
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-link">
                      {personalInfo.phone}
                    </a>
                    <button
                      type="button"
                      className="copy-badge-btn"
                      onClick={() => onCopy && onCopy(personalInfo.phone, 'Phone number copied!')}
                      title="Copy Phone"
                    >
                      <Copy size={12} /> Copy
                    </button>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="contact-item availability-item">
                <div className="contact-icon-box">
                  <Clock size={20} />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Availability</span>
                  <div className="availability-status">
                    <span className="status-dot"></span>
                    <p className="contact-value">{personalInfo.freelanceStatus}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quick Connect / Social Links */}
            <div className="contact-quick-links">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-pill"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
                <ExternalLink size={11} className="pill-arrow" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-pill"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ExternalLink size={11} className="pill-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="contact-card contact-form">
            <div className="contact-card-header">
              <h3 className="contact-card-title">Send a Message</h3>
              <p className="contact-card-desc">
                Fill out the form below and I will get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-inner">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  className="form-control"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Full-time Developer Role / Project Discussion"
                  className="form-control"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  className="form-control"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-accent"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {submitted ? (
                  <>
                    <Check size={16} /> Message Sent!
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
