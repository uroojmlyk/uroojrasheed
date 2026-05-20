

// "use client";

// import Image from 'next/image'
// import { useEffect, useRef } from 'react'

// export default function Hero() {
//   const textRef = useRef(null)
//   const imageRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY
//       if (textRef.current) {
//         textRef.current.style.transform = `translateX(${scrolled * 0.05}px)`
//       }
//       if (imageRef.current) {
//         imageRef.current.style.transform = `translateY(${scrolled * 0.03}px)`
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, ''))
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* ANIMATED BACKGROUND - REDUCED FOR PERFORMANCE */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>
      
//       {/* MAIN CONTENT */}
//       <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
//         <div className="w-full max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            
//             {/* LEFT SIDE - TEXT */}
//             <div ref={textRef} className="w-full lg:w-1/2 text-center lg:text-left">
//               <h1 className="text-[55px] sm:text-[75px] md:text-[100px] lg:text-[130px] xl:text-[160px] font-black leading-[0.85] text-[#FF8A5C]/90 tracking-[-0.03em] select-none">
//                 UROOJ
//               </h1>
              
//               <div className="mt-3 sm:mt-4">
//                 <span className="block text-[#333333] text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
//                   FULL STACK DEVELOPER
//                 </span>
//                 <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mt-2 sm:mt-3">
//                   {['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'MongoDB', 'PostgreSQL'].map((tech) => (
//                     <span key={tech} className="text-[#666666] text-[10px] sm:text-xs font-mono border border-[#FF8A5C]/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* STATS */}
//               <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#CCCCCC]/50">
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">2+</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs">Years Experience</div>
//                 </div>
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">5+</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs">Projects Done</div>
//                 </div>
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">100%</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs">Satisfaction</div>
//                 </div>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8">
//                 <button 
//                   onClick={() => scrollToSection('projects')}
//                   className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#FF8A5C] text-white font-semibold rounded-lg hover:bg-[#FF6B3A] transition-all duration-300 text-xs sm:text-sm"
//                 >
//                   View Projects →
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('contact')}
//                   className="px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#FF8A5C] text-[#FF8A5C] font-semibold rounded-lg hover:bg-[#FF8A5C] hover:text-white transition-all duration-300 text-xs sm:text-sm"
//                 >
//                   Contact Me
//                 </button>
//               </div>
//             </div>
            
//             {/* RIGHT SIDE - CIRCLE IMAGE */}
//             <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-[#FF8A5C]/20 rounded-full blur-3xl animate-pulse"></div>
                
//                 <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-[#FF8A5C]/60 shadow-[0_0_40px_rgba(255,138,92,0.4)] bg-black">
//                   <Image 
//                     src="/uroojrasheed.png" 
//                     alt="Urooj Rasheed - Full Stack Developer"
//                     fill
//                     className="object-cover object-center"
//                     priority
//                     sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 350px"
//                   />
//                 </div>
                
//                 {/* WEB DEVELOPMENT FLOATING ICONS - REPLACED */}
//                 {/* React - Frontend */}
//                 <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow">
//                   <span className="text-lg sm:text-2xl">⚛️</span>
//                 </div>
                
//                 {/* JavaScript - Core Language */}
//                 <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow delay-150">
//                   <span className="text-sm sm:text-xl font-bold text-[#F7DF1E]">JS</span>
//                 </div>
                
//                 {/* Node.js - Backend */}
//                 <div className="absolute top-1/2 -right-6 sm:-right-7 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-pulse-slow">
//                   <span className="text-sm sm:text-lg">💚</span>
//                 </div>
                
//                 {/* Git - Version Control */}
//                 <div className="absolute top-1/3 -left-6 sm:-left-7 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-float-slow">
//                   <span className="text-sm sm:text-lg">📦</span>
//                 </div>
                
//                 {/* Database - MongoDB */}
//                 <div className="absolute bottom-1/3 -right-5 sm:-right-6 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-pulse-slow delay-300">
//                   <span className="text-xs sm:text-base">🍃</span>
//                 </div>
                
//                 {/* TypeScript - Type Safety */}
//                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow delay-300">
//                   <span className="text-xs sm:text-base font-bold text-[#3178C6]">TS</span>
//                 </div>

//                 {/* HTML/CSS Icons */}
//                 <div className="absolute top-0 -left-4 sm:-left-5 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-float-slow delay-150">
//                   <span className="text-xs sm:text-base">🌐</span>
//                 </div>
                
