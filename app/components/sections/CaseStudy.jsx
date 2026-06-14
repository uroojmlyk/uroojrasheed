


"use client";
import { ExternalLink, Code2, Database, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudy() {
  return (
    <section id="casestudy" style={{ background: 'var(--bg)', position: 'relative' }}>
      <div style={{ height: 1, background: 'var(--line)' }} />
      <div className="container section-pad">

        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Deep Dive</div>
          <h2 className="display-lg">Case<br /><span className="hl">Study</span></h2>
        </div>

        {/* Big card */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 24, overflow: 'hidden' }}>

          {/* Header */}
          <div style={{
            background: 'var(--bg-raised)',
            borderBottom: '1px solid var(--line)',
            padding: 'clamp(24px,3vw,40px)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20,
          }}>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <span className="tag" style={{ fontSize: 10 }}>SaaS · EdTech · AI</span>
                <span className="tag" style={{ fontSize: 10 }}>2026 · Solo project · 3 weeks</span>
              </div>
              <h3 className="display-md">QuizForge <span style={{ color: 'var(--grey)', fontWeight: 400, fontSize: 'clamp(18px,2.5vw,32px)' }}>— AI Quiz Platform</span></h3>
            </div>
            <Link href="https://quizplatform-7dh5.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-accent">
              <ExternalLink size={14} /> View Live
            </Link>
          </div>

          {/* Body grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
          }} className="case-grid">

            {/* Left */}
            <div style={{ padding: 'clamp(24px,3vw,40px)', borderRight: '1px solid var(--line)' }} className="case-left">
              {/* Problem */}
              <div style={{ marginBottom: 32 }}>
                <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--grey)' }}>The Problem</div>
                <p className="body-md" style={{ lineHeight: 1.75 }}>
                  Educators waste hours manually writing quizzes. Existing tools are rigid (Google Forms) or prohibitively expensive (enterprise SaaS). There was a gap for an AI-native, affordable solution with real-time feedback.
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: 32 }}>
                <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--accent)' }}>The Solution</div>
                <p className="body-md" style={{ lineHeight: 1.75 }}>
                  Full-stack SaaS platform. GPT-4o generates contextual questions on demand. JWT auth, MongoDB for session persistence, real-time scoring, and an analytics dashboard all built solo in 3 weeks.
                </p>
              </div>

              {/* Metrics */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
              }}>
                {[
                  { val: '95+', lab: 'Lighthouse' },
                  { val: '3 wk', lab: 'Ship time' },
                  { val: 'GPT-4o', lab: 'AI model' },
                  { val: '0→∞', lab: 'Auth from scratch' },
                ].map(m => (
                  <div key={m.val} style={{
                    background: 'var(--bg-raised)', border: '1px solid var(--line)', borderRadius: 12, padding: 16, textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{m.val}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--grey)', marginTop: 4, letterSpacing: '0.06em' }}>{m.lab}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div style={{ padding: 'clamp(24px,3vw,40px)' }} className="case-right">
              {/* Architecture */}
              <div style={{ marginBottom: 28 }}>
                <div className="eyebrow" style={{ marginBottom: 16, color: 'var(--grey)' }}>Architecture</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { icon: Code2,     layer: 'Frontend', val: 'Next.js 14 App Router + TypeScript' },
                    { icon: Database,  layer: 'Database', val: 'MongoDB Atlas Mongoose ODM' },
                    { icon: Shield,    layer: 'Auth',     val: 'JWT custom middleware' },
                    { icon: Zap,       layer: 'AI',       val: 'OpenAI GPT-4o + prompt engineering' },
                  ].map(a => {
                    const Icon = a.icon
                    return (
                      <div key={a.layer} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', background: 'var(--bg-raised)', border: '1px solid var(--line)', borderRadius: 8 }}>
                        <Icon size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', minWidth: 64, letterSpacing: '0.04em' }}>{a.layer}</span>
                        <span style={{ fontSize: 13, color: 'var(--grey-hi)' }}>{a.val}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <div className="eyebrow" style={{ marginBottom: 16, color: 'var(--grey)' }}>Engineering Challenges</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { prob: 'AI latency', fix: 'Streaming API responses + optimistic UI so generation feels instant.' },
                    { prob: 'Score persistence', fix: 'Denormalized MongoDB schema — real-time updates without complex joins.' },
                    { prob: 'Mobile perf', fix: 'Code splitting + lazy loading pushed Lighthouse from 78 to 95+.' },
                  ].map(c => (
                    <div key={c.prob} style={{ padding: 16, background: 'var(--bg-raised)', border: '1px solid var(--line)', borderRadius: 10 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--white)', marginBottom: 5 }}>
                        <span style={{ color: 'var(--accent)' }}>↳ </span>{c.prob}
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--grey)', lineHeight: 1.6 }}>{c.fix}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr !important; }
          .case-left { border-right: none !important; border-bottom: 1px solid var(--line); }
        }
      `}</style>
    </section>
  )
}