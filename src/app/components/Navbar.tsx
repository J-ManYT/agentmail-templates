'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <nav style={{
      borderBottom: '1px solid #1e1e1e',
      position: 'sticky',
      top: 0,
      background: '#0a0a0a',
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 4rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="https://agentmail.to" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/agentmail-logo.svg"
            alt="AgentMail"
            width={148}
            height={30}
            style={{ filter: 'invert(1)', display: 'block' }}
          />
        </a>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a
            href="https://docs.agentmail.to"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-corners"
          >
            Docs
          </a>
          <a
            href="https://github.com/agentmail-to"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-plain"
          >
            Github
          </a>
          <a
            href="https://console.agentmail.to"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Start For Free
          </a>
        </div>
      </div>
    </nav>
  )
}