//                 {/* Decorative Dots - Minimal */}
//                 <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#FF8A5C] rounded-full animate-ping"></div>
//                 <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-[#A0A0A0] rounded-full animate-pulse"></div>
//                 <div className="absolute top-1/3 -right-4 w-2 h-2 border border-[#FF8A5C]/50 rounded-full animate-spin-slow"></div>
//                 <div className="absolute bottom-1/3 -left-4 w-1.5 h-1.5 bg-[#FF8A5C]/40 rounded-full animate-bounce"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-6px); }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.7; transform: scale(1.05); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-4px) translateX(3px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 2s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float-slow 4s ease-in-out infinite;
//         }
//         .delay-150 {
//           animation-delay: 0.5s;
//         }
//         .delay-300 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   )
// }







// "use client";

// import Image from 'next/image'
// import { useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'

// export default function Hero() {
//   const textRef = useRef(null)
//   const imageRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY
//       if (textRef.current) {
//         textRef.current.style.transform = `translateX(${scrolled * 0.03}px)`
//       }
//       if (imageRef.current) {
//         imageRef.current.style.transform = `translateY(${scrolled * 0.02}px)`
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, ''))
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
//       {/* BACKGROUND - Clean, no animations */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* SOFT GLOW - Minimal, no pulse */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//       </div>
      
//       {/* MAIN CONTENT */}
//       <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
//         <div className="w-full max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            
//             {/* LEFT SIDE - TEXT with entrance animation */}
//             <motion.div 
//               ref={textRef}
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="w-full lg:w-1/2 text-center lg:text-left"
//             >
//               <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-black leading-[0.85] text-[#FF8A5C] tracking-[-0.03em] select-none">
//                 UROOJ
//               </h1>
              
//               <div className="mt-3 sm:mt-4">
//                 <span className="block text-[#333333] text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
//                   FULL STACK DEVELOPER
//                 </span>
                
//                 {/* CLEAN TECH STACK - Only 4 core technologies */}
//                 <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mt-3 sm:mt-4">
//                   {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, index) => (
//                     <motion.span 
//                       key={tech}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
//                       className="text-[#666666] text-[10px] sm:text-xs font-mono border border-[#FF8A5C]/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded hover:border-[#FF8A5C]/60 hover:bg-[#FF8A5C]/5 transition-all duration-300"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>

//               {/* HUMBLE + CONFIDENT STATS - No "Expert", No fake years */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#CCCCCC]/50"
//               >
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">5+</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">Projects Built & Deployed</div>
//                 </div>
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">MERN</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">React & Node.js Stack</div>
//                 </div>
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">UI/UX</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">Clean Modern Design</div>
//                 </div>
//               </motion.div>

//               {/* BUTTONS with hover effects */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.6 }}
//                 className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8"
//               >
//                 <button 
//                   onClick={() => scrollToSection('projects')}
//                   className="group px-5 sm:px-6 py-2 sm:py-2.5 bg-[#FF8A5C] text-white font-semibold rounded-lg hover:bg-[#FF6B3A] hover:scale-105 transition-all duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg"
//                 >
//                   View Projects →
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('contact')}
//                   className="group px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#FF8A5C] text-[#FF8A5C] font-semibold rounded-lg hover:bg-[#FF8A5C] hover:text-white hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
//                 >
//                   Contact Me
//                 </button>
//               </motion.div>
//             </motion.div>
            
//             {/* RIGHT SIDE - IMAGE with entrance animation */}
//             <motion.div 
//               ref={imageRef}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0"
//             >
//               <div className="relative group">
//                 {/* SOFT GLOW - No pulse animation */}
//                 <div className="absolute inset-0 bg-[#FF8A5C]/10 rounded-full blur-2xl group-hover:bg-[#FF8A5C]/15 transition-all duration-500"></div>
                
//                 {/* IMAGE CONTAINER with FLOAT animation ONLY */}
//                 <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-[#FF8A5C]/60 shadow-[0_0_30px_rgba(255,138,92,0.3)] group-hover:shadow-[0_0_40px_rgba(255,138,92,0.4)] transition-all duration-500 animate-float">
//                   <Image 
//                     src="/uroojrasheed.png" 
//                     alt="Urooj Rasheed - Full Stack Developer"
//                     fill
//                     className="object-cover object-center"
//                     priority
//                     sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 350px"
//                   />
//                 </div>
                
