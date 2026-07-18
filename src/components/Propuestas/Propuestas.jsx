import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './Propuestas.css'

export default function Propuestas() {
  return (
    <section id="propuestas" className="propuestas">
      <div className="container">
        <AnimatedSection>
          <h2 className="propuestas__title">Propuestas de Proyecto</h2>
          <p className="propuestas__subtitle">
            Conocé nuestras propuestas y descubrí cómo podemos llevar tu negocio al siguiente nivel
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="slider__grid">

            <div className="project-card">

              <div className="project-card__image">
                <img
                  src={`${import.meta.env.BASE_URL}mockup/E-comerce.png`}
                  alt="Dietética"
                />
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">Dietética</h3>
                <p className="project-card__desc">
                  Tienda online de alimentos saludables con catálogo de productos,
                  filtros dietéticos y pedidos a domicilio.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
