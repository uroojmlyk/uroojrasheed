


"use client";
import { Code2, Layers, Smartphone, Zap, Globe, PenTool } from 'lucide-react'

const services = [
  { icon: Code2,      no: '01', title: 'React & Next.js Development', body: 'Component-driven UIs with the App Router, SSR/ISR, TypeScript, and scalable state management. Production-grade code, not tutorials.', tags: ['React 18', 'Next.js 14', 'TypeScript'] },
  { icon: Layers,     no: '02', title: 'Full-Stack MERN Applications', body: 'End-to-end: REST API design, MongoDB schemas, Express middleware, auth — then the React front that ties it together.', tags: ['Node.js', 'Express', 'MongoDB'] },
  { icon: Smartphone, no: '03', title: 'Responsive & Mobile-First UI', body: 'Fluid layouts that hold up on every screen. CSS Grid, Flexbox, and Tailwind — no janky breakpoints, no overflow bugs.', tags: ['Tailwind CSS', 'CSS Grid', 'Mobile-first'] },
  { icon: Zap,        no: '04', title: 'Performance Optimisation', body: 'Real Lighthouse scores. Lazy loading, image optimisation, code splitting, and Core Web Vitals tuning that recruiters and clients notice.', tags: ['Core Web Vitals', 'LCP/CLS/FID', 'Vercel'] },
  { icon: Globe,      no: '05', title: 'Third-Party API Integration', body: 'OpenAI, WhatsApp Business, Google Maps, Stripe — stitching external services into seamless user flows without the mess.', tags: ['OpenAI API', 'REST', 'Webhooks'] },
  { icon: PenTool,    no: '06', title: 'Figma → Pixel-Perfect Code', body: 'Given a design file, I reproduce it exactly — not approximately. Every spacing value, every hover state, every shadow.', tags: ['Figma', 'Pixel-perfect', 'Animations'] },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-card)', position: 'relative' }}>
      <div style={{ height: 1, background: 'var(--line)' }} />
      <div className="container section-pad">

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>What I Offer</div>
            <h2 className="display-lg" style={{ color: 'var(--white)' }}>
              Services &<br /><span className="hl">Capabilities</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 15, lineHeight: 1.7, color: 'var(--grey)' }}>
            I work across the full frontend stack — from API wiring to animation polish. 
            Here's where I spend my time.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
          gap: 1,
          border: '1px solid var(--line)',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} style={{
                background: 'var(--bg)',
                padding: 'clamp(24px,3vw,36px)',
                borderRight: '1px solid var(--line)',
                borderBottom: '1px solid var(--line)',
                transition: 'background 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-raised)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(232,255,71,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                  }}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', letterSpacing: '0.1em' }}>{s.no}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--white)', marginBottom: 10, letterSpacing: '-0.015em', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--grey)', marginBottom: 20 }}>{s.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map(t => (
                    <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}