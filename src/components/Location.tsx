import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.location-item', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <section
      id="location"
      ref={containerRef}
      className="bg-[#714630] py-16 md:py-28 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <span className="location-item block font-body text-xs tracking-[0.3em] uppercase text-[#f0d8be]/60 mb-4 text-center">
          Ghé thăm chúng tôi
        </span>
        <h2 className="location-item font-serif text-[#f0d8be] text-3xl md:text-5xl text-center mb-10 md:mb-16">
          Tìm chúng tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Info column */}
          <div className="space-y-8">
            <div className="location-item">
              <p className="font-body text-[#f0d8be]/50 text-xs tracking-[0.25em] uppercase mb-2">Địa chỉ</p>
              <p className="font-serif text-[#f0d8be] text-xl leading-snug">
                01 Hàn Thuyên, Đà Lạt
              </p>
            </div>

            <div className="location-item">
              <p className="font-body text-[#f0d8be]/50 text-xs tracking-[0.25em] uppercase mb-2">Giờ mở cửa</p>
              <p className="font-body text-[#f0d8be] text-base">7:00 AM – 10:00 PM</p>
            </div>

            <div className="location-item">
              <p className="font-body text-[#f0d8be]/50 text-xs tracking-[0.25em] uppercase mb-2">Điện thoại</p>
              <a
                href="tel:0964036065"
                className="font-body text-[#f0d8be] text-base hover:text-white transition-colors"
              >
                0964 036 065
              </a>
            </div>

            <div className="location-item">
              <a
                href="https://maps.app.goo.gl/J5tPw9h7Vo7wMP3V6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 min-h-[48px] border border-[#f0d8be]/50 text-[#f0d8be] font-body text-xs tracking-[0.2em] uppercase hover:bg-[#f0d8be] hover:text-[#472f29] active:bg-[#f0d8be] active:text-[#472f29] transition-all duration-300 touch-manipulation"
              >
                Chỉ đường
              </a>
            </div>
          </div>

          {/* Order online column */}
          <div className="location-item">
            <p className="font-body text-[#f0d8be]/50 text-xs tracking-[0.25em] uppercase mb-6">
              Đặt hàng trực tuyến
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://food.grab.com/vn/en/restaurant/9611-kafé-delivery/5-C72HWBL3FAAWNE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 min-h-[56px] border border-[#f0d8be]/20 hover:border-[#f0d8be]/50 active:border-[#f0d8be]/50 group transition-all duration-300 touch-manipulation"
              >
                <GrabIcon />
                <span className="font-body text-[#f0d8be] text-sm group-hover:text-white transition-colors">
                  GrabFood
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GrabIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#00b14f" />
      <text
        x="50%"
        y="18"
        fontSize="10"
        fontWeight="bold"
        fill="white"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
      >
        Grab
      </text>
    </svg>
  )
}

function ShopeeFoodIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#ee4d2d" />
      <text x="4" y="19" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">Spee</text>
    </svg>
  )
}
