import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__logo">
          <img src="/img/logogrande.png" alt="Logo MiComercioDigital" className="hero__logo-img" />
        </div>
        <p className="hero__subtitle">Creamos tu presencia digital</p>
      </div>
    </section>
  )
}
