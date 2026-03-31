'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const templates = [
  {
    name: 'Autonomous 2FA Testing',
    description: 'Agent creates its own inbox and handles email verification flows with zero human input.',
    tags: ['TypeScript'],
    status: 'live' as const,
    slug: '2fa-testing',
    recommended: false,
  },
  {
    name: 'Donna Scheduling Assistant Demo',
    description: 'Like Donna Paulsen, this agent never misses a meeting, handles every scheduling conflict with ruthless efficiency, and always knows your calendar better than you do.',
    tags: ['TypeScript'],
    status: 'coming-soon' as const,
    slug: 'scheduling-assistant',
    recommended: true,
  },
  {
    name: 'Codex CRM Builder',
    description: 'Build a full CRM using AgentMail for all agent communications.',
    tags: ['TypeScript', 'Python'],
    status: 'coming-soon' as const,
    slug: 'codex-crm',
    recommended: false,
  },
  {
    name: 'Agent Self-Signup',
    description: 'An agent that creates its own AgentMail account with zero human involvement.',
    tags: ['TypeScript'],
    status: 'coming-soon' as const,
    slug: 'agent-self-signup',
    recommended: false,
  },
]

const PAGE_MAX = '1280px'
const PAGE_PAD = '0 4rem'

export default function TemplatesPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: PAGE_MAX, margin: '0 auto', padding: PAGE_PAD }}>
        <div style={{
          padding: '5rem 0 3.5rem',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            border: '1px solid rgba(74,222,128,0.3)',
            borderRadius: '4px',
            fontSize: '0.7rem',
            color: '#4ade80',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            fontWeight: 600,
            background: 'rgba(74,222,128,0.06)',
          }}>
            Templates
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            AgentMail Templates
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#888888',
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Ready-to-use email agent templates. Copy, clone, and deploy in minutes.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        maxWidth: PAGE_MAX,
        margin: '0 auto',
        padding: `0 4rem 6rem`,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
      }}>
        {templates.map((tpl) => {
          const card = (
            <div
              className="template-card"
              style={{
                background: '#111111',
                border: '1px solid #1e1e1e',
                borderRadius: '8px',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: tpl.status === 'live' ? 'pointer' : 'default',
                height: '100%',
              }}
            >
              {tpl.status === 'coming-soon' && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10,10,10,0.65)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  backdropFilter: 'blur(1px)',
                }}>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#888888',
                    border: '1px solid #1e1e1e',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                  }}>
                    Coming Soon
                  </span>
                </div>
              )}
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: '28px', height: '28px', opacity: 0.5 }}>
                    <Image
                      src="/agentmail-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      style={{ filter: 'invert(1)' }}
                    />
                  </div>
                  {tpl.recommended && (
                    <div style={{
                      padding: '0.2rem 0.6rem',
                      border: '1px solid rgba(250,204,21,0.3)',
                      borderRadius: '4px',
                      fontSize: '0.6rem',
                      color: '#facc15',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      background: 'rgba(250,204,21,0.06)',
                    }}>
                      Recommended by Adi
                    </div>
                  )}
                </div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                }}>
                  {tpl.name}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#888888',
                  lineHeight: 1.5,
                }}>
                  {tpl.description}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tpl.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      background: tag === 'Python' ? 'rgba(59,130,246,0.1)' : 'rgba(74,222,128,0.08)',
                      color: tag === 'Python' ? '#60a5fa' : '#4ade80',
                      border: `1px solid ${tag === 'Python' ? 'rgba(59,130,246,0.2)' : 'rgba(74,222,128,0.2)'}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )

          return tpl.status === 'live' ? (
            <Link key={tpl.slug} href={`/templates/${tpl.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              {card}
            </Link>
          ) : (
            <div key={tpl.slug}>{card}</div>
          )
        })}
      </div>
    </div>
  )
}
