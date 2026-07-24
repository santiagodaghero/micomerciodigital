import { useState, useRef, useEffect } from 'react'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './ComparisonTable.css'

export default function ComparisonTable() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStart = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const prev = () => setCurrent(c => (c === 0 ? 1 : c - 1))
  const next = () => setCurrent(c => (c === 1 ? 0 : c + 1))

  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
    touchStart.current = null
  }

  const standardCard = (
    <div className="comparison__card comparison__card--standard">
      <h3 className="comparison__card-title">Producto Estándar</h3>
      <ul className="comparison__card-list">
        <li>Basado en un modelo ya diseñado y probado, adaptado a cada proyecto</li>
        <li>Contenido y ajustes visuales aplicados sobre una estructura estandarizada</li>
        <li>Cantidad de secciones y funcionalidades limitada según el modelo elegido</li>
        <li>Paleta de colores e íconos predefinidos, sin diseño a medida</li>
        <li>Responsive básico, adaptado a celular y PC</li>
        <li>SEO básico incluido</li>
        <li>Dominio incluido durante el primer año</li>
        <li>1 revisión post-entrega</li>
        <li>Entrega rápida, con calidad sólida y resultados concretos</li>
        <li>Ideal para quienes buscan una presencia profesional online sin necesidad de personalización profunda</li>
      </ul>
    </div>
  )

  const customCard = (
    <div className="comparison__card comparison__card--custom">
      <h3 className="comparison__card-title">Producto Personalizado</h3>
      <ul className="comparison__card-list">
        <li>Reunión de research previo (marca, público objetivo y objetivos del proyecto)</li>
        <li>Diseño desarrollado desde cero, a medida de la marca</li>
        <li>Identidad visual, estructura y funcionalidades sin límites</li>
        <li>Paleta de colores, íconos y gráficos diseñados especialmente para el proyecto</li>
        <li>Animaciones al pasar de secciones (en páginas web)</li>
        <li>Responsive avanzado, optimizado para mobile, tablet y PC</li>
        <li>SEO avanzado, con optimización de estructura y contenido</li>
        <li>Optimización de velocidad de carga</li>
        <li>Dominio incluido durante el primer año</li>
        <li>3 revisiones post-entrega</li>
        <li>Acompañamiento y soporte post-entrega por 15 días</li>
        <li>Ideal para marcas que buscan un proyecto único, con una presencia diferenciada y a medida</li>
      </ul>
    </div>
  )

  return (
    <section className="comparison">
      <div className="container">
        <AnimatedSection>
          <h2 className="comparison__title">¿Producto Estándar o Personalizado?</h2>
          <p className="comparison__subtitle">
            Elegí la opción que mejor se adapte a lo que necesitás
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {isMobile ? (
            <div className="comparison__slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <button className="comparison__arrow comparison__arrow--left" onClick={prev} aria-label="Anterior">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div className="comparison__slider-viewport">
                <div className="comparison__slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                  {standardCard}
                  {customCard}
                </div>
              </div>
              <button className="comparison__arrow comparison__arrow--right" onClick={next} aria-label="Siguiente">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
              <div className="comparison__dots">
                <span className={`comparison__dot ${current === 0 ? 'active' : ''}`} onClick={() => setCurrent(0)}></span>
                <span className={`comparison__dot ${current === 1 ? 'active' : ''}`} onClick={() => setCurrent(1)}></span>
              </div>
            </div>
          ) : (
            <div className="comparison__grid">
              {standardCard}
              {customCard}
            </div>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="comparison__note">
            Dentro de cada uno de nuestros servicios podés encontrar el detalle de lo que incluye un producto estándar y un producto personalizado, para que elijas la opción que mejor se adapte a tus necesidades.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
