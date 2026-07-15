import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../components/Services/servicesData'
import Slider from '../components/Slider/Slider'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import './ServiceDetail.css'

const projectsData = {
  1: [
    {
      name: 'Portfolio - María García',
      image: '🎨',
      description:
        'Portfolio minimalista para diseñadora UX/UI con galería interactiva y modo oscuro.',
    },
    {
      name: 'Portfolio - Carlos Méndez',
      image: '📷',
      description:
        'Portfolio fotográfico con galería masonry, lightbox y formulario de reservas.',
    },
    {
      name: 'Portfolio - Ana López',
      image: '✏️',
      description:
        'Portfolio para ilustradora con showroom interactivo y tienda integrada.',
    },
    {
      name: 'Portfolio - Franco Ruiz',
      image: '💻',
      description:
        'Portfolio dev con proyectos en vivo, blog técnico y enlace a repos.',
    },
    {
      name: 'Portfolio - Sofía Torres',
      image: '📱',
      description:
        'Portfolio para creadora de contenido con integración a redes sociales.',
    },
    {
      name: 'Portfolio - Lucas Paz',
      image: '🎵',
      description:
        'Portfolio para productor musical con reproductor embebido y galería de videos.',
    },
  ],
  2: [
    {
      name: 'Landing - FitClub',
      image: '💪',
      description:
        'Landing para gimnasio con animaciones, formulario de inscripción y mapa.',
    },
    {
      name: 'Landing - Café Montaña',
      image: '☕',
      description:
        'Página promocional para cafetería con menú digital y galería.',
    },
    {
      name: 'Landing - EcoClean',
      image: '🌿',
      description:
        'Landing para servicio de limpieza ecológica con cotizador online.',
    },
    {
      name: 'Landing - Estudio Jurídico',
      image: '⚖️',
      description:
        'Página profesional para estudio de abogados con áreas de práctica y contacto.',
    },
    {
      name: 'Landing - Mascotas Felices',
      image: '🐾',
      description:
        'Landing para veterinaria con agenda online y testimonios de clientes.',
    },
    {
      name: 'Landing - Taller Mecánico',
      image: '🔧',
      description:
        'Página para taller con servicios, presupuesto online y ubicación.',
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
          <div className="detail__image">
            <img src={service.icon} alt={service.name} className="detail__image-icon" />
          </div>

          <div className="detail__content">
            <h1 className="detail__title">{service.name}</h1>
            <p className="detail__description">{service.description}</p>

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
              <h2 className="detail__projects-title">Propuestas de proyecto</h2>
              <p className="detail__projects-subtitle">
                Elige la que más se adapte a ti, y si buscas algo más personalizado también podemos hacerlo
              </p>
            </AnimatedSection>
            <Slider visibleCount={3}>
              {projects.map((project) => (
                <div key={project.name} className="project-card">
                  <div className="project-card__image">
                    <span>{project.image}</span>
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
