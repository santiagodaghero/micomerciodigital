import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServiceDetail from './pages/ServiceDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicio/:id" element={<ServiceDetail />} />
    </Routes>
  )
}
