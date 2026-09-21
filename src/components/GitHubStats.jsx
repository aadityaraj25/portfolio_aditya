import { useState } from 'react'
import './GitHubStats.css'

const GH_USERNAME = 'aadityaraj25'

// Use the official vercel deployment which is more reliable, with cache-busting
const statsCards = [
  {
    label: 'GitHub Stats',
    src: `https://github-readme-stats.vercel.app/api?username=${GH_USERNAME}&show_icons=true&count_private=true&title_color=00d4ff&icon_color=00d4ff&text_color=8b8ba0&bg_color=0f0f1a&border_color=1e1e30&ring_color=00d4ff&hide_border=false&theme=dark`,
    alt: 'GitHub Stats for aadityaraj25',
  },
  {
    label: 'Top Languages',
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USERNAME}&layout=compact&count_private=true&title_color=00d4ff&text_color=8b8ba0&bg_color=0f0f1a&border_color=1e1e30&hide_border=false&theme=dark`,
    alt: 'Top languages used by aadityaraj25',
  },
  {
    label: 'Contribution Streak',
    src: `https://streak-stats.demolab.com/?user=${GH_USERNAME}&theme=dark&background=0f0f1a&border=1e1e30&ring=00d4ff&fire=00d4ff&currStreakLabel=00d4ff&sideLabels=8b8ba0&currStreakNum=e8e8f0&sideNums=e8e8f0&dates=5a5a72&hide_border=false`,
    alt: 'GitHub contribution streak for aadityaraj25',
  },
]

function StatCard({ label, src, alt }) {
  const [status, setStatus] = useState('loading') // loading | loaded | error

  return (
    <div className={`card stats-card ${status}`}>
      <p className="stats-card-label">{label}</p>
      {status === 'loading' && (
        <div className="stats-skeleton">
          <div className="skeleton-bar w-60" />
          <div className="skeleton-bar w-40" />
          <div className="skeleton-bar w-50" />
        </div>
      )}
      {status === 'error' && (
        <div className="stats-error">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Could not load — API rate limited.</span>
          <a href={`https://github.com/${GH_USERNAME}`} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ display: status === 'loaded' ? 'block' : 'none' }}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </div>
  )
}

const manualStats = [
  { label: 'Public Repos', value: '10+' },
  { label: 'CodeChef Solved', value: '294+' },
  { label: 'LeetCode Solved', value: '280+' },
  { label: 'Pull Shark Badge', value: '×2' },
]

export default function GitHubStats() {
  return (
    <section id="stats" className="section gh-stats">
      <div className="container">
        <div className="section-header">
          <p className="section-label">GitHub Activity</p>
          <h2 className="section-title">Stats &amp; Streaks</h2>
          <p className="section-subtitle">
            A live snapshot of my GitHub activity. Stats load from the GitHub API.
          </p>
        </div>

        {/* Manual highlight row — always visible */}
        <div className="stats-highlights">
          {manualStats.map(({ label, value }) => (
            <div key={label} className="card stat-highlight">
              <span className="sh-value">{value}</span>
              <span className="sh-label">{label}</span>
            </div>
          ))}
        </div>

        {/* Dynamic API cards */}
        <div className="stats-grid">
          {statsCards.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
        </div>

        <div className="activity-link">
          <a
            href={`https://github.com/${GH_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View GitHub Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
