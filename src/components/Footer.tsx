import { socialLinks } from './SocialSection'

export default function Footer() {
  return (
    <footer className="bg-[#472f29] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-[#f0d8be] text-xl tracking-wide mb-1">9611 Kafé</p>
          <p className="font-body text-[#f0d8be]/40 text-xs tracking-wide">
            © 2025 9611 Kafé. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href, icon, placeholder }) => (
            <a
              key={label}
              href={href}
              target={placeholder ? undefined : '_blank'}
              rel={placeholder ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={[
                'text-[#f0d8be]/50 hover:text-[#f0d8be] transition-all duration-200 hover:scale-110',
                placeholder ? 'opacity-30 cursor-not-allowed pointer-events-none' : '',
              ].join(' ')}
            >
              <span className="w-5 h-5 block [&_svg]:w-5 [&_svg]:h-5">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
