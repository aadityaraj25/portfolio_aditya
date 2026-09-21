import { useState } from 'react'
import './TechStack.css'

const ServerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
)
const DatabaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
)
const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
)
const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const MonitorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)
const TerminalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
)
const CloudIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
  </svg>
)
const WrenchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
)

const categories = [
  { label: 'Backend', icon: <ServerIcon />, skills: ['Node.js', 'Express.js', 'REST API', 'Socket.io', 'RabbitMQ', 'Prisma', 'Zod'] },
  { label: 'Databases', icon: <DatabaseIcon />, skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { label: 'Auth & Security', icon: <LockIcon />, skills: ['JWT', 'bcrypt', 'HTTP-only Cookies', 'Token Blacklist', 'Helmet', 'CORS', 'Rate Limiting', 'OAuth2'] },
  { label: 'Languages', icon: <CodeIcon />, skills: ['JavaScript (ES6+)', 'C/C++', 'Python', 'Java', 'HTML5', 'CSS3'] },
  { label: 'Frontend', icon: <MonitorIcon />, skills: ['React', 'Vite', 'React Router', 'Bootstrap', 'EJS', 'jQuery', 'CodeMirror'] },
  { label: 'DevOps & Testing', icon: <TerminalIcon />, skills: ['Docker', 'GitHub Actions', 'k6', 'Vitest', 'Swagger/OpenAPI', 'Pino', 'Sentry', 'Logtail'] },
  { label: 'Deployment', icon: <CloudIcon />, skills: ['Vercel', 'Render', 'GitHub Pages'] },
  { label: 'Tools', icon: <WrenchIcon />, skills: ['Git', 'GitHub', 'Postman', 'Thunder Client', 'pgAdmin'] },
]

const featured = [
  { name: 'Node.js', level: 90 },
  { name: 'Express.js', level: 90 },
  { name: 'PostgreSQL', level: 82 },
  { name: 'MongoDB', level: 85 },
  { name: 'React', level: 78 },
  { name: 'Redis', level: 72 },
  { name: 'Docker', level: 65 },
  { name: 'RabbitMQ', level: 68 },
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <section id="stack" className="section tech-stack">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            My core toolkit for building production-grade backend systems and full-stack applications.
          </p>
        </div>

        <div className="skill-bars">
          {featured.map(({ name, level }) => (
            <div key={name} className="skill-bar-item">
              <div className="skill-bar-header">
                <span className="skill-name">{name}</span>
                <span className="skill-pct">{level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ '--fill': `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="category-grid">
          {categories.map(({ label, icon, skills }) => (
            <div
              key={label}
              className={`card category-card ${activeCategory === label ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === label ? null : label)}
            >
              <div className="category-header">
                <span className="category-icon">{icon}</span>
                <span className="category-label">{label}</span>
                <span className="category-count">{skills.length}</span>
              </div>
              <div className="category-skills">
                {skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