//                 {/* ONLY 3 FLOATING TECH ICONS - React, Next, Node */}
//                 {/* React Icon */}
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                   className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow"
//                 >
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" stroke="#61DAFB" strokeWidth="1.5"/>
//                     <path d="M12 3.5C9.5 3.5 7 4.5 5.5 6.5C3 9.5 3 13.5 5.5 16.5C7 18.5 9.5 19.5 12 19.5C14.5 19.5 17 18.5 18.5 16.5C21 13.5 21 9.5 18.5 6.5C17 4.5 14.5 3.5 12 3.5Z" stroke="#61DAFB" strokeWidth="1.5"/>
//                     <path d="M8 7.5C9.5 5.5 12 4.5 14.5 5.5C17 6.5 18.5 9.5 18.5 12.5C18.5 15.5 17 18.5 14.5 19.5C12 20.5 9.5 19.5 8 17.5" stroke="#61DAFB" strokeWidth="1.5"/>
//                   </svg>
//                 </motion.div>
                
//                 {/* Next.js Icon */}
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5, duration: 0.5 }}
//                   className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow-delay"
//                 >
//                   <span className="text-sm sm:text-base font-bold text-black">N</span>
//                 </motion.div>
                
//                 {/* Node.js Icon */}
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.7, duration: 0.5 }}
//                   className="absolute top-1/2 -right-6 sm:-right-7 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow-delay-2"
//                 >
//                   <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 2L3 7.5L12 13L21 7.5L12 2Z" stroke="#68A063" strokeWidth="1.5" strokeLinejoin="round"/>
//                     <path d="M3 12L12 17.5L21 12" stroke="#68A063" strokeWidth="1.5" strokeLinejoin="round"/>
//                     <path d="M3 16.5L12 22L21 16.5" stroke="#68A063" strokeWidth="1.5" strokeLinejoin="round"/>
//                   </svg>
//                 </motion.div>

//                 {/* MINIMAL DECORATIVE DOTS - Static, no animations */}
//                 <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-[#FF8A5C]/30 rounded-full"></div>
//                 <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-[#A0A0A0]/30 rounded-full"></div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-6px) translateX(3px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float-slow 5s ease-in-out infinite;
//         }
//         .animate-float-slow-delay {
//           animation: float-slow 5s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//         .animate-float-slow-delay-2 {
//           animation: float-slow 5s ease-in-out infinite;
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   )
// }











// "use client";

// import Image from 'next/image'
// import { useEffect, useRef, useState } from 'react'

// export default function Hero() {
//   const textRef = useRef(null)
//   const imageRef = useRef(null)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     // Entrance animation trigger
//     setIsVisible(true)
    
//     const handleScroll = () => {
//       const scrolled = window.scrollY
//       if (textRef.current) {
//         textRef.current.style.transform = `translateX(${scrolled * 0.03}px)`
//       }
//       if (imageRef.current) {
//         imageRef.current.style.transform = `translateY(${scrolled * 0.02}px)`
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, ''))
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
//       {/* BACKGROUND - Clean */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* SOFT GLOW - Minimal, no pulse */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//       </div>
      
//       {/* MAIN CONTENT */}
//       <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
//         <div className="w-full max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            
//             {/* LEFT SIDE - TEXT with entrance animation */}
//             <div 
//               ref={textRef}
//               className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out ${
//                 isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
//               }`}
//             >
//               <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-black leading-[0.85] text-[#FF8A5C] tracking-[-0.03em] select-none">
//                 UROOJ
//               </h1>
              
//               <div className="mt-3 sm:mt-4">
//                 <span className="block text-[#333333] text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
//                   FULL STACK DEVELOPER
//                 </span>
                
//                 {/* CLEAN TECH STACK - Only 4 core technologies */}
//                 <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mt-3 sm:mt-4">
//                   {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, index) => (
//                     <span 
//                       key={tech}
//                       className={`text-[#666666] text-[10px] sm:text-xs font-mono border border-[#FF8A5C]/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded hover:border-[#FF8A5C]/60 hover:bg-[#FF8A5C]/5 transition-all duration-300 transition-all duration-700 ease-out ${
//                         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                       }`}
//                       style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* HUMBLE + CONFIDENT STATS - No "Expert", No fake years */}
//               <div 
//                 className={`flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#CCCCCC]/50 transition-all duration-700 ease-out delay-300 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//                 }`}
//               >
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">5+</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">Projects Built & Deployed</div>
//                 </div>
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">MERN</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">React & Node.js Stack</div>
//                 </div>
//                 <div>
//                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">UI/UX</div>
//                   <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">Clean Modern Design</div>
//                 </div>
//               </div>

