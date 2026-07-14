import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServiceDetail from './pages/ServiceDetail'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicio/:id" element={<ServiceDetail />} />
      </Routes>
    </>
  )
}
