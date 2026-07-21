import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../components/Services/servicesData'
import Slider from '../components/Slider/Slider'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import ServiceComparison from '../components/ServiceComparison/ServiceComparison'
import './ServiceDetail.css'

const projectsData = {
  1: [
    {
      name: 'Portfolio - Diseñadora UX/UI',
      image: `${import.meta.env.BASE_URL}mockup/Portfolio-uiux.PNG`,
      description:
        'Portfolio minimalista para diseñadora UX/UI con galería donde muestra sus trabajos destacados.',
      url: 'https://diseniador-uiux.vercel.app/',
    },
    {
      name: 'Portfolio - Fotográfico',
      image: `${import.meta.env.BASE_URL}mockup/Portfolio-Fotografia.PNG`,
      description:
        'Portfolio de fotografía para mostrar proyectos y trabajos, integración de redes sociales y tienda para venta de fotografías.',
      url: 'https://fotografo-blush.vercel.app/',
    },
    {
      name: 'Portfolio - Interiorismo',
      image: `${import.meta.env.BASE_URL}mockup/Portfolio-Interiorismo.PNG`,
      description:
        'Portfolio de interiorismo y paisajismo donde muestra proyectos de espacios residenciales y comerciales, combinando materiales, texturas y vegetación.',
      url: 'https://interiorismo-mu.vercel.app/',
    },
  ],
  2: [
    {
      name: 'Estudios Profesionales',
      image: `${import.meta.env.BASE_URL}mockup/Estudio-Profesional.PNG`,
      description:
        'Sitio ideal para servicios profesionales: contables, abogacía, gestorías y consultorías.',
      url: 'https://estudio-profesional-two.vercel.app/',
    },
    {
      name: 'Estudio de Arquitectura',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-Arquitectura.PNG`,
      description:
        'Landing para estudio de arquitectos donde muestra sus proyectos, ideas y equipo de trabajo.',
      url: 'https://arquitectura-lac.vercel.app/',
    },
    {
      name: 'Estética',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-Estetica.PNG`,
      description:
        'Cuidado integral con una amplia gama de tratamientos estéticos y de bienestar.',
      url: 'https://estetica-seven-gamma.vercel.app/',
    },
    {
      name: 'Restaurante',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-restaurante.PNG`,
      description:
        'Página de restaurante con carta, menú destacado y sistema de reservas.',
      url: 'https://restaurante-alpha-rouge.vercel.app/',
    },
    {
      name: 'Inmobiliaria',
      image: `${import.meta.env.BASE_URL}mockup/LandingPage-Inmobiliaria.PNG`,
      description:
        'Sitio web para encontrar las mejores propiedades, con búsqueda por ubicación, precio y características.',
      url: 'https://inmobiliaria-kappa-ivory.vercel.app/',
    },
  ],
  3: [
    {
      name: 'Dashboard Ventas Power BI',
      image: `${import.meta.env.BASE_URL}mockup/Dashboard-VENTAS.PNG`,
      description:
        'Análisis completo de ventas de una tienda de informática; rentabilidad, comparativas anuales y ranking de vendedores.',
    },
    {
      name: 'Dashboard RRHH Power BI',
      image: `${import.meta.env.BASE_URL}mockup/Dashboard-RRHH.PNG`,
      description:
        'Construido sobre una base de datos SQLite con datos históricos, medidas en DAX y diseño visual con navegación lateral con siete módulos.',
    },
  ],
  4: [
    {
      name: 'Dietética',
      image: `${import.meta.env.BASE_URL}mockup/E-comerce.png`,
      description:
        'Tienda online de alimentos saludables con catálogo de productos, filtros dietéticos y pedidos a domicilio.',
      url: 'https://e-commerce-dietetica.vercel.app/',
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

const comparisonData = [
  {
    feature: 'Diseño base',
    standard: 'Uso mi template propio',
    custom: 'Diseño el sitio desde cero',
  },
  {
    feature: 'Secciones',
    standard: 'Incluyo hasta 5 predefinidas',
    custom: 'Sumo las que necesites, sin límite',
  },
  {
    feature: 'Paleta de colores',
    standard: 'Propongo 3-4 opciones preseteadas',
    custom: 'Analizo tu marca y creo una paleta a medida',
  },
  {
    feature: 'Íconos e ilustraciones',
    standard: 'Uso mi set genérico de íconos',
    custom: 'Diseño o rediseño íconos propios para vos',
  },
  {
    feature: 'Identidad visual',
    standard: 'No incluido',
    custom: 'Desarrollo tu identidad visual completa',
  },
  {
    feature: 'Textos',
    standard: 'El cliente pasa el contenido',
    custom: 'Textos a medida',
  },
  {
    feature: 'SEO básico',
    standard: 'Incluyo meta tags y alt en imágenes',
    custom: 'Optimización SEO avanzada',
  },
  {
    feature: 'Responsive (mobile/desktop)',
    standard: 'Lo entrego responsive',
    custom: 'Lo entrego responsive',
  },
  {
    feature: 'Formulario de contacto / WhatsApp',
    standard: 'Incluido',
    custom: 'Incluido + integraciones (CRM, mailing)',
  },
  {
    feature: 'Revisiones post-entrega',
    standard: '1 revisión',
    custom: '3 revisiones',
  },
  {
    feature: 'Soporte y ajustes finales',
    standard: 'No incluido',
    custom: 'Te doy soporte y ajustes finales',
  },
  {
    feature: 'Entrega',
    standard: '5-7 días hábiles',
    custom: '7-15 días hábiles',
  },
]

const ecommerceComparisonData = [
  {
    feature: 'Catálogo de productos',
    standard: 'Hasta 20 productos',
    custom: 'Cantidad de productos que necesites, sin límite',
  },
  {
    feature: 'Carrito y checkout',
    standard: 'Uso mi flujo de compra estándar',
    custom: 'Diseño el flujo de compra a tu medida',
  },
  {
    feature: 'Medios de pago',
    standard: 'Integro 1 pasarela (ej. Mercado Pago)',
    custom: 'Integro 1 pasarela (ej. Mercado Pago)',
  },
  {
    feature: 'Gestión de stock',
    standard: 'Te doy gestión manual básica',
    custom: 'Stock con alertas',
  },
  {
    feature: 'Envíos',
    standard: 'Calculo un costo fijo o por zona',
    custom: 'Integro tu cálculo con correo/logística',
  },
  {
    feature: 'Diseño e identidad visual',
    standard: 'Uso mi template',
    custom: 'Diseño tu identidad a medida',
  },
  {
    feature: 'Panel de administración',
    standard: 'Te doy un panel básico',
    custom: 'Te sumo reportes y estadísticas de ventas',
  },
  {
    feature: 'Revisiones',
    standard: 'Incluyo 1 revisión',
    custom: 'Incluyo 3 revisiones',
  },
  {
    feature: 'Entrega',
    standard: '10-15 días hábiles',
    custom: '15-25 días hábiles',
  },
]

const powerBiComparisonData = [
  {
    feature: 'Fuentes de datos',
    standard: 'Conecto 1 fuente (Excel/Sheets/CSV)',
    custom: 'Conecto múltiples fuentes (bases, APIs, ERP)',
  },
  {
    feature: 'Páginas del dashboard',
    standard: 'Una sola página',
    custom: 'Armo páginas con sistema de navegación lateral con varios módulos',
  },
  {
    feature: 'Medidas DAX',
    standard: 'Medidas básicas predefinidas',
    custom: 'Calculo medidas DAX a medida de tu negocio',
  },
  {
    feature: 'Diseño visual',
    standard: 'Uso un template de colores',
    custom: 'Adapto el diseño a tu identidad visual',
  },
  {
    feature: 'Actualización de datos',
    standard: 'La hacés vos, manualmente de manera sencilla',
    custom: 'La hacés vos, manualmente de manera sencilla',
  },
  {
    feature: 'Capacitación',
    standard: 'No incluida',
    custom: 'Te doy una sesión de capacitación de uso',
  },
  {
    feature: 'Revisiones',
    standard: 'Incluyo 1 revisión',
    custom: 'Incluyo 3 revisiones',
  },
  {
    feature: 'Entrega',
    standard: '5-7 días hábiles',
    custom: '10-15 días hábiles',
  },
]

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
              {service.price && (
                <div className="detail__price">
                  <span className="detail__price-label">Precio estándar</span>
                  <span className="detail__price-value">{service.price}</span>
                </div>
              )}
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
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card__link">
                        Ver proyecto →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        )}

        {(service.id === 1 || service.id === 2) && (
          <ServiceComparison rows={comparisonData} />
        )}

        {service.id === 3 && (
          <ServiceComparison rows={powerBiComparisonData} />
        )}

        {service.id === 4 && (
          <ServiceComparison rows={ecommerceComparisonData} />
        )}

        {service.id === 5 && (
          <section className="svc-comparison">
            <h3 className="svc-comparison__title">¿Producto Estándar o Personalizado?</h3>
            <div className="svc-comparison__text">
              <p>
                Este producto lo pensamos distinto porque, en la práctica, es un desarrollo a medida por naturaleza. Login, empleados, asistencia, sueldos, proyectos y stock son módulos que dependen de la lógica propia de cada empresa, así que ofrecer una versión "estándar" sería poco honesto de nuestra parte: prácticamente ningún cliente podría usarlo tal cual sale de fábrica.
              </p>
              <p>
                Por eso, en vez de vender estándar o personalizado, armamos un paquete por módulos:
              </p>
              <ul>
                <li><strong>Base (login + empleados + asistencia):</strong> el núcleo del sistema, incluido siempre.</li>
                <li><strong>Módulos adicionales (sueldos, proyectos, stock):</strong> se cotizan aparte y los vas sumando según lo que tu empresa necesite.</li>
                <li><strong>Personalización de lógica (reglas de sueldo, permisos por rol, reportes específicos):</strong> se cotiza aparte en cualquier paquete que elijas.</li>
              </ul>
              <p>
                El costo final se define en base a los módulos que elijas y el nivel de personalización que necesite tu empresa, cotizándose de forma conjunta antes de comenzar el desarrollo.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
