import AnimatedSection from '../AnimatedSection/AnimatedSection'
import Slider from '../Slider/Slider'
import './About.css'

const cards = [
  {
    icon: `${import.meta.env.BASE_URL}img/diseño_profesional.png`,
    alt: 'Diseño Profesional',
    title: 'Diseño Profesional',
    desc: 'Sitios modernos, rápidos y adaptados a cualquier dispositivo.',
  },
  {
    icon: `${import.meta.env.BASE_URL}img/desarrollo_a_medida.png`,
    alt: 'Desarrollo a Medida',
    title: 'Desarrollo a Medida',
    desc: 'Cada proyecto se desarrolla según las necesidades de tu negocio.',
  },
  {
    icon: `${import.meta.env.BASE_URL}img/soluciones_inteligentes.png`,
    alt: 'Soluciones Inteligentes',
    title: 'Soluciones Inteligentes',
    desc: 'Utilizamos tecnología y análisis de datos para ayudarte a crecer.',
  },
  {
    icon: `${import.meta.env.BASE_URL}img/acompañamiento.png`,
    alt: 'Acompañamiento',
    title: 'Acompañamiento',
    desc: 'Te acompañamos antes, durante y después de la entrega del proyecto.',
  },
]

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
            <Slider visibleCount={4} autoPlay>
              {cards.map((card) => (
                <div key={card.title} className="about__card">
                  <div className="about__card-icon">
                    <img src={card.icon} alt={card.alt} />
                  </div>
                  <h3 className="about__card-title">{card.title}</h3>
                  <p className="about__card-desc">{card.desc}</p>
                </div>
              ))}
            </Slider>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
