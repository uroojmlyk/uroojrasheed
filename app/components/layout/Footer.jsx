




"use client";
import Link from 'next/link'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)', padding: '36px 0' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em' }}>
            Urooj<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', marginTop: 4, letterSpacing: '0.06em' }}>
            FRONTEND DEVELOPER — PAKISTAN
          </div>
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', letterSpacing: '0.06em', textAlign: 'center' }}>
          © {new Date().getFullYear()} UROOJ RASHEED · BUILT WITH NEXT.JS
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {[
            { icon: Github,   href: 'https://github.com/uroojmlyk' },
            { icon: Linkedin, href: 'https://linkedin.com' },
          ].map(s => {
            const Icon = s.icon
            return (
              <Link key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--bg-raised)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--grey)', transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--line)'; e.currentTarget.style.color='var(--grey)' }}
              ><Icon size={15} /></Link>
            )
          })}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#080808', cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          ><ArrowUp size={15} /></button>
        </div>
      </div>
    </footer>
  )
}