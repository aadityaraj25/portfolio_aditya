import { useState } from 'react'
import './Contact.css'

export default function Contact({ onContactClick }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('arj25022005@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="section-label">Let's Connect</p>
            <h2 className="contact-title">
              Open to collaborate<span className="accent-dot">.</span>
            </h2>
            <p className="contact-desc">
              I'm open to collaborating on backend and full-stack projects.
              If you're building something that needs solid APIs, secure auth,
              event-driven services or real-time features — or you just want
              to talk Node.js — feel free to reach out.
            </p>

            <div className="contact-cta-wrap">
              <button className="btn btn-primary contact-cta-btn" onClick={onContactClick}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                Contact Me
              </button>
            </div>

            <div className="contact-cards">
              <button className="contact-email-card card" onClick={onContactClick}>
                <div className="contact-email-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-email-label">Email</div>
                  <div className="contact-email-value">arj25022005@gmail.com</div>
                </div>
                <span className="copy-status">Click to open</span>
              </button>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/aadityaraj25"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/aadityar25"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-box card">
              <div className="box-header">
                <span className="box-dot red" />
                <span className="box-dot yellow" />
                <span className="box-dot green" />
              </div>
              <pre className="contact-code">
                <code>
{`const collaborate = {
  name: "Aditya Raj Sharma",
  role: "Backend Developer",
  openTo: [
    "REST API design",
    "Auth systems",
    "Event-driven services",
    "Real-time apps",
    "Full stack projects",
  ],
  contact: "arj25022005@gmail.com",
  status: "Available",
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
