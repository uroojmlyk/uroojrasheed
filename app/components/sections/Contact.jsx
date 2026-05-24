


// "use client";

// import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react'
// import Link from 'next/link'
// import { useState } from 'react'

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' })
//   const [status, setStatus] = useState(null)
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     await new Promise(r => setTimeout(r, 1000))
//     setStatus('success')
//     setForm({ name: '', email: '', message: '' })
//     setLoading(false)
//     setTimeout(() => setStatus(null), 5000)
//   }

//   return (
//     <section id="contact" style={{
//       background: 'var(--bg-2)',
//       padding: 'clamp(80px, 10vw, 128px) 0',
//       position: 'relative',
//     }}>
//       <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--border)' }} />

//       <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
//         {/* Header */}
//         <div style={{ marginBottom: '64px' }}>
//           <div className="section-tag" style={{ marginBottom: '16px' }}>Get In Touch</div>
//           <h2 style={{
//             fontFamily: 'DM Sans, sans-serif',
//             fontSize: 'clamp(32px, 5vw, 52px)',
//             fontWeight: 800,
//             letterSpacing: '-0.03em',
//             color: 'var(--text-primary)',
//             lineHeight: 1.1,
//           }}>
//             Let's Build<br /><span className="gradient-text">Together</span>
//           </h2>
//         </div>

//         <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>

//           {/* Left — Info */}
//           <div>
//             <p style={{
//               fontSize: '16px',
//               lineHeight: 1.75,
//               color: 'var(--text-secondary)',
//               marginBottom: '40px',
//               maxWidth: '440px',
//             }}>
//               Looking for a frontend developer who cares about both code quality and user experience?
//               I'm available for freelance projects, contract roles, and full-time positions.
//             </p>

//             {/* Contact details */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
//               {[
//                 { icon: <Mail size={16} />, label: 'Email', value: 'urooj.rasheed@email.com', href: 'mailto:urooj.rasheed@email.com' },
//                 { icon: <MapPin size={16} />, label: 'Location', value: 'Pakistan — Remote Friendly', href: null },
//               ].map((item) => (
//                 <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
//                   <div style={{
//                     width: '40px', height: '40px', borderRadius: '10px',
//                     background: 'var(--surface)',
//                     border: '1px solid var(--border)',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     color: 'var(--accent)',
//                     flexShrink: 0,
//                   }}>
//                     {item.icon}
//                   </div>
//                   <div>
//                     <div style={{ fontSize: '11px', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)', marginBottom: '2px' }}>{item.label}</div>
//                     {item.href ? (
//                       <a href={item.href} style={{ fontSize: '14px', color: 'var(--text-primary)', textDecoration: 'none' }}
//                         onMouseEnter={e => e.target.style.color = 'var(--accent)'}
//                         onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
//                       >{item.value}</a>
//                     ) : (
//                       <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{item.value}</span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Social links */}
//             <div style={{ display: 'flex', gap: '12px' }}>
//               {[
//                 { icon: <Github size={18} />, href: 'https://github.com/uroojmlyk', label: 'GitHub' },
//                 { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
//               ].map((social) => (
//                 <Link
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     display: 'inline-flex', alignItems: 'center', gap: '8px',
//                     padding: '10px 16px',
//                     background: 'var(--surface)',
//                     border: '1px solid var(--border)',
//                     borderRadius: '8px',
//                     fontSize: '13px',
//                     fontWeight: 500,
//                     color: 'var(--text-secondary)',
//                     textDecoration: 'none',
//                     transition: 'all 0.2s ease',
//                   }}
//                   onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,53,0.4)'; e.currentTarget.style.color = 'var(--text-primary)' }}
//                   onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
//                 >
//                   {social.icon} {social.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right — Form */}
//           <div style={{
//             background: 'var(--surface)',
//             border: '1px solid var(--border)',
//             borderRadius: '16px',
//             padding: 'clamp(24px, 4vw, 40px)',
//           }}>
//             <h3 style={{
//               fontFamily: 'DM Sans, sans-serif',
//               fontSize: '20px',
//               fontWeight: 700,
//               color: 'var(--text-primary)',
//               letterSpacing: '-0.01em',
//               marginBottom: '28px',
//             }}>
//               Send a Message
//             </h3>

//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//               {[
//                 { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
//                 { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
//               ].map((field) => (
//                 <div key={field.name}>
//                   <label style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     fontWeight: 600,
//                     color: 'var(--text-muted)',
//                     letterSpacing: '0.05em',
//                     textTransform: 'uppercase',
//                     marginBottom: '8px',
//                   }}>
//                     {field.label}
//                   </label>
//                   <input
//                     type={field.type}
//                     name={field.name}
//                     value={form[field.name]}
//                     onChange={handleChange}
//                     placeholder={field.placeholder}
//                     required
//                     style={{
//                       width: '100%',
//                       padding: '12px 16px',
//                       background: 'var(--bg-3)',
//                       border: '1px solid var(--border)',
//                       borderRadius: '8px',
//                       fontSize: '14px',
//                       color: 'var(--text-primary)',
//                       outline: 'none',
//                       fontFamily: 'DM Sans, sans-serif',
//                     }}
//                     onFocus={e => e.target.style.borderColor = 'rgba(255,107,53,0.5)'}
//                     onBlur={e => e.target.style.borderColor = 'var(--border)'}
//                   />
//                 </div>
//               ))}

