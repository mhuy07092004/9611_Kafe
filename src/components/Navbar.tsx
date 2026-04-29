import { useEffect, useRef, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#f0d8be]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(113,70,48,0.12)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo — code-based */}
        <a href="#home" className="flex-shrink-0 flex items-center gap-2.5 select-none group">
          {/* Coffee cup mark */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className={[
              'transition-all duration-500 flex-shrink-0',
              scrolled ? 'text-[#714630]' : 'text-[#f0d8be]',
            ].join(' ')}
          >
            {/* cup body */}
            <path
              d="M7 10h14l-2 12H9L7 10Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
              fill="none"
            />
            {/* handle */}
            <path
              d="M21 13h2a2.5 2.5 0 0 1 0 5h-2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* saucer */}
            <path
              d="M5 22h18"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* steam */}
            <path
              d="M12 7 Q12.5 5.5 12 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M16 7 Q16.5 5.5 16 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span
              className={[
                'font-serif text-xl tracking-tight transition-colors duration-500',
                scrolled ? 'text-[#472f29]' : 'text-[#f0d8be]',
              ].join(' ')}
            >
              9611
            </span>
            <span
              className={[
                'font-body text-[9px] tracking-[0.3em] uppercase mt-0.5 transition-colors duration-500',
                scrolled ? 'text-[#714630]' : 'text-[#f0d8be]/70',
              ].join(' ')}
            >
              Kafé
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={[
                  'font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300',
                  scrolled
                    ? 'text-[#472f29] hover:text-[#714630]'
                    : 'text-[#f0d8be] hover:text-white drop-shadow',
                ].join(' ')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-1 touch-manipulation"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={[
              'block w-6 h-px transition-all duration-300 origin-center',
              scrolled ? 'bg-[#472f29]' : 'bg-[#f0d8be]',
              menuOpen ? 'rotate-45 translate-y-[6px]' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-6 h-px transition-all duration-300',
              scrolled ? 'bg-[#472f29]' : 'bg-[#f0d8be]',
              menuOpen ? 'opacity-0 scale-x-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-6 h-px transition-all duration-300 origin-center',
              scrolled ? 'bg-[#472f29]' : 'bg-[#f0d8be]',
              menuOpen ? '-rotate-45 -translate-y-[6px]' : '',
            ].join(' ')}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300',
          scrolled ? 'bg-[#f0d8be]/95 backdrop-blur-md' : 'bg-[#1a0d07]/80 backdrop-blur-md',
          menuOpen ? 'max-h-64 pb-6' : 'max-h-0',
        ].join(' ')}
      >
        <ul className="flex flex-col gap-1 px-6 pt-2">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  'block py-3 font-body text-xs tracking-[0.2em] uppercase transition-colors touch-manipulation',
                  scrolled
                    ? 'text-[#472f29] hover:text-[#714630]'
                    : 'text-[#f0d8be] hover:text-white',
                ].join(' ')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
