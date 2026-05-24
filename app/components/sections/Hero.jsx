

// "use client";
// import Image from 'next/image'
// import { useEffect, useState } from 'react'

// const skills = ['React 18', 'Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'REST APIs', 'Figma→Code']

// export default function Hero() {
//   const [show, setShow] = useState(false)
//   useEffect(() => { setTimeout(() => setShow(true), 80) }, [])

//   return (
//     <section style={{
//       minHeight: '100vh',
//       background: 'var(--bg)',
//       display: 'flex', alignItems: 'center',
//       position: 'relative', overflow: 'hidden',
//       paddingTop: 72,
//     }}>

//       {/* BIG background text */}
//       <div style={{
//         position: 'absolute', bottom: '-2vw', left: '-1vw',
//         fontFamily: 'var(--font-display)',
//         fontSize: 'clamp(100px, 18vw, 260px)',
//         fontWeight: 800, lineHeight: 1,
//         color: 'rgba(255,255,255,0.022)',
//         letterSpacing: '-0.05em',
//         userSelect: 'none', pointerEvents: 'none',
//         whiteSpace: 'nowrap',
//       }}>FRONTEND</div>

//       {/* Accent circle blur */}
//       <div style={{
//         position: 'absolute', top: '15%', right: '-5%',
//         width: 600, height: 600, borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)',
//         pointerEvents: 'none',
//       }} />

//       <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: 40, paddingBottom: 80 }}>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
//           gap: 'clamp(40px,6vw,100px)',
//           alignItems: 'center',
//         }} className="hero-grid">

//           {/* LEFT */}
//           <div>
//             {/* Status badge */}
//             <div style={{
//               opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(16px)',
//               transition: 'opacity 0.6s, transform 0.6s',
//               display: 'inline-flex', alignItems: 'center', gap: 8,
//               padding: '7px 16px',
//               background: 'rgba(232,255,71,0.08)',
//               border: '1px solid rgba(232,255,71,0.2)',
//               borderRadius: 100,
//               marginBottom: 28,
//             }}>
//               <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,0.25)' }} />
//               <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent)' }}>
//                 OPEN TO WORK — REMOTE / ONSITE
//               </span>
//             </div>

//             {/* Heading */}
//             <div style={{
//               opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(24px)',
//               transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
//               marginBottom: 24,
//             }}>
//               <div className="display-xl" style={{ color: 'var(--white)' }}>
//                 Urooj
//               </div>
//               <div className="display-xl" style={{
//                 WebkitTextStroke: '1px rgba(255,255,255,0.25)',
//                 WebkitTextFillColor: 'transparent',
//                 color: 'transparent',
//               }}>
//                 Rasheed
//               </div>
//               <div style={{
//                 fontFamily: 'var(--font-display)',
//                 fontSize: 'clamp(16px, 2.2vw, 26px)',
//                 fontWeight: 500,
//                 color: 'var(--accent)',
//                 letterSpacing: '-0.01em',
//                 marginTop: 8,
//               }}>
//                 Frontend Developer
//               </div>
//             </div>

//             {/* Bio */}
//             <p className="body-lg" style={{
//               maxWidth: 520, marginBottom: 36,
//               opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(20px)',
//               transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
//             }}>
//               I build interfaces people actually enjoy using — clean code, sharp visuals,
//               fast load times. React & Next.js are my tools; shipping polished products is the goal.
//             </p>

//             {/* CTAs */}
//             <div style={{
//               display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48,
//               opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(20px)',
//               transition: 'opacity 0.7s 0.3s, transform 0.7s 0.3s',
//             }}>
//               <a href="#projects" className="btn-accent">View My Work →</a>
//               <a href="#contact" className="btn-ghost">Let's Talk</a>
//             </div>