//               <div>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '12px',
//                   fontWeight: 600,
//                   color: 'var(--text-muted)',
//                   letterSpacing: '0.05em',
//                   textTransform: 'uppercase',
//                   marginBottom: '8px',
//                 }}>
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project..."
//                   required
//                   rows={5}
//                   style={{
//                     width: '100%',
//                     padding: '12px 16px',
//                     background: 'var(--bg-3)',
//                     border: '1px solid var(--border)',
//                     borderRadius: '8px',
//                     fontSize: '14px',
//                     color: 'var(--text-primary)',
//                     outline: 'none',
//                     fontFamily: 'DM Sans, sans-serif',
//                     resize: 'vertical',
//                     minHeight: '120px',
//                   }}
//                   onFocus={e => e.target.style.borderColor = 'rgba(255,107,53,0.5)'}
//                   onBlur={e => e.target.style.borderColor = 'var(--border)'}
//                 />
//               </div>

//               {status === 'success' && (
//                 <div style={{
//                   padding: '12px 16px',
//                   background: 'rgba(34,197,94,0.1)',
//                   border: '1px solid rgba(34,197,94,0.25)',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   color: '#4ade80',
//                 }}>
//                   ✓ Message sent! I'll get back to you soon.
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn-primary"
//                 style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
//               >
//                 {loading ? 'Sending...' : (<><Send size={15} /> Send Message</>)}
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         @media (min-width: 900px) {
//           .contact-grid { grid-template-columns: 1fr 1fr !important; }
//         }
//         input::placeholder, textarea::placeholder { color: var(--text-muted); }
//       `}</style>
//     </section>
//   )
// }








"use client";
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setSent(true); setLoading(false)
    setForm({ name:'', email:'', message:'' })
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-card)' }}>
      <div style={{ height: 1, background: 'var(--line)' }} />
      <div className="container section-pad">

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Get In Touch</div>
          <h2 className="display-lg">Let's Build<br /><span className="hl">Together</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--grey-hi)', marginBottom: 40, maxWidth: 420 }}>
              Looking for a frontend developer who sweats the details — performance, accessibility, and clean code?
              I'm open to freelance projects, contract roles, and full-time positions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                { icon: Mail,    label: 'Email',    val: 'urooj.rasheed@email.com', href: 'mailto:urooj.rasheed@email.com' },
                { icon: MapPin,  label: 'Location', val: 'Pakistan — Remote Friendly', href: null },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: 'var(--bg)', border: '1px solid var(--line-hi)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)',
                    }}>
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--grey)', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ fontSize: 14, color: 'var(--white)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color='var(--accent)'}
                            onMouseLeave={e => e.target.style.color='var(--white)'}
                          >{item.val}</a>
                        : <span style={{ fontSize: 14, color: 'var(--grey-hi)' }}>{item.val}</span>
                      }
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: Github,   label: 'GitHub',   href: 'https://github.com/uroojmlyk' },
                { icon: Linkedin, label: 'LinkedIn',  href: 'https://linkedin.com' },
              ].map(s => {
                const Icon = s.icon
                return (
                  <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '10px 18px', fontSize: 13 }}>
                    <Icon size={15} /> {s.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 20, padding: 'clamp(24px,3vw,40px)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--white)', marginBottom: 28, letterSpacing: '-0.015em' }}>
              Send a Message
            </h3>

            {sent ? (
              <div style={{ padding: '20px 24px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 12, textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>✓</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#4ade80', marginBottom: 6 }}>Message sent!</div>
                <div style={{ fontSize: 13, color: 'var(--grey)' }}>I'll get back to you shortly.</div>
                <button onClick={() => setSent(false)} className="btn-ghost" style={{ marginTop: 16, fontSize: 13, padding: '8px 18px' }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { name: 'name',    label: 'Name',    type: 'text',  ph: 'Your name' },
                  { name: 'email',   label: 'Email',   type: 'email', ph: 'your@email.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--grey)', textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</label>
                    <input
                      type={f.type} name={f.name} value={form[f.name]}
                      onChange={e => setForm({...form, [f.name]: e.target.value})}
                      placeholder={f.ph} required
                      style={{
                        width: '100%', padding: '12px 16px',
                        background: 'var(--bg-raised)', border: '1px solid var(--line)',
                        borderRadius: 8, fontSize: 14, color: 'var(--white)',
                        fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(232,255,71,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'var(--line)'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--grey)', textTransform: 'uppercase', marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Tell me about your project, timeline, budget..."
                    required rows={5}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'var(--bg-raised)', border: '1px solid var(--line)',
                      borderRadius: 8, fontSize: 14, color: 'var(--white)',
                      fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical', minHeight: 110,
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(232,255,71,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'var(--line)'}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-accent" style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: var(--grey); }
      `}</style>
    </section>
  )
}