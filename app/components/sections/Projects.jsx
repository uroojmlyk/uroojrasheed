"use client";
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    no: '01',
    label: 'SaaS · EdTech · AI',
    title: 'QuizForge',
    tagline: 'AI quiz platform — from zero to production in 3 weeks.',
    body: 'Full-stack SaaS that uses GPT-4o to generate quizzes on demand. JWT auth, real-time scoring engine, educator analytics dashboard. Built the backend, designed the data model, and shipped the UI — solo.',
    tags: ['Next.js 14', 'TypeScript', 'MongoDB', 'OpenAI API', 'JWT', 'Vercel'],
    bullets: ['AI question generation with prompt engineering', 'JWT auth system from scratch', 'Real-time score tracking & leaderboard', 'Lighthouse 95+ after performance pass'],
    live: 'https://quizplatform-7dh5.vercel.app',
    github: 'https://github.com/uroojmlyk',
    featured: true,
    img: '/quizforge.png',
  },
  {
    no: '02',
    label: 'Hospitality · Branding',
    title: 'MILA Miami',
    tagline: 'Premium Miami restaurant & venue — built to impress.',
    body: "High-end hospitality website with cinematic visuals and immersive scrolling. Fully responsive, fast — designed to match a luxury brand's expectations and convert high-value guests.",
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive', 'Performance'],
    bullets: ['Luxury brand-accurate visual design', 'Immersive scroll & animation experience', 'Mobile-first for 70%+ mobile traffic', 'Optimised images & Core Web Vitals'],
    live: 'https://mila-miami.com/',
    github: null,
    featured: false,
        img: '/mila.png',

    // img: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg)', position: 'relative' }}>
      <div style={{ height: 1, background: 'var(--line)' }} />
      <div className="container section-pad">

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 72 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Featured Work</div>
            <h2 className="display-lg"><span className="hl">Live</span><br />Projects</h2>
          </div>
          <span className="tag">2 in production · 0 lorem ipsum</span>
        </div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(60px,8vw,100px)' }}>
          {projects.map((p, idx) => (
            <div key={p.no} className={`proj-row ${idx % 2 !== 0 ? 'proj-row-reverse' : ''}`} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px,5vw,72px)',
              alignItems: 'start',
            }}>

              {/* Mockup */}
              <div className="proj-img">
                <div style={{
                  background: 'var(--bg-raised)', border: '1px solid var(--line-hi)',
                  borderBottom: 'none', borderRadius: '14px 14px 0 0',
                  padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  <div style={{ flex: 1, background: 'var(--bg)', borderRadius: 6, padding: '4px 12px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)' }}>
                    {p.live.replace('https://', '').replace('www.', '')}
                  </div>
                  <Link href={p.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--grey)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--grey)'}
                  ><ExternalLink size={13} /></Link>
                </div>
                <div style={{
                  aspectRatio: '16/10', background: 'var(--bg-raised)',
                  border: '1px solid var(--line-hi)', borderTop: 'none',
                  borderRadius: '0 0 14px 14px', overflow: 'hidden', position: 'relative',
                }}>
                  {p.img ? (
                    <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="(max-width:768px) 100vw, 50vw" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: 'rgba(232,255,71,0.15)', letterSpacing: '-0.04em' }}>MILA</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--grey)', letterSpacing: '0.1em' }}>mila-miami.com</div>
                      <Link href={p.live} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ padding: '8px 18px', fontSize: 12, marginTop: 8 }}>
                        Visit Site →
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="proj-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', letterSpacing: '0.1em' }}>{p.no}</span>
                  <span className="tag" style={{ fontSize: 10 }}>{p.label}</span>
                  {p.featured && (
                    <span style={{ padding: '3px 10px', background: 'var(--accent-dim)', border: '1px solid rgba(232,255,71,0.2)', borderRadius: 100, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em' }}>
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="display-md" style={{ color: 'var(--white)', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--accent)', marginBottom: 16, letterSpacing: '-0.01em' }}>{p.tagline}</p>
                <p className="body-md" style={{ marginBottom: 24 }}>{p.body}</p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {p.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--grey-hi)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>◆</span>{b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
                  {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <Link href={p.live} target="_blank" rel="noopener noreferrer" className="btn-accent">
                    <ExternalLink size={14} /> Live Demo
                  </Link>
                  {p.github && (
                    <Link href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                      <Github size={14} /> GitHub
                    </Link>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Desktop: alternate layout — reverse row flips img/info order */
        .proj-row-reverse .proj-img { order: 2; }
        .proj-row-reverse .proj-info { order: 1; }

        /* Mobile: single column, natural order always */
        @media (max-width: 860px) {
          .proj-row,
          .proj-row-reverse {
            grid-template-columns: 1fr !important;
          }
          .proj-row .proj-img,
          .proj-row .proj-info,
          .proj-row-reverse .proj-img,
          .proj-row-reverse .proj-info {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  )
}