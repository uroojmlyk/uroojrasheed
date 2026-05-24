

// "use client";

// import { ExternalLink, Zap, Database, Shield, Code2, TrendingUp } from 'lucide-react'
// import Link from 'next/link'

// const caseStudy = {
//   label: 'Case Study — SaaS / EdTech',
//   title: 'QuizForge',
//   subtitle: 'AI-Powered Quiz Platform',
//   liveLink: 'https://quizplatform-7dh5.vercel.app',
//   year: '2026',
//   duration: '3 weeks',
//   role: 'Full Stack Developer',

//   problem: 'Educators spend hours manually creating quizzes. Existing tools are either too rigid (Google Forms) or too expensive (enterprise platforms). There was a clear gap for an AI-native solution with real-time feedback.',

//   solution: 'Built a full-stack SaaS platform that uses OpenAI GPT to generate topic-based quiz questions on demand. Users authenticate via JWT, create sessions, answer questions, and view detailed performance analytics.',

//   architecture: [
//     { icon: <Code2 size={16} />, label: 'Frontend', value: 'Next.js 14 App Router + TypeScript' },
//     { icon: <Database size={16} />, label: 'Database', value: 'MongoDB Atlas (Mongoose ODM)' },
//     { icon: <Shield size={16} />, label: 'Auth', value: 'JWT-based session management' },
//     { icon: <Zap size={16} />, label: 'AI Layer', value: 'OpenAI GPT-4o with prompt engineering' },
//   ],

//   challenges: [
//     { title: 'Cold-start latency', solution: 'Implemented streaming API responses and optimistic UI updates to make AI generation feel instant.' },
//     { title: 'Score persistence', solution: 'Designed a denormalized MongoDB schema that stores session state for real-time score updates without complex joins.' },
//     { title: 'Mobile performance', solution: 'Code splitting, lazy loading, and image optimization pushed Lighthouse from 80 → 95+.' },
//   ],

//   metrics: [
//     { value: '95+', label: 'Lighthouse Score' },
//     { value: '3 wks', label: 'Ship Time' },
//     { value: '0→', label: 'JWT Auth from scratch' },
//     { value: 'AI', label: 'OpenAI integrated' },
//   ],
// }

// export default function CaseStudy() {
//   return (
//     <section id="casestudy" style={{
//       background: 'var(--bg)',
//       padding: 'clamp(80px, 10vw, 128px) 0',
//       position: 'relative',
//     }}>
//       <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--border)' }} />

//       <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
//         {/* Header */}
//         <div style={{ marginBottom: '56px' }}>
//           <div className="section-tag" style={{ marginBottom: '16px' }}>Deep Dive</div>
//           <h2 style={{
//             fontFamily: 'DM Sans, sans-serif',
//             fontSize: 'clamp(32px, 5vw, 52px)',
//             fontWeight: 800,
//             letterSpacing: '-0.03em',
//             color: 'var(--text-primary)',
//             lineHeight: 1.1,
//           }}>
//             Case<br /><span className="gradient-text">Study</span>
//           </h2>
//         </div>

//         {/* Main card */}
//         <div style={{
//           background: 'var(--surface)',
//           border: '1px solid var(--border)',
//           borderRadius: '20px',
//           overflow: 'hidden',
//         }}>
//           {/* Top bar */}
//           <div style={{
//             padding: '24px 32px',
//             borderBottom: '1px solid var(--border)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             gap: '16px',
//             background: 'var(--surface-2)',
//           }}>
//             <div>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
//                 <span style={{
//                   padding: '2px 10px',
//                   background: 'var(--accent-muted)',
//                   border: '1px solid rgba(255,107,53,0.25)',
//                   borderRadius: '100px',
//                   fontSize: '11px',
//                   fontWeight: 600,
//                   color: 'var(--accent)',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.05em',
//                 }}>
//                   {caseStudy.label}
//                 </span>
//                 <span style={{ fontSize: '12px', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)' }}>
//                   {caseStudy.year} · {caseStudy.duration} · {caseStudy.role}
//                 </span>
//               </div>
//               <h3 style={{
//                 fontFamily: 'DM Sans, sans-serif',
//                 fontSize: 'clamp(24px, 4vw, 36px)',
//                 fontWeight: 800,
//                 letterSpacing: '-0.03em',
//                 color: 'var(--text-primary)',
//               }}>
//                 {caseStudy.title} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>— {caseStudy.subtitle}</span>
//               </h3>
//             </div>
//             <Link href={caseStudy.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
//               View Live <ExternalLink size={15} />
//             </Link>
//           </div>

//           {/* Body */}
//           <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
//             <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>

//               {/* Problem / Solution */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
//                 {[
//                   { label: 'The Problem', text: caseStudy.problem, accent: false },
//                   { label: 'The Solution', text: caseStudy.solution, accent: true },
//                 ].map((block) => (
//                   <div key={block.label}>
//                     <div style={{
//                       display: 'flex', alignItems: 'center', gap: '8px',
//                       fontSize: '11px', fontWeight: 700,
//                       letterSpacing: '0.12em', textTransform: 'uppercase',
//                       color: block.accent ? 'var(--accent)' : 'var(--text-muted)',
//                       marginBottom: '10px',
//                     }}>
//                       {block.label}
//                     </div>
//                     <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
//                       {block.text}
//                     </p>
//                   </div>
//                 ))}

//                 {/* Metrics */}
//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(2, 1fr)',
//                   gap: '12px',
//                 }}>
//                   {caseStudy.metrics.map((m) => (
//                     <div key={m.value} style={{
//                       background: 'var(--bg-3)',
//                       border: '1px solid var(--border)',
//                       borderRadius: '10px',
//                       padding: '16px',
//                       textAlign: 'center',
//                     }}>
//                       <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}>{m.value}</div>
//                       <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{m.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Architecture + Challenges */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
//                 {/* Architecture */}
//                 <div>
//                   <div style={{
//                     fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
//                     textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px',
//                   }}>
//                     Technical Architecture
//                   </div>
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                     {caseStudy.architecture.map((item) => (
//                       <div key={item.label} style={{
//                         display: 'flex', alignItems: 'center', gap: '12px',
//                         padding: '12px 16px',
//                         background: 'var(--bg-3)',
//                         border: '1px solid var(--border)',
//                         borderRadius: '8px',
//                       }}>
//                         <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{item.icon}</span>
//                         <span style={{ fontSize: '12px', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)', minWidth: '70px' }}>{item.label}</span>
//                         <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Challenges */}
//                 <div>
//                   <div style={{
//                     fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
//                     textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px',
//                   }}>
//                     Engineering Challenges
//                   </div>
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//                     {caseStudy.challenges.map((c, i) => (
//                       <div key={i} style={{
//                         padding: '16px',
//                         background: 'var(--bg-3)',
//                         border: '1px solid var(--border)',
//                         borderRadius: '10px',
//                       }}>
//                         <div style={{
//                           fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)',
//                           marginBottom: '6px',
//                         }}>
//                           {c.title}
//                         </div>
//                         <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
//                           {c.solution}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @media (min-width: 960px) {
//           .case-grid { grid-template-columns: 1fr 1fr !important; }
//         }
//       `}</style>
//     </section>
//   )
// }









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
                  Full-stack SaaS platform. GPT-4o generates contextual questions on demand. JWT auth, MongoDB for session persistence, real-time scoring, and an analytics dashboard — all built solo in 3 weeks.
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
                    { icon: Database,  layer: 'Database', val: 'MongoDB Atlas — Mongoose ODM' },
                    { icon: Shield,    layer: 'Auth',     val: 'JWT — custom middleware' },
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