//             {/* Stats row */}
//             <div style={{
//               display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,3vw,40px)',
//               paddingTop: 28,
//               borderTop: '1px solid var(--line)',
//               opacity: show ? 1 : 0,
//               transition: 'opacity 0.7s 0.4s',
//             }}>
//               {[
//                 { val: '2+',    lab: 'Live Projects' },
//                 { val: 'MERN',  lab: 'Stack' },
//                 { val: '95+',   lab: 'Lighthouse Score' },
//                 { val: '∞',     lab: 'Attention to Detail' },
//               ].map(s => (
//                 <div key={s.val}>
//                   <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{s.val}</div>
//                   <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', marginTop: 3, letterSpacing: '0.06em' }}>{s.lab}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT — photo */}
//           <div style={{
//             display: 'flex', justifyContent: 'center', alignItems: 'center',
//             opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(30px)',
//             transition: 'opacity 0.9s 0.2s, transform 0.9s 0.2s',
//           }} className="hero-img-col">
//             <div style={{ position: 'relative', width: 'clamp(260px, 28vw, 420px)', aspectRatio: '3/4' }}>
//               {/* Border frame */}
//               <div style={{
//                 position: 'absolute', inset: 0,
//                 borderRadius: 24,
//                 background: 'linear-gradient(135deg, rgba(232,255,71,0.25), rgba(232,255,71,0.04), transparent)',
//                 padding: 2,
//               }}>
//                 <div style={{
//                   width: '100%', height: '100%',
//                   borderRadius: 22,
//                   background: 'var(--bg-raised)',
//                   overflow: 'hidden',
//                   position: 'relative',
//                 }}>
//                   <Image
//                     src="/uroojrasheed.png"
//                     alt="Urooj Rasheed"
//                     fill
//                     style={{ objectFit: 'cover', objectPosition: 'top center', filter: 'none' }}
//                     priority
//                     sizes="(max-width: 768px) 260px, 420px"
//                   />
//                   {/* Gradient overlay — bottom only, subtle */}
//                   <div style={{
//                     position: 'absolute', inset: 0,
//                     background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)',
//                     pointerEvents: 'none',
//                   }} />
//                 </div>
//               </div>

//               {/* Floating skill pill — top right */}
//               <div style={{
//                 position: 'absolute', top: -16, right: -20,
//                 background: 'var(--bg-raised)',
//                 border: '1px solid var(--line-hi)',
//                 borderRadius: 12, padding: '10px 16px',
//                 backdropFilter: 'blur(16px)',
//               }} className="anim-float">
//                 <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--grey)', marginBottom: 2 }}>Stack</div>
//                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em' }}>MERN</div>
//               </div>

//               {/* Floating pill — bottom left */}
//               <div style={{
//                 position: 'absolute', bottom: 24, left: -24,
//                 background: 'var(--accent)',
//                 borderRadius: 12, padding: '10px 16px',
//                 boxShadow: '0 8px 32px var(--accent-glow)',
//               }} className="anim-float" data-delay="1">
//                 <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(8,8,8,0.7)', marginBottom: 2 }}>Score</div>
//                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: '#080808', letterSpacing: '-0.02em' }}>95+ LH</div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Marquee tech strip */}
//         <div style={{
//           marginTop: 'clamp(48px,6vw,80px)',
//           overflow: 'hidden',
//           borderTop: '1px solid var(--line)',
//           borderBottom: '1px solid var(--line)',
//           padding: '14px 0',
//         }}>
//           <div className="marquee-track">
//             {[...skills, ...skills].map((s, i) => (
//               <span key={i} style={{
//                 fontFamily: 'var(--font-mono)', fontSize: 12,
//                 color: i % 3 === 0 ? 'var(--accent)' : 'var(--grey)',
//                 whiteSpace: 'nowrap', paddingRight: 48,
//                 letterSpacing: '0.06em',
//               }}>
//                 {i % 5 === 0 ? '◆ ' : '· '}{s}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @media (max-width: 860px) {
//           .hero-grid { grid-template-columns: 1fr !important; }
//           .hero-img-col { display: none !important; }
//         }
//       `}</style>
//     </section>
//   )
// }














"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'

