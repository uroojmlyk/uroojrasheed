



// import './globals.css'
// import Navbar from './components/layout/Navbar'
// import Footer from './components/layout/Footer'
// import GhostChatWidget from './components/GhostChatWidget'

// export const metadata = {
//   title: 'Urooj Rasheed — Frontend Developer',
//   description: 'Frontend Developer specializing in React, Next.js & modern web interfaces. Building performant, pixel-perfect digital experiences.',
//   keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'MERN Stack', 'UI Developer', 'Web Developer Pakistan'],
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//         <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
//       </head>
//       <body>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//         <GhostChatWidget />
//       </body>
//     </html>
//   )
// }







import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import GhostChatWidget from './components/GhostChatWidget'

export const metadata = {
  title: 'Urooj Rasheed — Frontend Developer',
  description: 'Frontend Developer specializing in React, Next.js & pixel-perfect UI. Available for freelance & full-time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="noise">
        <Navbar />
        {children}
        <Footer />
        <GhostChatWidget />
      </body>
    </html>
  )
}