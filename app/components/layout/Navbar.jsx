



// "use client";

// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { Menu, X } from 'lucide-react'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { name: 'Services', hash: '#services' },
//     { name: 'Projects', hash: '#projects' },
//     { name: 'Experience', hash: '#experiences' },
//     { name: 'Case Study', hash: '#casestudy' },
//     { name: 'Contact', hash: '#contact' },
//   ]

//   return (
//     <nav style={{
//       position: 'fixed',
//       top: 0,
//       width: '100%',
//       zIndex: 50,
//       transition: 'all 0.4s ease',
//       background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
//       backdropFilter: scrolled ? 'blur(20px)' : 'none',
//       borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
//     }}>
//       <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

//           {/* Logo */}
//           <Link href="/" style={{ textDecoration: 'none' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
//               <span style={{
//                 fontFamily: 'DM Sans, sans-serif',
//                 fontSize: '22px',
//                 fontWeight: 800,
//                 letterSpacing: '-0.02em',
//                 color: '#F0EDE8',
//               }}>Urooj</span>
//               <span style={{
//                 width: '6px',
//                 height: '6px',
//                 borderRadius: '50%',
//                 background: '#FF6B35',
//                 marginLeft: '2px',
//                 marginTop: '2px',
//                 display: 'inline-block',
//               }}></span>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.hash}
//                 style={{
//                   fontFamily: 'DM Sans, sans-serif',
//                   fontSize: '14px',
//                   fontWeight: 500,
//                   color: '#9A9690',
//                   textDecoration: 'none',
//                   transition: 'color 0.2s ease',
//                   letterSpacing: '0.01em',
//                 }}
//                 onMouseEnter={e => e.target.style.color = '#F0EDE8'}
//                 onMouseLeave={e => e.target.style.color = '#9A9690'}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <a
//               href="#contact"
//               className="btn-primary"
//               style={{ padding: '8px 20px', fontSize: '13px', borderRadius: '6px' }}
//             >
//               Hire Me
//             </a>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="mobile-menu-btn"
//             style={{
//               background: 'rgba(255,255,255,0.06)',
//               border: '1px solid rgba(255,255,255,0.1)',
//               borderRadius: '8px',
//               width: '40px',
//               height: '40px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               color: '#F0EDE8',
//             }}
//           >
//             {isOpen ? <X size={18} /> : <Menu size={18} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div style={{
//           background: 'rgba(20,20,20,0.98)',
//           backdropFilter: 'blur(20px)',
//           borderTop: '1px solid rgba(255,255,255,0.08)',
//           padding: '16px 24px 24px',
//           animation: 'fadeIn 0.2s ease',
//         }}>
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.hash}
//               onClick={() => setIsOpen(false)}
//               style={{
//                 display: 'block',
//                 padding: '14px 0',
//                 fontFamily: 'DM Sans, sans-serif',
//                 fontSize: '16px',
//                 fontWeight: 500,
//                 color: '#9A9690',
//                 textDecoration: 'none',
//                 borderBottom: '1px solid rgba(255,255,255,0.05)',
//               }}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <a
//             href="#contact"
//             onClick={() => setIsOpen(false)}
//             className="btn-primary"
//             style={{ marginTop: '16px', width: '100%', justifyContent: 'center', fontSize: '14px' }}
//           >
//             Hire Me
//           </a>
//         </div>
//       )}

//       <style jsx>{`
//         @media (min-width: 768px) {
//           .mobile-menu-btn { display: none !important; }
//           .desktop-nav { display: flex !important; }
//         }
//         @media (max-width: 767px) {
//           .mobile-menu-btn { display: flex !important; }
//           .desktop-nav { display: none !important; }
//         }
//       `}</style>
//     </nav>
//   )
// }







"use client";
import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Services',   href: '#services' },
  { label: 'Work',       href: '#projects' },
  { label: 'Experience', href: '#experiences' },
  { label: 'Case Study', href: '#casestudy' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: 6,
              background: 'var(--accent)', color: '#080808',
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
              letterSpacing: '-0.03em',
            }}>U</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--white)', letterSpacing: '-0.02em' }}>
              Urooj<span style={{ color: 'var(--grey)' }}>.dev</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {links.map(l => (
              <Link key={l.label} href={l.href} style={{
                fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500,
                color: 'var(--grey)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'var(--grey)'}
              >{l.label}</Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="#contact" className="btn-accent" style={{ padding: '9px 20px', fontSize: 13 }} id="nav-cta">
              Hire Me →
            </a>
            <button
              onClick={() => setOpen(o => !o)}
              id="hamburger"
              style={{
                background: 'var(--bg-raised)', border: '1px solid var(--line-hi)',
                borderRadius: 8, width: 40, height: 40,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
                cursor: 'pointer',
              }}
            >
              {[0,1].map(i => (
                <span key={i} style={{
                  display: 'block', height: 1.5, borderRadius: 2,
                  background: open ? 'var(--accent)' : 'var(--white)',
                  transition: 'all 0.25s',
                  width: i === 0 ? (open ? 18 : 18) : (open ? 18 : 12),
                  transform: open ? (i === 0 ? 'rotate(45deg) translate(2.5px,2.5px)' : 'rotate(-45deg) translate(2.5px,-2.5px)') : 'none',
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
          background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--line)',
          animation: 'fadeIn 0.2s ease',
        }}>
          <div className="container" style={{ padding: '20px clamp(20px,4vw,56px) 28px' }}>
            {links.map(l => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                display: 'block', padding: '14px 0',
                fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700,
                color: 'var(--grey-hi)', textDecoration: 'none',
                borderBottom: '1px solid var(--line)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--grey-hi)'}
              >{l.label}</Link>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-accent" style={{ marginTop: 20, width: '100%', justifyContent: 'center', fontSize: 15 }}>
              Let's Work Together →
            </a>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 768px) { #hamburger { display: none !important; } }
        @media (max-width: 767px) { .nav-desktop { display: none !important; } #nav-cta { display: none !important; } }
      `}</style>
    </>
  )
}