import { useState, useEffect } from 'react'
import './Slider.css'

export default function Slider({ children, visibleCount = 3 }) {
  const total = children.length
  const [current, setCurrent] = useState(0)
  const [screenVisible, setScreenVisible] = useState(visibleCount)

  useEffect(() => {
    const getVisible = () => {
      const w = window.innerWidth
      if (w <= 500) return 1
      if (w <= 768) return 2
      return visibleCount
    }

    setScreenVisible(getVisible())

    const handler = () => {
      const next = getVisible()
      setScreenVisible((prev) => {
        if (prev !== next) setCurrent(0)
        return next
      })
    }

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [visibleCount])

  const maxIndex = Math.max(0, total - screenVisible)

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex)
  }, [maxIndex, current])

  const goNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex))
  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0))

  if (total <= screenVisible) {
    return <div className="slider__grid">{children}</div>
  }

  return (
    <div className="slider">
      <button
        className="slider__btn slider__btn--prev"
        onClick={goPrev}
        disabled={current === 0}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div className="slider__viewport">
        <div
          className="slider__track"
          style={{
            transform: `translateX(-${current * (100 / total)}%)`,
            width: `${(total / screenVisible) * 100}%`,
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="slider__slide"
              style={{ width: `${100 / total}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        className="slider__btn slider__btn--next"
        onClick={goNext}
        disabled={current === maxIndex}
        aria-label="Siguiente"
      >
        ›
      </button>

      <div className="slider__dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`slider__dot ${i === current ? 'slider__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
