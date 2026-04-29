import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ImageLightbox from './ImageLightbox'

gsap.registerPlugin(ScrollTrigger)

const spaceImages = Object.values(
  import.meta.glob('../assets/spaces/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>,
)

export default function Spaces() {
  const containerRef = useRef<HTMLElement>(null)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useGSAP(
    () => {
      if (spaceImages.length === 0) return
      gsap.from('.space-img', {
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 72%',
          once: true,
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <section ref={containerRef} className="bg-[#f0d8be] py-16 md:py-28 px-4 sm:px-6">
      <ImageLightbox
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ''}
      />
      <div className="max-w-5xl mx-auto">
        <span className="block font-body text-xs tracking-[0.3em] uppercase text-[#714630] mb-4 text-center">
          9611 Kafé
        </span>
        <h2 className="font-serif text-[#472f29] text-3xl md:text-5xl text-center mb-10 md:mb-16">
          Không Gian Của Quán
        </h2>

        {spaceImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {spaceImages.map((src, i) => {
              const alt = `Không gian 9611 Kafé ${i + 1}`
              return (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setLightbox({ src, alt })}
                  className="space-img group relative w-full overflow-hidden aspect-[4/3] bg-[#e8c9a0] block cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#472f29]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0d8be]"
                  aria-label={`Xem ảnh lớn — ${alt}`}
                >
                  <img
                    src={src}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl"
                    loading="lazy"
                  />
                </button>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="space-img group overflow-hidden aspect-[4/3] bg-[#e8c9a0] flex items-center justify-center"
              >
                <span className="font-serif text-[#714630]/40 text-4xl select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
