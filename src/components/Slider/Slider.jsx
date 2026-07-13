import { useState } from 'react'
import './Slider.css'

export default function Slider({ children, visibleCount = 3 }) {
  const total = children.length
  const maxIndex = Math.max(0, total - visibleCount)
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => Math.min(prev + 1, maxIndex))
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0))

  if (total <= visibleCount) {
    return <div className="slider__grid">{children}</div>
  }

  return (
    <div className="slider">
      <button
        className="slider__btn slider__btn--prev"
        onClick={prev}
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
            width: `${(total / visibleCount) * 100}%`,
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
        onClick={next}
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
