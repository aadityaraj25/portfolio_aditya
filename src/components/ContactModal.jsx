import { useState, useEffect, useRef } from 'react'
import './ContactModal.css'

const EMAIL = 'arj25022005@gmail.com'
const NAME = 'Aditya Raj Sharma'
const ROLE = 'Backend Developer · ABES Engineering College'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/aadityaraj25',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    color: '#e8e8f0',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aadityar25',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0a66c2',
  },
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
    color: '#ea4335',
  },
]

const quickFacts = [
  { label: 'Status', value: 'Open to collaborate' },
  { label: 'Location', value: 'Ghaziabad, India' },
  { label: 'Focus', value: 'Backend · Full Stack' },
  { label: 'Response', value: 'Within 24 hours' },
]

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)
  const [copyAnim, setCopyAnim] = useState(false)
  const [visible, setVisible] = useState(false)
  const modalRef = useRef(null)

  // Mount/unmount animation
  useEffect(() => {
    if (isOpen) {
      setVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      const t = setTimeout(() => setVisible(false), 300)
      document.body.style.overflow = ''
      return () => clearTimeout(t)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setCopyAnim(true)
    setTimeout(() => setCopyAnim(false), 600)
    setTimeout(() => setCopied(false), 2500)
  }

  if (!visible) return null

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'open' : 'closing'}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Contact Information"
    >
      <div className={`modal-panel ${isOpen ? 'open' : 'closing'}`} ref={modalRef}>

        {/* Decorative glow ring */}
        <div className="modal-glow" />

        {/* Header */}
        <div className="modal-header">
          <div className="modal-avatar">
            <span className="avatar-initials">AR</span>
            <span className="avatar-pulse" />
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Identity */}
        <div className="modal-identity">
          <h2 className="modal-name">{NAME}</h2>
          <p className="modal-role">{ROLE}</p>
          <div className="modal-status">
            <span className="glow-dot" />
            <span>Available for collaboration</span>
          </div>
        </div>

        {/* Email card */}
        <div className="modal-email-wrap">
          <div className="modal-email-card">
            <div className="modal-email-info">
              <span className="modal-email-label">Email address</span>
              <span className="modal-email-value">{EMAIL}</span>
            </div>
            <button
              className={`modal-copy-btn ${copied ? 'success' : ''} ${copyAnim ? 'pop' : ''}`}
              onClick={copyEmail}
              title="Copy email"
            >
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2"/>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
              )}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <a href={`mailto:${EMAIL}`} className="modal-mailto-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
            Open in Mail app
          </a>
        </div>

        {/* Quick facts */}
        <div className="modal-facts">
          {quickFacts.map(({ label, value }) => (
            <div key={label} className="modal-fact">
              <span className="fact-label">{label}</span>
              <span className="fact-value">{value}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="modal-divider" />

        {/* Social links */}
        <div className="modal-socials">
          <span className="modal-socials-label">Find me on</span>
          <div className="modal-social-row">
            {socials.map(({ label, href, icon, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="modal-social-btn"
                title={label}
                style={{ '--social-color': color }}
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Terminal footer */}
        <div className="modal-terminal">
          <div className="terminal-dots">
            <span className="tdot red" /><span className="tdot yellow" /><span className="tdot green" />
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cmd"> echo "Let's build something great"</span>
            <span className="terminal-cursor" />
          </div>
        </div>

      </div>
    </div>
  )
}
