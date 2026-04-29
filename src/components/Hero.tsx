import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import bgImage from '../assets/background.jpg'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '.hero-title',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.1 },
      )
        .fromTo(
          '.hero-slogan',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.5',
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5',
        )
    },
    { scope: containerRef },
  )

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0d07]/60 via-[#2a1510]/40 to-[#1a0d07]/70" />

      <div className="relative z-10 px-6 max-w-2xl mx-auto">
        <h1 className="hero-title font-serif text-[#f0d8be] text-6xl sm:text-8xl md:text-[11rem] leading-none tracking-tight select-none">
          9611
        </h1>
        <p className="hero-slogan mt-5 md:mt-6 font-body text-[#f0d8be]/90 text-base md:text-xl leading-relaxed tracking-wide px-2">
          Nơi bạn chọn cách trọn vẹn cho riêng mình.
        </p>
        <a
          href="#menu"
          className="hero-cta inline-block mt-8 md:mt-10 px-8 py-4 min-h-[48px] border border-[#f0d8be]/60 text-[#f0d8be] font-body text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-[#f0d8be] hover:text-[#472f29] active:bg-[#f0d8be] active:text-[#472f29] transition-all duration-300 touch-manipulation"
        >
          Xem Menu
        </a>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-body text-[#f0d8be] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-[#f0d8be] animate-pulse" />
      </div>
    </section>
  )
}
