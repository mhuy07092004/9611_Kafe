import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuPage from './pages/Menu'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  )
}
