import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Spaces from './components/Spaces'
import Location from './components/Location'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Spaces />
        <Location />
        <SocialSection />
      </main>
      <Footer />
    </>
  )
}
