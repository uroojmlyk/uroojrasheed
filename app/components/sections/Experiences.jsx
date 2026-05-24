



// "use client";

// import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
// import Link from 'next/link'

// const experiences = [
//   {
//     type: 'work',
//     title: 'Frontend Developer (Freelance)',
//     company: 'Independent',
//     date: '2024 — Present',
//     summary: 'Designed and shipped 2 production applications end-to-end — from architecture decisions to deployment on Vercel.',
//     tech: ['Next.js 14', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'OpenAI API'],
//     highlights: [
//       'Built reusable atomic component system — reduced UI build time ~35%',
//       'Improved Lighthouse score from ~80 → 95+ via image optimization & code splitting',
//       'Integrated OpenAI API for dynamic AI-generated quiz content',
//       'Implemented WhatsApp ordering flow — no traditional checkout required',
//       'Mobile-first development for 70%+ mobile user base (Pakistan market)',
//     ],
//     links: [
//       { label: 'QuizForge', url: 'https://quizplatform-7dh5.vercel.app' },
//       { label: 'MILA Miami', url: 'https://mila-miami.com/' },
//     ],
//   },
//   {
//     type: 'education',
//     title: 'Self-directed Frontend Engineering',
//     company: 'Project-based Learning',
//     date: '2024 — 2025',
//     summary: 'Mastered modern React patterns, Next.js App Router, and full-stack MERN development by building real production applications.',
//     tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Git'],
//     highlights: [
//       'Deep-dived Next.js App Router, SSR, ISR patterns in production',
//       'REST API design with error handling, loading states, optimistic updates',
//       'Built reusable component library used across multiple projects',
//       'Practiced Git workflow, PR reviews, and deployment pipelines',
//     ],
//     links: [],
//   },
// ]

// export default function Experiences() {
//   return (
//     <section id="experiences" style={{
//       background: 'var(--bg-2)',
//       padding: 'clamp(80px, 10vw, 128px) 0',
//       position: 'relative',
//     }}>
//       <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--border)' }} />

//       <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
//         <div style={{ marginBottom: '64px' }}>
//           <div className="section-tag" style={{ marginBottom: '16px' }}>Background</div>
//           <h2 style={{
//             fontFamily: 'DM Sans, sans-serif',
//             fontSize: 'clamp(32px, 5vw, 52px)',
//             fontWeight: 800,
//             letterSpacing: '-0.03em',
//             color: 'var(--text-primary)',
//             lineHeight: 1.1,
//           }}>
//             Experience &<br /><span className="gradient-text">Education</span>
//           </h2>
//         </div>

//         {/* Timeline */}
//         <div style={{ position: 'relative' }}>
//           {/* Vertical line */}
//           <div style={{
//             position: 'absolute',
//             left: '20px',
//             top: '8px',
//             bottom: 0,
//             width: '1px',
//             background: 'var(--border)',
//           }} className="timeline-line" />

//           <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
//             {experiences.map((exp, i) => (
//               <div key={i} style={{ display: 'flex', gap: '32px' }} className="timeline-item">
//                 {/* Dot */}
//                 <div style={{
//                   flexShrink: 0,
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   background: exp.type === 'work' ? 'var(--accent-muted)' : 'var(--surface)',
//                   border: `1px solid ${exp.type === 'work' ? 'rgba(255,107,53,0.3)' : 'var(--border-2)'}`,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: exp.type === 'work' ? 'var(--accent)' : 'var(--text-secondary)',
//                   zIndex: 1,
//                   position: 'relative',
//                 }}>
//                   {exp.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
//                 </div>

