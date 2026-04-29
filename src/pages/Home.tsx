import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Story from '../components/Story'
import MenuPreview from '../components/MenuPreview'
import Spaces from '../components/Spaces'
import Location from '../components/Location'
import SocialSection from '../components/SocialSection'
import Footer from '../components/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const raw = location.hash.replace(/^#/, '')
    if (!raw) return
    const id = decodeURIComponent(raw)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    })
  }, [location.hash])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MenuPreview />
        <Spaces />
        <Location />
        <SocialSection />
      </main>
      <Footer />
    </>
  )
}
