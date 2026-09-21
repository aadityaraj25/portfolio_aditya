import './Achievements.css'

const GitMergeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/>
    <path d="M6 21V9a9 9 0 009 9"/>
  </svg>
)
const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)

const stats = [
  { value: '294+', label: 'CodeChef Problems', platform: 'CodeChef', color: '#ff6b35' },
  { value: '300+', label: 'LeetCode Problems', platform: 'LeetCode', color: '#f89c1c' },
  { value: '1410', label: 'Peak Rating', platform: 'CodeChef', color: '#ff6b35' },
  { value: '1390', label: 'Peak Rating', platform: 'LeetCode', color: '#f89c1c' },
]

const badges = [
  {
    icon: <GitMergeIcon />,
    title: 'Pull Shark ×2',
    desc: 'Merged pull requests that were later referenced by other contributors',
    color: '#3b82f6',
  },
  {
    icon: <TargetIcon />,
    title: 'YOLO',
    desc: 'Merged a pull request without a review',
    color: '#8b5cf6',
  },
]

const profiles = [
  {
    name: 'GitHub',
    href: 'https://github.com/aadityaraj25',
    username: '@aadityaraj25',
    icon: <GithubIcon />,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/',
    username: '300+ solved · 1390 peak',
    icon: <CodeIcon />,
  },
  {
    name: 'CodeChef',
    href: 'https://www.codechef.com/',
    username: '294+ solved · 1410 peak',
    icon: <CodeIcon />,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Achievements</p>
          <h2 className="section-title">Coding Profiles &amp; Badges</h2>
        </div>

        <div className="ach-stats">
          {stats.map(({ value, label, platform, color }) => (
            <div key={`${platform}-${label}`} className="card stat-card">
              <div className="stat-value" style={{ color }}>{value}</div>
              <div className="stat-label">{label}</div>
              <div className="stat-platform" style={{ color }}>{platform}</div>
            </div>
          ))}
        </div>

        <div className="ach-badges">
          {badges.map(({ icon, title, desc, color }) => (
            <div key={title} className="card badge-card">
              <div className="badge-icon" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
                {icon}
              </div>
              <div>
                <h3 className="badge-title">{title}</h3>
                <p className="badge-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ach-profiles">
          {profiles.map(({ name, href, username, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card profile-card"
            >
              <div className="profile-icon">{icon}</div>
              <div>
                <div className="profile-name">{name}</div>
                <div className="profile-user">{username}</div>
              </div>
              <svg className="profile-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
