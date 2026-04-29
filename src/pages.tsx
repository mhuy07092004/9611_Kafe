import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const MenuPage = lazy(() => import('./pages/Menu'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#2e1a13]" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Suspense>
  )
}
