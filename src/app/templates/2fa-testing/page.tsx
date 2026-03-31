import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

const steps = [
  'Creates a fresh AgentMail inbox via API',
  'Triggers signup flow with that inbox as the email',
  'Waits for the verification email to arrive in real time',
  'Extracts the 6-digit OTP automatically',
  'Submits OTP and completes verification, zero human input',
]

const cloneCode = `git clone https://github.com/J-ManYT/Demo_1_2FA
cd Demo_1_2FA
npm install`

const envCode = `AGENTMAIL_API_KEY=your_key_here
GMAIL_USER=your_gmail
GMAIL_PASS=your_app_password`

const PAGE_MAX = '1280px'
const PAGE_PAD = '0 4rem'

export default function TwoFATestingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Navbar />

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 4rem 6rem', position: 'relative', zIndex: 1 }}>

          {/* Back */}
          <Link
            href="/templates"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#888888',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              marginBottom: '3rem',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Templates
          </Link>

          {/* Title — open, not boxed */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Autonomous 2FA Testing
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#888888', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '560px' }}>
            Agent creates its own inbox and handles email verification flows with zero human input.
          </p>

          {/* Meta row */}
          <div style={{
            display: 'flex',
            gap: '2.5rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid #1e1e1e',
          }}>
            <div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Works with
              </div>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                background: 'rgba(74,222,128,0.08)',
                color: '#4ade80',
                border: '1px solid rgba(74,222,128,0.2)',
              }}>
                TypeScript
              </span>
            </div>

            <div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Built by
              </div>
              <a
                href="https://github.com/J-ManYT"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.875rem',
                  color: '#ffffff',
                  fontWeight: 500,
                  borderBottom: '1px solid #333',
                  paddingBottom: '1px',
                }}
              >
                Jainam Patel
              </a>
            </div>
          </div>

          {/* Steps */}
          <Section title="How It Works">
            <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {steps.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(74,222,128,0.08)',
                    border: '1px solid rgba(74,222,128,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#4ade80',
                    marginTop: '1px',
                  }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#cccccc', lineHeight: 1.6 }}>{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          {/* Clone */}
          <Section title="Clone">
            <CodeBlock code={cloneCode} />
          </Section>

          {/* Env */}
          <Section title="Environment Variables">
            <CodeBlock code={envCode} />
          </Section>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <a
              href="https://github.com/J-ManYT/Demo_1_2FA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bracket"
            >
              View Source Code
            </a>
            <a
              href="https://console.agentmail.to"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Get AgentMail API Key
            </a>
          </div>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      marginBottom: '1.5rem',
      background: 'rgba(17,17,17,0.85)',
      border: '1px solid #1e1e1e',
      borderRadius: '10px',
      padding: '1.5rem 2rem',
      backdropFilter: 'blur(4px)',
    }}>
      <h2 style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.15em',
        color: '#555',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre style={{
      fontFamily: '"SF Mono", "Fira Code", "Roboto Mono", monospace',
      fontSize: '0.82rem',
      color: '#4ade80',
      lineHeight: 1.7,
      margin: 0,
      whiteSpace: 'pre',
      overflowX: 'auto',
    }}>
      {code}
    </pre>
  )
}
