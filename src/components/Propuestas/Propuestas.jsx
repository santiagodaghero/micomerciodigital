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
          <div className="propuestas__card">
            <div className="propuestas__img-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}mockup/E-comerce.png`}
                alt="Propuesta E-Commerce"
              />
            </div>
            <div className="propuestas__info">
              <span className="propuestas__tag">E-Commerce</span>
              <h3>Tu Tienda Online Profesional</h3>
              <p>
                Desarrollamos tu plataforma de e-commerce con diseño moderno,
                pasarela de pagos integrada y panel de administración para que
                gestiones tus productos y pedidos fácilmente.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
