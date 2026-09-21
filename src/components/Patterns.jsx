import './Patterns.css'

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
)
const KeyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
)
const DatabaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
)
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const BoxIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/>
    <line x1="10" y1="12" x2="14" y2="12"/>
  </svg>
)
const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)
const ActivityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)
const UploadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
)

const patterns = [
  { area: 'Structure', icon: <GridIcon />, what: 'Separate routes, controllers, models, middleware, config and utils so each file has one job.' },
  { area: 'Authentication', icon: <KeyIcon />, what: 'bcrypt hashing, JWT access and refresh tokens (single-use rotation), HTTP-only cookies, token blacklist on logout.' },
  { area: 'Data Integrity', icon: <DatabaseIcon />, what: 'Immutable ledger entries, Serializable Postgres transactions and MongoDB sessions for multi-write operations, idempotency keys for safe retries.' },
  { area: 'Async & Messaging', icon: <SendIcon />, what: 'RabbitMQ durable queues with Dead Letter Exchanges to decouple side-effects from the request path.' },
  { area: 'Resilience', icon: <ShieldIcon />, what: 'Redis-backed rate limiting that fails open, with in-memory fallback; /health readiness probes.' },
  { area: 'API Design', icon: <BoxIcon />, what: 'Versioned routes (/api/v1), pagination, search and sorting, Zod validation, meaningful HTTP status codes, Swagger/OpenAPI docs.' },
  { area: 'Error Handling', icon: <AlertIcon />, what: 'Async wrapper, global error middleware, consistent JSON error and response shapes.' },
  { area: 'Testing & Observability', icon: <ActivityIcon />, what: 'k6 load tests, Vitest, GitHub Actions CI, Pino / Sentry / Logtail.' },
  { area: 'Uploads', icon: <UploadIcon />, what: 'Multer to Cloudinary pipeline with temp-file cleanup on failure.' },
  { area: 'Real-Time', icon: <ZapIcon />, what: 'Socket.io rooms, presence and event-based broadcast for live sync.' },
  { area: 'Config', icon: <SettingsIcon />, what: "Secrets and connection strings in .env, documented in each project's README." },
]

export default function Patterns() {
  return (
    <section id="patterns" className="section patterns">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Engineering Patterns</p>
          <h2 className="section-title">How I approach problems</h2>
          <p className="section-subtitle">
            Consistent patterns I apply across all projects for reliability, security, and maintainability.
          </p>
        </div>

        <div className="patterns-grid">
          {patterns.map(({ area, icon, what }) => (
            <div key={area} className="card pattern-card">
              <div className="pattern-icon">{icon}</div>
              <h3 className="pattern-area">{area}</h3>
              <p className="pattern-what">{what}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
