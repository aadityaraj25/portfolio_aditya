import './About.css'

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const highlights = [
  {
    icon: <ShieldIcon />,
    title: 'Security First',
    desc: 'Hashed passwords, short-lived access tokens, single-use refresh-token rotation, HTTP-only cookies and token blacklisting.',
  },
  {
    icon: <CheckIcon />,
    title: 'Correctness',
    desc: 'Idempotent writes, serializable transactions and append-only ledger records instead of mutable state.',
  },
  {
    icon: <LayersIcon />,
    title: 'Clean Structure',
    desc: 'Routes → controllers → models/services, with middleware for auth, validation, uploads and error handling.',
  },
  {
    icon: <ZapIcon />,
    title: 'Production Habits',
    desc: 'Rate limiting, health checks, structured logging, load testing and CI via GitHub Actions.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building backends that are <span className="accent-text">built to last</span>
            </h2>
            <p className="about-text">
              I'm a B.Tech Computer Science student (2023–2027) at ABES Engineering College,
              Ghaziabad. My work centres on Node.js, Express, PostgreSQL and MongoDB —
              auth flows, transactional money movement, event-driven services,
              file uploads and real-time WebSocket apps. I also build the React frontends
              that sit on top of them.
            </p>
            <p className="about-text">
              I'm open to collaborating on backend and full-stack projects. If you're
              building something that needs solid APIs, secure auth, event-driven services
              or real-time features, feel free to reach out.
            </p>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-label">Education</span>
                <span className="meta-value">B.Tech CS · 2023–2027</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">College</span>
                <span className="meta-value">ABES Engineering College, Ghaziabad</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Focus</span>
                <span className="meta-value">Backend · Full Stack</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} className="card about-card">
              <div className="about-card-icon">{icon}</div>
                <div>
                  <h3 className="about-card-title">{title}</h3>
                  <p className="about-card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
