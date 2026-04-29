import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
      <div className="max-w-5xl mx-auto">
        <span className="block font-body text-xs tracking-[0.3em] uppercase text-[#714630] mb-4 text-center">
          Không gian
        </span>
        <h2 className="font-serif text-[#472f29] text-3xl md:text-5xl text-center mb-10 md:mb-16">
          Không Gian Quán
        </h2>

        {spaceImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {spaceImages.map((src, i) => (
              <div
                key={i}
                className="space-img group overflow-hidden aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={`Không gian 9611 Kafé ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                  loading="lazy"
                />
              </div>
            ))}
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
