import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/9611kafe/',
    icon: <InstagramIcon />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/9611-Kafé/61585109667366/',
    icon: <FacebookIcon />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@9611kafe',
    icon: <TikTokIcon />,
    placeholder: false,
  },
]

export default function SocialSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.social-icon-wrap', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} className="bg-[#f0d8be] py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="block font-body text-xs tracking-[0.3em] uppercase text-[#714630] mb-4">
          Theo dõi tụi mình tại Đây
        </span>
        <h2 className="font-serif text-[#472f29] text-2xl md:text-4xl mb-10 md:mb-12">
          9611 Kafé
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {socialLinks.map(({ label, href, icon, placeholder }) => (
            <a
              key={label}
              href={href}
              target={placeholder ? undefined : '_blank'}
              rel={placeholder ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={[
                'social-icon-wrap flex flex-col items-center gap-2 group touch-manipulation',
                placeholder ? 'opacity-40 cursor-not-allowed pointer-events-none' : '',
              ].join(' ')}
            >
              <span className="w-14 h-14 flex items-center justify-center text-[#472f29] transition-all duration-300 group-hover:text-[#714630] group-hover:scale-110">
                {icon}
              </span>
              <span className="font-body text-xs tracking-widest uppercase text-[#5b594e] group-hover:text-[#472f29] transition-colors duration-200">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function InstagramIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}
