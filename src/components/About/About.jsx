import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <AnimatedSection>
          <h2 className="about__title">Quiénes Somos</h2>
          <div className="about__content">
            <p className="about__text">
              En <strong><span style={{ color: '#011A39' }}>MiComercio</span><span style={{ color: 'var(--accent)' }}>Digital</span></strong> creamos soluciones digitales a medida.
              Ayudamos a profesionales y empresas a tener presencia en línea
              con portafolios impactantes, landing pages efectivas y
              visualización de datos con Power BI.
            </p>
            <p className="about__text">
              Creemos en el diseño simple, funcional y elegante.
              Cada proyecto lo tratamos como único, porque tu marca lo es.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
