import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { id: 1, name: 'Tên Món 01', desc: 'Mô tả ngắn về món uống này.', price: 'xx.000đ' },
  { id: 2, name: 'Tên Món 02', desc: 'Mô tả ngắn về món uống này.', price: 'xx.000đ' },
  { id: 3, name: 'Tên Món 03', desc: 'Mô tả ngắn về món uống này.', price: 'xx.000đ' },
]

export default function Menu() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.menu-card', {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.18,
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
    <section
      id="menu"
      ref={containerRef}
      className="bg-[#472f29] py-16 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <span className="block font-body text-xs tracking-[0.3em] uppercase text-[#f0d8be]/60 mb-4 text-center">
          9611 Kafé Menu
        </span>
        <h2 className="font-serif text-[#f0d8be] text-3xl md:text-5xl text-center mb-10 md:mb-16">
          Best Sellers 
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map(item => (
            <div
              key={item.id}
              className="menu-card group cursor-default overflow-hidden"
            >
              {/* placeholder image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#f0d8be]">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="font-serif text-[#714630]/30 text-6xl select-none">
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="pt-5 pb-2">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-[#f0d8be] text-xl">{item.name}</h3>
                  <span className="font-body text-[#f0d8be]/70 text-sm">{item.price}</span>
                </div>
                <p className="font-body text-[#f0d8be]/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <button
            type="button"
            className="font-body text-[#f0d8be]/70 text-sm tracking-wide hover:text-[#f0d8be] transition-colors duration-200 cursor-not-allowed"
          >
            Xem full menu tại đây →
          </button>
        </div>
      </div>
    </section>
  )
}
