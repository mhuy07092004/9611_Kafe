import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
