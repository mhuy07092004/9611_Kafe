import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bestseller1 from '../assets/bestsellers/1.jpeg'
import bestseller2 from '../assets/bestsellers/2.jpg'
import bestseller3 from '../assets/bestsellers/3.jpg'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { id: 1, name: 'Americano Peach', desc: 'Espresso đậm từ hạt cà phê Robusta, hòa quyện syrup đào dịu ngọt, cân bằng vị đắng, mang lại cảm giác thư giãn giữa nhịp sống đô thị', price: '56.000đ', image: bestseller1 },
  { id: 2, name: 'ChaMel', desc: 'Matcha thanh mát mix với caramel ngọt dịu, sữa tươi, cân bằng vị êm ái, phù hợp cho những người không thích vị đắng của cà phê', price: '49.000đ', image: bestseller2 },
  { id: 3, name: 'Pink Honey Salt Coffee', desc: 'Espresso đậm từ hạt cà phê Robusta, hòa quyện mật ong và kem muối hồng béo mịn, cân bằng giữa vị ngọt – mặn – đắng, giải tõa căn thẳng sau những ngày dài', price: '56.000đ', image: bestseller3 },
]

export default function MenuPreview() {
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
              <div className="relative overflow-hidden aspect-[4/3] bg-[#f0d8be]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
          <Link
            to="/menu"
            className="font-body text-[#f0d8be]/70 text-sm tracking-wide hover:text-[#f0d8be] transition-colors duration-200"
          >
            Xem full menu tại đây →
          </Link>
        </div>
      </div>
    </section>
  )
}