const skills = ['React 18', 'Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'REST APIs', 'Figma→Code']

export default function Hero() {
  const [show, setShow] = useState(false)
  useEffect(() => { setTimeout(() => setShow(true), 80) }, [])

  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 72,
    }}>

      {/* BIG background text */}
      <div style={{
        position: 'absolute', bottom: '-2vw', left: '-1vw',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(100px, 18vw, 260px)',
        fontWeight: 800, lineHeight: 1,
        color: 'rgba(255,255,255,0.022)',
        letterSpacing: '-0.05em',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>FRONTEND</div>

      {/* Accent circle blur */}
      <div style={{
        position: 'absolute', top: '15%', right: '-5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: 40, paddingBottom: 80 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
          gap: 'clamp(40px,6vw,100px)',
          alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Status badge */}
            <div style={{
              opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.6s, transform 0.6s',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 16px',
              background: 'rgba(232,255,71,0.08)',
              border: '1px solid rgba(232,255,71,0.2)',
              borderRadius: 100,
              marginBottom: 28,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,0.25)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent)' }}>
                OPEN TO WORK — REMOTE / ONSITE
              </span>
            </div>

            {/* Heading */}
            <div style={{
              opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
              marginBottom: 24,
            }}>
              <div className="display-xl" style={{ color: 'var(--white)' }}>
                Urooj
              </div>
              <div className="display-xl" style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.25)',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}>
                Rasheed
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(16px, 2.2vw, 26px)',
                fontWeight: 500,
                color: 'var(--accent)',
                letterSpacing: '-0.01em',
                marginTop: 8,
              }}>
                Frontend Developer
              </div>
            </div>

            {/* Mobile image — shows between heading and bio on small screens */}
            <div className="hero-img-mobile" style={{
              display: 'none',
              justifyContent: 'center',
              marginBottom: 32,
              opacity: show ? 1 : 0,
              transition: 'opacity 0.9s 0.2s',
            }}>
              <div style={{
                position: 'relative',
                width: 200,
                height: 240,
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid rgba(232,255,71,0.2)',
              }}>
                <Image
                  src="/uroojrasheed.png"
                  alt="Urooj Rasheed"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                  sizes="200px"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }} />
              </div>
            </div>

            {/* Bio */}
            <p className="body-lg" style={{
              maxWidth: 520, marginBottom: 36,
              opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
            }}>
              I build interfaces people actually enjoy using — clean code, sharp visuals,
              fast load times. React & Next.js are my tools; shipping polished products is the goal.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48,
              opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.7s 0.3s, transform 0.7s 0.3s',
            }}>
              <a href="#projects" className="btn-accent">View My Work →</a>
              <a href="#contact" className="btn-ghost">Let's Talk</a>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,3vw,40px)',
              paddingTop: 28,
              borderTop: '1px solid var(--line)',
              opacity: show ? 1 : 0,
              transition: 'opacity 0.7s 0.4s',
            }}>
              {[
                { val: '2+',   lab: 'Live Projects' },
                { val: 'MERN', lab: 'Stack' },
                { val: '95+',  lab: 'Lighthouse Score' },
                { val: '∞',    lab: 'Attention to Detail' },
              ].map(s => (
                <div key={s.val}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{s.val}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--grey)', marginTop: 3, letterSpacing: '0.06em' }}>{s.lab}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — desktop only photo */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(30px)',
            transition: 'opacity 0.9s 0.2s, transform 0.9s 0.2s',
          }} className="hero-img-col">
            <div style={{ position: 'relative', width: 'clamp(260px, 28vw, 420px)', aspectRatio: '3/4' }}>
              {/* Border frame */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: 24,
                background: 'linear-gradient(135deg, rgba(232,255,71,0.25), rgba(232,255,71,0.04), transparent)',
                padding: 2,
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  borderRadius: 22,
                  background: 'var(--bg-raised)',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <Image
                    src="/uroojrasheed.png"
                    alt="Urooj Rasheed"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center', filter: 'none' }}
                    priority
                    sizes="(max-width: 768px) 260px, 420px"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }} />
                </div>
              </div>

              {/* Floating pill — top right */}
              <div style={{
                position: 'absolute', top: -16, right: -20,
                background: 'var(--bg-raised)',
                border: '1px solid var(--line-hi)',
                borderRadius: 12, padding: '10px 16px',
                backdropFilter: 'blur(16px)',
              }} className="anim-float">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--grey)', marginBottom: 2 }}>Stack</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em' }}>MERN</div>
              </div>

              {/* Floating pill — bottom left */}
              <div style={{
                position: 'absolute', bottom: 24, left: -24,
                background: 'var(--accent)',
                borderRadius: 12, padding: '10px 16px',
                boxShadow: '0 8px 32px var(--accent-glow)',
              }} className="anim-float">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(8,8,8,0.7)', marginBottom: 2 }}>Score</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: '#080808', letterSpacing: '-0.02em' }}>95+ LH</div>
              </div>
            </div>
          </div>

        </div>

        {/* Marquee tech strip */}
        <div style={{
          marginTop: 'clamp(48px,6vw,80px)',
          overflow: 'hidden',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '14px 0',
        }}>
          <div className="marquee-track">
            {[...skills, ...skills].map((s, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: i % 3 === 0 ? 'var(--accent)' : 'var(--grey)',
                whiteSpace: 'nowrap', paddingRight: 48,
                letterSpacing: '0.06em',
              }}>
                {i % 5 === 0 ? '◆ ' : '· '}{s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop: two column */
        /* Mobile: single column, hide desktop image col, show mobile image */
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-img-col { display: none !important; }
          .hero-img-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  )
}