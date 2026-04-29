import newDrinksImg from '../assets/menu/new_drinks.jpg'
import menuImg from '../assets/menu/menu.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#2e1a13] min-h-screen pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="block font-body text-xs tracking-[0.3em] uppercase text-[#f0d8be]/60 mb-4 text-center">
            9611 Kafé
          </span>
          <h1 className="font-serif text-[#f0d8be] text-3xl md:text-5xl text-center mb-12 md:mb-16">
            Our Menu
          </h1>

          {/* New drinks image */}
          <div className="mb-10 md:mb-14">
            <img
              src={newDrinksImg}
              alt="New drinks at 9611 Kafé"
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
            <p className="mt-3 font-body text-[#f0d8be]/50 text-xs tracking-widest uppercase text-center">
              New Drinks
            </p>
          </div>

          {/* Full menu image */}
          <div>
            <p className="font-body text-[#f0d8be]/50 text-xs tracking-widest uppercase text-center mb-4">
              Full Menu
            </p>
            <img
              src={menuImg}
              alt="9611 Kafé — full menu"
              loading="lazy"
              className="w-full rounded-sm object-contain border border-[#f0d8be]/10"
            />
            <div className="mt-4 text-center">
              <a
                href={menuImg}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[#f0d8be]/50 text-xs tracking-wide hover:text-[#f0d8be] transition-colors duration-200"
              >
                Mở ảnh trong tab mới ↗
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
