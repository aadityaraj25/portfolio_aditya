import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 'ledger',
    type: 'Backend',
    title: 'Ledger Vault 2.0',
    subtitle: 'Banking Backend',
    description:
      'A banking-style REST API rearchitected as a modular monolith where every money movement is recorded in an immutable double-entry ledger. Balances are derived from paired DEBIT/CREDIT entries instead of a mutable field.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'RabbitMQ', 'Docker'],
    highlights: [
      '14 REST endpoints across auth, accounts, transactions and ledger modules',
      'Serializable-isolation Postgres transactions keyed by Idempotency-Key',
      'JWT access tokens with single-use, DB-backed refresh token rotation',
      'Redis-backed rate limiting with automatic in-memory fallback',
      'RabbitMQ with Dead Letter Exchanges for audit logging & notifications',
      'k6 load test: 150 VUs, p95 < 200ms, 0% failures, no deadlocks',
    ],
    links: {
      code: 'https://github.com/aadityaraj25/banking-backend/tree/v2',
    },
    featured: true,
  },
  {
    id: 'mediaapi',
    type: 'Backend',
    title: 'MediaAPI',
    subtitle: 'Media Upload & Auth Service',
    description:
      'A video-platform style backend covering user accounts, token-based auth and image uploads, with 10 REST endpoints and role-based route protection.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'Cloudinary', 'bcrypt'],
    highlights: [
      'HTTP-only cookies with short-lived access + long-lived refresh tokens',
      'Multer → Cloudinary pipeline with temp-file cleanup on failure',
      'Channel profile and watch history with subscription counts',
      'Custom ApiError class and standardized ApiResponse wrapper',
    ],
    links: {
      live: 'https://mediaapi.onrender.com/api/v1',
      code: 'https://github.com/aadityaraj25/MediaAPI',
    },
  },
  {
    id: 'todo',
    type: 'Backend',
    title: 'Todo API',
    subtitle: 'RESTful CRUD API',
    description:
      'A minimal RESTful CRUD API with everything a real list endpoint needs — search, sort, pagination and toggle endpoint.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    highlights: [
      'Case-insensitive title search, sort by date, page/limit pagination',
      'Dedicated PATCH /:id/toggle for completion state',
      'Async handler wrapper and centralized error middleware',
    ],
    links: {
      live: 'https://todo-api-pi-smoky.vercel.app/api/todos',
      code: 'https://github.com/aadityaraj25/Todo-Api',
    },
  },
  {
    id: 'metos',
    type: 'Full Stack',
    title: 'METoS',
    subtitle: 'Developer Collaboration Platform',
    description:
      'A platform where developers find teammates, form groups and collaborate in one workspace. 50+ REST endpoints across 8 modules and 8 Mongoose models.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Redis', 'JWT', 'Nodemailer'],
    highlights: [
      'Single-use JWTs signed against password hash — self-invalidating invite links',
      'OAuth2 email via Nodemailer for secure invite delivery',
      'Redis cache for instant username-availability checks',
      'Real-time presence, Kanban task board, persistent group messaging',
      'Leader-approved join requests for group membership',
    ],
    links: {
      live: 'https://me-to-s.vercel.app/',
      code: 'https://github.com/aadityaraj25/METoS',
    },
    featured: true,
  },
  {
    id: 'codeeditor',
    type: 'Full Stack',
    title: 'CodeEditor',
    subtitle: 'Real-Time Collaborative Editor',
    description:
      'A full-stack editor where multiple people join a room and edit code together with live sync over WebSockets.',
    stack: ['React 19', 'Vite', 'Express', 'Socket.io', 'CodeMirror'],
    highlights: [
      'Room-based sessions with unique UUID per client',
      'Live code synchronization across all connected clients',
      'CodeMirror syntax highlighting and user avatars',
      'Toast notifications for join/leave events',
    ],
    links: {
      live: 'https://codeeditor-91hm.onrender.com/',
      code: 'https://github.com/aadityaraj25/codeEditor',
    },
  },
  {
    id: 'ecosearch',
    type: 'Frontend',
    title: 'Eco-Search',
    subtitle: 'Eco-Friendly Product Search',
    description:
      'A search-focused frontend for eco-friendly products with landing, login, signup and password-reset pages.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: ['Deployed on GitHub Pages', 'Multi-page layout with login/signup flow'],
    links: {
      live: 'https://aditya23b0121263.github.io/Eco-Search/',
      code: 'https://github.com/aadityaraj25/Eco-Search',
    },
  },
]

const filters = ['All', 'Backend', 'Full Stack', 'Frontend']

const typeColors = {
  Backend: '#00d4ff',
  'Full Stack': '#a855f7',
  Frontend: '#22d3ee',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.type === activeFilter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            Production-ready APIs, real-time apps, and collaborative tools.
            Most are deployed — try them yourself.
          </p>
        </div>

        <div className="project-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <article
              key={project.id}
              className={`project-card card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-type-badge" style={{ color: typeColors[project.type] }}>
                    <span
                      className="type-dot"
                      style={{ background: typeColors[project.type] }}
                    />
                    {project.type}
                  </div>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>
                      <span className="highlight-arrow">›</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-stack">
                  {project.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link code"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
