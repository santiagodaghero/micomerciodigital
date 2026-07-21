import { useState, useEffect, useCallback, useRef } from 'react'
import './Slider.css'

export default function Slider({ children, visibleCount = 3, autoPlay = false, autoPlayInterval = 3000, loop = false }) {
  const total = children.length
  const [current, setCurrent] = useState(0)
  const [screenVisible, setScreenVisible] = useState(visibleCount)
  const [noTransition, setNoTransition] = useState(false)
  const resetTimer = useRef(null)

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

  const slidesCount = loop ? total + screenVisible : total
  const maxIndex = Math.max(0, total - screenVisible)

  useEffect(() => {
    if (!loop && current > maxIndex) setCurrent(maxIndex)
  }, [maxIndex, current, loop])

  const goNext = useCallback(() => {
    if (loop) {
      setCurrent((prev) => prev + 1)
    } else {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }
  }, [loop, maxIndex])

  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0))

  useEffect(() => {
    if (!autoPlay || total <= screenVisible) return
    const id = setInterval(goNext, autoPlayInterval)
    return () => clearInterval(id)
  }, [autoPlay, autoPlayInterval, goNext, total, screenVisible])

  useEffect(() => {
    if (!loop || total <= screenVisible) return
    if (current >= total) {
      resetTimer.current = setTimeout(() => {
        setNoTransition(true)
        setCurrent(0)
        setTimeout(() => setNoTransition(false), 50)
      }, 400)
      return () => clearTimeout(resetTimer.current)
    }
  }, [current, loop, screenVisible, total])

  if (total <= screenVisible) {
    return <div className="slider__grid">{children}</div>
  }

  const slides = loop ? [...children, ...children.slice(0, screenVisible)] : children
  const trackWidth = `${(slidesCount / screenVisible) * 100}%`
  const slideWidth = `${100 / slidesCount}%`
  const trackTransform = `translateX(-${current * (100 / slidesCount)}%)`

  return (
    <div className="slider">
      <button
        className="slider__btn slider__btn--prev"
        onClick={goPrev}
        disabled={!loop && current === 0}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div className="slider__viewport">
        <div
          className={`slider__track ${noTransition ? 'slider__track--no-transition' : ''}`}
          style={{
            transform: trackTransform,
            width: trackWidth,
          }}
        >
          {slides.map((child, i) => (
            <div key={i} className="slider__slide" style={{ width: slideWidth }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        className="slider__btn slider__btn--next"
        onClick={goNext}
        aria-label="Siguiente"
      >
        ›
      </button>

      {!loop && (
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
      )}
    </div>
  )
}
