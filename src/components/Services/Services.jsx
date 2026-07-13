import { servicesData } from './servicesData'
import ServiceCard from './ServiceCard'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <AnimatedSection>
          <h2 className="services__title">Nuestros Servicios</h2>
          <p className="services__subtitle">
            Elegí el servicio que mejor se adapte a tus necesidades
          </p>
        </AnimatedSection>
        <div className="services__grid">
          {servicesData.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.15}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
