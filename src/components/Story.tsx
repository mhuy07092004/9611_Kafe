import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Story() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.story-block', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.25,
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
      id="about"
      ref={containerRef}
      className="bg-[#f0d8be] py-16 md:py-28 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <span className="story-block block font-body text-xs tracking-[0.3em] uppercase text-[#714630] mb-4">
          9611 Kafé
        </span>

        <div className="story-block mb-10 md:mb-16">
          <h2 className="font-serif text-[#472f29] text-3xl md:text-5xl leading-tight mb-5 md:mb-6">
            Về Tụi Mình
          </h2>
          <p className="font-body text-[#5b594e] text-base md:text-lg leading-loose">
            9611 Coffee là không gian cà phê hiện đại và gần gũi, nơi bạn có thể tạm gác lại
            nhịp sống vội vàng để tận hưởng hương vị nguyên bản và cảm giác an yên. Chúng tôi
            không chỉ phục vụ cà phê — mà còn mang đến một nơi để bạn chậm lại, kết nối và
            sẻ chia những khoảnh khắc nhỏ bé nhưng ý nghĩa.
          </p>
        </div>

        <div className="story-block border-t border-[#714630]/20 pt-10 md:pt-16">
          <h3 className="font-serif text-[#472f29] text-xl md:text-3xl mb-4 md:mb-5">
            Câu chuyện của tụi mình
          </h3>
          <p className="font-body text-[#5b594e] text-base md:text-lg leading-loose">
            Giữa nhịp sống nhanh và những bộn bề thường nhật, 9611 Coffee ra đời như một góc
            nhỏ để mọi người dừng lại, hít thở, và tìm lại sự kết nối – với chính mình và với
            người khác. Mỗi ly cà phê được tạo ra với sự chỉn chu và chân thành, mang theo câu
            chuyện về những hạt cà phê Việt được chọn lọc, rang xay cẩn thận, và hòa quyện cùng
            cảm xúc của người pha chế.
          </p>
        </div>
      </div>
    </section>
  )
}
