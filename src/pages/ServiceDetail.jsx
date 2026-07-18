import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../components/Services/servicesData'
import Slider from '../components/Slider/Slider'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import './ServiceDetail.css'

const projectsData = {
  1: [
    {
      name: 'Portfolio - Diseñadora UX/UI',
      image: `${import.meta.env.BASE_URL}mockup/Portfolio-uiux.PNG`,
      description:
        'Portfolio minimalista para diseñadora UX/UI con galería donde muestra sus trabajos destacados.',
    },
    {
      name: 'Portfolio - Fotográfico',
      image: `${import.meta.env.BASE_URL}mockup/Portfolio-Fotografia.PNG`,
      description:
        'Portfolio de fotografía para mostrar proyectos y trabajos, integración de redes sociales y tienda para venta de fotografías.',
    },
    {
      name: 'Portfolio - Interiorismo',
      image: `${import.meta.env.BASE_URL}mockup/Portfolio-Interiorismo.PNG`,
      description:
        'Portfolio de interiorismo y paisajismo donde muestra proyectos de espacios residenciales y comerciales, combinando materiales, texturas y vegetación.',
    },
  ],
  2: [
    {
      name: 'Servicios para Estudios Profesionales',
      image: `${import.meta.env.BASE_URL}mockup/Estudio-Profesional.PNG`,
      description:
        'Sitio ideal para servicios profesionales: contables, abogacía, gestorías y consultorías.',
    },
    {
      name: 'Estudio de Arquitectura',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-Arquitectura.PNG`,
      description:
        'Landing para estudio de arquitectos donde muestra sus proyectos, ideas y equipo de trabajo.',
    },
    {
      name: 'Estética',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-Estetica.PNG`,
      description:
        'Cuidado integral con una amplia gama de tratamientos estéticos y de bienestar.',
    },
    {
      name: 'Restaurante',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-restaurante.PNG`,
      description:
        'Página de restaurante con carta, menú destacado y sistema de reservas.',
    },
    {
      name: 'Inmobiliaria',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-Inmobiliaria.PNG`,
      description:
        'Sitio web para encontrar las mejores propiedades, con búsqueda por ubicación, precio y características.',
    },
  ],
  3: [
    {
      name: 'Dashboard - TechStore',
      image: '📊',
      description:
        'Dashboard de ventas con KPIs en tiempo real y exportación a PDF.',
    },
    {
      name: 'Dashboard - Clínica Salud',
      image: '🏥',
      description:
        'Panel de indicadores clínicos con métricas de pacientes y turnos.',
    },
    {
      name: 'Dashboard - LogiTrack',
      image: '🚚',
      description:
        'Dashboard logístico con tracking de envíos, rutas y rendimiento.',
    },
    {
      name: 'Dashboard - FinMarket',
      image: '📈',
      description:
        'Panel financiero con cotizaciones, histórico y alertas personalizadas.',
    },
    {
      name: 'Dashboard - EduStats',
      image: '🎓',
      description:
        'Dashboard educativo con rendimiento por alumno, curso y período.',
    },
    {
      name: 'Dashboard - RestoView',
      image: '🍽️',
      description:
        'Panel para restaurante con ventas diarias, platos top y rotación de mesas.',
    },
  ],
  4: [
    {
      name: 'Dietética',
      image: `${import.meta.env.BASE_URL}mockup/E-comerce.png`,
      description:
        'Tienda online de alimentos saludables con catálogo de productos, filtros dietéticos y pedidos a domicilio.',
    },
  ],
  5: [
    {
      name: 'Control Organizacional - Demo',
      image: '📋',
      description:
        'Panel de gestión organizacional con calendario integrado, control de personal, asistencia, sueldos, stock y proyectos.',
    },
  ],
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = servicesData.find((s) => s.id === Number(id))
  const projects = projectsData[Number(id)] || []

  if (!service) {
    return (
      <div className="detail-error">
        <h2>Servicio no encontrado</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="detail">
      <header className="detail__header">
        <Link to="/" className="detail__back">
          ← Volver
        </Link>
        <span className="detail__logo">✦ MiComercioDigital</span>
      </header>

      <main className="detail__main">
        <div className="detail__intro">
          <div className="detail__content">
            <div className="detail__title-row">
              <div className="detail__image detail__image--small">
                <img src={service.icon} alt={service.name} className="detail__image-icon" />
              </div>
              <h1 className="detail__title">{service.name}</h1>
            </div>
            <p className="detail__description">{service.fullDescription || service.description}</p>

            <div className="detail__includes">
              <h3>¿Qué incluye?</h3>
              <ul>
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail__pricing">
              <div className="detail__price">
                <span className="detail__price-label">Precio estimado</span>
                <span className="detail__price-value">{service.price}</span>
              </div>
              <div className="detail__price detail__price--custom">
                <span className="detail__price-label">Personalizado</span>
                <span className="detail__price-value">{service.customPrice}</span>
              </div>
            </div>

            <a
              href="https://wa.me/54123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="detail__whatsapp"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {projects.length > 0 && (
          <section className="detail__projects">
            <AnimatedSection>
              <h2 className="detail__projects-title">Propuesta de proyecto</h2>
              <p className="detail__projects-subtitle">
                Ejemplo de un e-commerce que puede adaptarse a lo que necesitás, y si buscás algo más personalizado también podemos hacerlo
              </p>
            </AnimatedSection>
            <Slider visibleCount={3}>
              {projects.map((project) => (
                <div key={project.name} className="project-card">
                  <div className="project-card__image">
                    {project.image.length > 2 ? (
                      <img src={project.image} alt={project.name} />
                    ) : (
                      <span>{project.image}</span>
                    )}
                  </div>
                  <div className="project-card__body">
                    <h3 className="project-card__title">{project.name}</h3>
                    <p className="project-card__desc">{project.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        )}
      </main>
    </div>
  )
}