//               {/* BUTTONS with hover effects */}
//               <div 
//                 className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8 transition-all duration-700 ease-out delay-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//                 }`}
//               >
//                 <button 
//                   onClick={() => scrollToSection('projects')}
//                   className="group px-5 sm:px-6 py-2 sm:py-2.5 bg-[#FF8A5C] text-white font-semibold rounded-lg hover:bg-[#FF6B3A] hover:scale-105 transition-all duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg"
//                 >
//                   View Projects →
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('contact')}
//                   className="group px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#FF8A5C] text-[#FF8A5C] font-semibold rounded-lg hover:bg-[#FF8A5C] hover:text-white hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
//                 >
//                   Contact Me
//                 </button>
//               </div>
//             </div>
            
//             {/* RIGHT SIDE - IMAGE with entrance animation */}
//             <div 
//               ref={imageRef}
//               className={`w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0 transition-all duration-1000 ease-out ${
//                 isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//               }`}
//             >
//               <div className="relative group">
//                 {/* SOFT GLOW - No pulse animation */}
//                 <div className="absolute inset-0 bg-[#FF8A5C]/10 rounded-full blur-2xl group-hover:bg-[#FF8A5C]/15 transition-all duration-500"></div>
                
//                 {/* IMAGE CONTAINER with FLOAT animation ONLY */}
//                 <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-[#FF8A5C]/60 shadow-[0_0_30px_rgba(255,138,92,0.3)] group-hover:shadow-[0_0_40px_rgba(255,138,92,0.4)] transition-all duration-500 animate-float">
//                   <Image 
//                     src="/uroojrasheed.png" 
//                     alt="Urooj Rasheed - Full Stack Developer"
//                     fill
//                     className="object-cover object-center"
//                     priority
//                     sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 350px"
//                   />
//                 </div>
                
//                 {/* ONLY 3 FLOATING TECH ICONS - React, Next, Node */}
//                 {/* React Icon */}
//                 <div 
//                   className={`absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow transition-all duration-700 ease-out ${
//                     isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
//                   }`}
//                   style={{ transitionDelay: '0.3s' }}
//                 >
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" stroke="#61DAFB" strokeWidth="1.5"/>
//                     <path d="M12 3.5C9.5 3.5 7 4.5 5.5 6.5C3 9.5 3 13.5 5.5 16.5C7 18.5 9.5 19.5 12 19.5C14.5 19.5 17 18.5 18.5 16.5C21 13.5 21 9.5 18.5 6.5C17 4.5 14.5 3.5 12 3.5Z" stroke="#61DAFB" strokeWidth="1.5"/>
//                     <path d="M8 7.5C9.5 5.5 12 4.5 14.5 5.5C17 6.5 18.5 9.5 18.5 12.5C18.5 15.5 17 18.5 14.5 19.5C12 20.5 9.5 19.5 8 17.5" stroke="#61DAFB" strokeWidth="1.5"/>
//                   </svg>
//                 </div>
                
//                 {/* Next.js Icon */}
//                 <div 
//                   className={`absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow-delay transition-all duration-700 ease-out ${
//                     isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
//                   }`}
//                   style={{ transitionDelay: '0.5s' }}
//                 >
//                   <span className="text-sm sm:text-base font-bold text-black">N</span>
//                 </div>
                
//                 {/* Node.js Icon */}
//                 <div 
//                   className={`absolute top-1/2 -right-6 sm:-right-7 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow-delay-2 transition-all duration-700 ease-out ${
//                     isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
//                   }`}
//                   style={{ transitionDelay: '0.7s' }}
//                 >
//                   <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 2L3 7.5L12 13L21 7.5L12 2Z" stroke="#68A063" strokeWidth="1.5" strokeLinejoin="round"/>
//                     <path d="M3 12L12 17.5L21 12" stroke="#68A063" strokeWidth="1.5" strokeLinejoin="round"/>
//                     <path d="M3 16.5L12 22L21 16.5" stroke="#68A063" strokeWidth="1.5" strokeLinejoin="round"/>
//                   </svg>
//                 </div>

