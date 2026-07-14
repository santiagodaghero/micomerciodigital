import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <AnimatedSection>
          <h2 className="about__title">Quiénes Somos</h2>

          <p className="about__text">
            En <strong>MiComercio<span className="about__highlight">Digital</span></strong> desarrollamos soluciones digitales para
            profesionales, emprendedores y empresas que buscan destacarse en internet.
          </p>

          <p className="about__text">
            Diseñamos páginas web modernas, landing pages enfocadas en resultados y herramientas
            de análisis con Power BI para ayudarte a vender más, mostrar mejor tu negocio y tomar
            decisiones con información clara.
          </p>

          <div className="about__grid">
            <div className="about__card">
              <div className="about__card-icon">
                <i className="fa-solid fa-desktop"></i>
              </div>
              <h3 className="about__card-title">Diseño Profesional</h3>
              <p className="about__card-desc">
                Sitios modernos, rápidos y adaptados a cualquier dispositivo.
              </p>
            </div>

            <div className="about__card">
              <div className="about__card-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="about__card-title">Desarrollo a Medida</h3>
              <p className="about__card-desc">
                Cada proyecto se desarrolla según las necesidades de tu negocio.
              </p>
            </div>

            <div className="about__card">
              <div className="about__card-icon">
                <i className="fa-solid fa-chart-column"></i>
              </div>
              <h3 className="about__card-title">Soluciones Inteligentes</h3>
              <p className="about__card-desc">
                Utilizamos tecnología y análisis de datos para ayudarte a crecer.
              </p>
            </div>

            <div className="about__card">
              <div className="about__card-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="about__card-title">Acompañamiento</h3>
              <p className="about__card-desc">
                Te acompañamos antes, durante y después de la entrega del proyecto.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