//                 {/* Content */}
//                 <div style={{
//                   flex: 1,
//                   background: 'var(--surface)',
//                   border: '1px solid var(--border)',
//                   borderRadius: '14px',
//                   padding: 'clamp(20px, 3vw, 32px)',
//                 }}>
//                   <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
//                     <div>
//                       <h3 style={{
//                         fontFamily: 'DM Sans, sans-serif',
//                         fontSize: '19px',
//                         fontWeight: 700,
//                         color: 'var(--text-primary)',
//                         letterSpacing: '-0.01em',
//                         marginBottom: '4px',
//                       }}>
//                         {exp.title}
//                       </h3>
//                       <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace' }}>
//                         {exp.company}
//                       </span>
//                     </div>
//                     <span style={{
//                       padding: '4px 12px',
//                       background: 'var(--bg-3)',
//                       border: '1px solid var(--border)',
//                       borderRadius: '100px',
//                       fontSize: '12px',
//                       fontFamily: 'DM Mono, monospace',
//                       color: 'var(--text-muted)',
//                       whiteSpace: 'nowrap',
//                     }}>
//                       {exp.date}
//                     </span>
//                   </div>

//                   <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
//                     {exp.summary}
//                   </p>

//                   <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
//                     {exp.highlights.map((h, idx) => (
//                       <li key={idx} style={{
//                         display: 'flex', alignItems: 'flex-start', gap: '10px',
//                         fontSize: '13px',
//                         color: 'var(--text-secondary)',
//                         lineHeight: 1.5,
//                       }}>
//                         <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', marginTop: '6px', flexShrink: 0 }} />
//                         {h}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Tech stack */}
//                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: exp.links.length > 0 ? '20px' : 0 }}>
//                     {exp.tech.map((t) => (
//                       <span key={t} style={{
//                         padding: '3px 10px',
//                         background: 'var(--bg-3)',
//                         border: '1px solid var(--border)',
//                         borderRadius: '4px',
//                         fontSize: '11px',
//                         fontFamily: 'DM Mono, monospace',
//                         color: 'var(--text-muted)',
//                       }}>{t}</span>
//                     ))}
//                   </div>

//                   {/* Links */}
//                   {exp.links.length > 0 && (
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
//                       {exp.links.map((link) => (
//                         <Link
//                           key={link.label}
//                           href={link.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{
//                             display: 'inline-flex', alignItems: 'center', gap: '6px',
//                             fontSize: '13px',
//                             fontWeight: 500,
//                             color: 'var(--accent)',
//                             textDecoration: 'none',
//                           }}
//                           onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
//                           onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
//                         >
//                           {link.label} <ExternalLink size={12} />
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @media (max-width: 600px) {
//           .timeline-line { display: none; }
//           .timeline-item { gap: 16px !important; }
//         }
//       `}</style>
//     </section>
//   )
// }









"use client";
import { Briefcase, BookOpen, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const items = [
  {
    type: 'work',
    title: 'Frontend Developer',
    org: 'Freelance / Independent',
    period: '2024 — Present',
    desc: 'Shipped 2 full-stack production applications solo — from architecture to deployment. Handled client requirements, iterative design, performance tuning, and live delivery.',
    points: [
      'Built reusable component system — cut UI build time by ~35%',
      'Lifted Lighthouse score from ~78 to 95+ across both projects',
      'Integrated OpenAI GPT-4o for AI-driven quiz generation with real-time streaming',
      'Designed WhatsApp-native ordering flow, no traditional checkout needed',
      'Delivered mobile-first UX for Pakistan market (70%+ mobile users)',
    ],
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'MongoDB', 'Tailwind', 'Node.js', 'OpenAI API', 'Vercel'],
    links: [
      { label: 'QuizForge ↗', url: 'https://quizplatform-7dh5.vercel.app' },
      { label: 'MILA Miami ↗', url: 'https://mila-miami.com/' },
    ],
  },
  {
    type: 'learn',
    title: 'Self-Directed Engineering',
    org: 'Project-Based Learning',
    period: '2023 — 2024',
    desc: 'Levelled up through building, not watching — shipped real projects instead of following tutorials. Focus on React patterns, Next.js internals, and full-stack architecture.',
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