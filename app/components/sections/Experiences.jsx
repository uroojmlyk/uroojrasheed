






"use client";
import { Briefcase, BookOpen, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const items = [
  {
    type: 'work',
    title: 'Frontend Developer',
    org: 'Freelance / Independent',
    period: '2024 — Present',
    desc: 'Shipped 2 full-stack production applications solo from architecture to deployment. Handled client requirements, iterative design, performance tuning, and live delivery.',
    points: [
      'Built reusable component system cut UI build time by ~35%',
      'Lifted Lighthouse score from ~78 to 95+ across both projects',
      'Integrated OpenAI GPT-4o for AI-driven quiz generation with real time streaming',
      'Designed WhatsApp native ordering flow, no traditional checkout needed',
      'Delivered mobile first UX for Pakistan market (70%+ mobile users)',
    ],
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'MongoDB', 'Tailwind', 'Node.js', 'OpenAI API', 'Vercel'],
    links: [
      { label: 'QuizForge ↗', url: 'https://quizforge-web.vercel.app/' },
      { label: 'MILA Miami ↗', url: 'https://mila-miami.com/' },
    ],
  },
  {
    type: 'learn',
    title: 'Self-Directed Engineering',
    org: 'Project-Based Learning',
    period: '2023 — 2024',
    desc: 'Levelled up through building, not watching shipped real projects instead of following tutorials. Focus on React patterns, Next.js internals, and full-stack architecture.',
    points: [
      'Mastered Next.js App Router, Server Components, and data fetching strategies',
      'Built custom REST APIs with proper error handling and auth middleware',
      'Practised Git workflow: branching, PR discipline, and clean commit history',
      'Studied UI/UX principles and learned to read Figma files accurately',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git', 'Figma'],
    links: [],
  },
]

export default function Experiences() {
  return (
    <section id="experiences" style={{ background: 'var(--bg-card)', position: 'relative' }}>
      <div style={{ height: 1, background: 'var(--line)' }} />
      <div className="container section-pad">

        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Background</div>
          <h2 className="display-lg">Experience &<br /><span className="hl">Education</span></h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: 'grid',
              background: 'var(--bg)',
              border: '1px solid var(--line)',
              borderRadius: 20,
              overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--line-hi)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line)'}
            className="exp-card"
            >
              {/* Top bar */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                justifyContent: 'space-between', gap: 16,
                padding: 'clamp(20px,3vw,28px) clamp(20px,3vw,36px)',
                borderBottom: '1px solid var(--line)',
                background: 'var(--bg-raised)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: item.type === 'work' ? 'var(--accent-dim)' : 'var(--bg-card)',
                    border: `1px solid ${item.type === 'work' ? 'rgba(232,255,71,0.2)' : 'var(--line-hi)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.type === 'work' ? 'var(--accent)' : 'var(--grey-hi)',
                  }}>
                    {item.type === 'work' ? <Briefcase size={18} strokeWidth={1.5} /> : <BookOpen size={18} strokeWidth={1.5} />}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.015em' }}>{item.title}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', letterSpacing: '0.06em', marginTop: 2 }}>{item.org}</div>
                  </div>
                </div>
                <span className="tag">{item.period}</span>
              </div>

              {/* Body */}
              <div style={{ padding: 'clamp(20px,3vw,36px)', display: 'grid', gap: 24 }} className="exp-body">
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--grey-hi)', maxWidth: 640 }}>{item.desc}</p>

                <ul style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))' }}>
                  {item.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--grey)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--accent)', marginTop: 3, flexShrink: 0 }}>◆</span>{pt}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.tech.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                  </div>
                  {item.links.length > 0 && (
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      {item.links.map(l => (
                        <Link key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                          style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
                          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                        >{l.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}