//                 {/* MINIMAL DECORATIVE DOTS - Static, no animations */}
//                 <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-[#FF8A5C]/30 rounded-full"></div>
//                 <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-[#A0A0A0]/30 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-6px) translateX(3px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float-slow 5s ease-in-out infinite;
//         }
//         .animate-float-slow-delay {
//           animation: float-slow 5s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//         .animate-float-slow-delay-2 {
//           animation: float-slow 5s ease-in-out infinite;
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   )
// }








"use client";

import Image from 'next/image'
import { useState } from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useState(() => {
    // Entrance animation trigger
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
      {/* BACKGROUND - Clean */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* SOFT GLOW - Minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            
            {/* LEFT SIDE - TEXT with entrance animation */}
            <div 
              className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[110px] xl:text-[130px] font-black leading-[0.85] text-[#FF8A5C] tracking-[-0.03em] select-none">
                UROOJ
              </h1>
              
              <div className="mt-3 sm:mt-4">
                {/* NEW TITLE - MERN STACK DEVELOPER instead of generic FULL STACK */}
                <span className="block text-[#333333] text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                  MERN STACK DEVELOPER
                </span>
                
                {/* CLEAN TECH STACK - Only 4 core technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mt-3 sm:mt-4">
                  {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, index) => (
                    <span 
                      key={tech}
                      className={`text-[#666666] text-[10px] sm:text-xs font-mono border border-[#FF8A5C]/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded hover:border-[#FF8A5C]/60 hover:bg-[#FF8A5C]/5 transition-all duration-300 transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* HUMBLE STATS - Confident but not fake */}
              <div 
                className={`flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#CCCCCC]/50 transition-all duration-700 ease-out delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">5+</div>
                  <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">Projects Built & Deployed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">MERN</div>
                  <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">Full Stack Focus</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">UI/UX</div>
                  <div className="text-[#666666] text-[10px] sm:text-xs tracking-wide">Clean Interfaces</div>
                </div>
              </div>

              {/* BUTTONS */}
              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8 transition-all duration-700 ease-out delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group px-5 sm:px-6 py-2 sm:py-2.5 bg-[#FF8A5C] text-white font-semibold rounded-lg hover:bg-[#FF6B3A] hover:scale-105 transition-all duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg"
                >
                  View Projects →
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#FF8A5C] text-[#FF8A5C] font-semibold rounded-lg hover:bg-[#FF8A5C] hover:text-white hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                >
                  Contact Me
                </button>
              </div>
            </div>
            
            {/* RIGHT SIDE - IMAGE with entrance animation - NO SCROLL PARALLAX */}
            <div 
              className={`w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="relative group">
                {/* SOFT GLOW */}
                <div className="absolute inset-0 bg-[#FF8A5C]/10 rounded-full blur-2xl group-hover:bg-[#FF8A5C]/15 transition-all duration-500"></div>
                
                {/* IMAGE CONTAINER with FLOAT animation ONLY */}
                <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-[#FF8A5C]/60 shadow-[0_0_30px_rgba(255,138,92,0.3)] group-hover:shadow-[0_0_40px_rgba(255,138,92,0.4)] transition-all duration-500 animate-float">
                  <Image 
                    src="/uroojrasheed.png" 
                    alt="Urooj Rasheed - MERN Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                  />
                </div>
                
                {/* ONLY 3 FLOATING ICONS - Using react-icons library */}
                {/* React Icon - Repositioned for better mobile spacing */}
                <div 
                  className={`absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  <FaReact className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#61DAFB]" />
                </div>
                
                {/* Next.js Icon - Repositioned */}
                <div 
                  className={`absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow-delay transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: '0.5s' }}
                >
                  <RiNextjsFill className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                </div>
                
                {/* Node.js Icon - Repositioned */}
                <div 
                  className={`absolute top-1/2 -right-5 sm:-right-6 md:-right-7 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center shadow-md border border-[#FF8A5C]/30 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-float-slow-delay-2 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: '0.7s' }}
                >
                  <FaNodeJs className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#68A063]" />
                </div>

                {/* MINIMAL DECORATIVE DOTS - Static */}
                <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-[#FF8A5C]/30 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-[#A0A0A0]/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(3px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-slow-delay {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow-delay-2 {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}