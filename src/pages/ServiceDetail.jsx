import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../components/Services/servicesData'
import Slider from '../components/Slider/Slider'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import ServiceComparison from '../components/ServiceComparison/ServiceComparison'
import './ServiceDetail.css'

const moduleIconPaths = {
  lock: 'M7 11V7a5 5 0 0 1 10 0v4|rect:3,11,18,10,2',
  calendar: 'M16 2v4M8 2v4M3 10h18|rect:3,4,18,18,2',
  chart: 'M7 20V12M12 20V8M17 20v-6|rect:3,3,18,18,2',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2|circle:9,7,4|M23 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75',
  briefcase: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16|rect:2,7,20,14,2',
  dollar: 'M12 1v22|M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  trending: 'M23 6l-9.5 9.5-5-5L1 18|M17 6h6v6',
  box: 'M21 8L12 3 3 8l9 5 9-5z|M3 8v8l9 5 9-5V8|M12 13v8',
  message: 'M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.5 8.5 0 0 1 8.5 8.5z',
}

function ModuleIcon({ name }) {
  const shapes = moduleIconPaths[name].split('|')
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      {shapes.map((shape, i) => {
        if (shape.startsWith('rect:')) {
          const [x, y, w, h, r] = shape.replace('rect:', '').split(',')
          return <rect key={i} x={x} y={y} width={w} height={h} rx={r} />
        }
        if (shape.startsWith('circle:')) {
          const [cx, cy, r] = shape.replace('circle:', '').split(',')
          return <circle key={i} cx={cx} cy={cy} r={r} />
        }
        return <path key={i} d={shape} />
      })}
    </svg>
  )
}

const svcModules = [
  { title: 'Acceso y Roles', text: 'Login diferenciado por jerarquía y rol: jefes de área, encargados y empleados de planta. Cada uno accede solo a las secciones que le corresponden, protegiendo la información sensible de la empresa.', icon: 'lock', accent: 'water' },
  { title: 'Calendario de Proyectos', text: 'Vista mensual con todos los proyectos ubicados día a día. Cada uno se colorea según su estado: verde finalizado, azul iniciado y rojo retrasado.', icon: 'calendar', accent: 'sky' },
  { title: 'Reportes y KPIs', text: 'Estructura organizacional por área con sus empleados, evolución mensual de ganancias, mejores clientes y productos más y menos vendidos, todo en una sola vista.', icon: 'chart', accent: 'water' },
  { title: 'Gestión de Personal', text: 'Legajos con nombre, área, puesto y nivel operativo, con altas y bajas de empleados. Incluye el registro diario de asistencias: presentes, licencias y partes de enfermo.', icon: 'users', accent: 'sky' },
  { title: 'Gestión de Clientes', text: 'Base de datos de clientes con nombre, CUIT y mail. Incluye facturación, con presupuestos y facturas en estados de aprobado y pagado.', icon: 'briefcase', accent: 'water' },
  { title: 'Sueldos y Liquidaciones', text: 'Recibos de sueldo organizados por período, con la liquidación ya calculada para cada empleado.', icon: 'dollar', accent: 'sky' },
  { title: 'Finanzas', text: 'Ingresos, costo de mercadería vendida, gastos, sueldos, ganancia neta y margen, con gráficos claros. Incluye ventas y gastos propios de la empresa.', icon: 'trending', accent: 'water' },
  { title: 'Recursos', text: 'Activos de la empresa con su estado, responsable asignado y sucursal. Incluye control de stock con alarmas de reposición.', icon: 'box', accent: 'sky' },
  { title: 'Mensajería Interna', text: 'Comunicación directa entre jefes, encargados y empleados, con notificaciones de solicitudes de licencia y su estado de aprobación.', icon: 'message', accent: 'water' },
]

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
    standard: 'Plantilla profesional propia',
    custom: 'Diseño creado desde cero, adaptado a la marca',
  },
  {
    feature: 'Secciones',
    standard: 'Hasta 5 secciones predefinidas',
    custom: 'Secciones ilimitadas, según necesidad',
  },
  {
    feature: 'Paleta de colores',
    standard: '3-4 opciones preseteadas',
    custom: 'Paleta a medida, definida junto al cliente',
  },
  {
    feature: 'Íconos e ilustraciones',
    standard: 'Set de íconos genéricos',
    custom: 'Íconos e ilustraciones diseñados a medida',
  },
  {
    feature: 'Identidad visual',
    standard: 'No incluida',
    custom: 'Desarrollo completo de identidad visual',
  },
  {
    feature: 'Textos',
    standard: 'A cargo del cliente',
    custom: 'Redacción de textos a medida',
  },
  {
    feature: 'SEO',
    standard: 'SEO básico (meta tags, alt en imágenes)',
    custom: 'SEO avanzado (estructura, keywords, optimización de contenido)',
  },
  {
    feature: 'Responsive (mobile/desktop)',
    standard: '✅ Incluido',
    custom: '✅ Incluido',
  },
  {
    feature: 'Formulario de contacto / WhatsApp',
    standard: '✅ Incluido',
    custom: '✅ Incluido + integraciones (CRM, mailing)',
  },
  {
    feature: 'Modo claro y oscuro',
    standard: 'No incluido',
    custom: '✅ Incluido',
  },
  {
    feature: 'Reservas Turnos Online',
    standard: 'No incluido',
    custom: '✅ Incluido',
  },
  {
    feature: 'Revisiones post-entrega',
    standard: '1 revisión',
    custom: '3 revisiones',
  },
  {
    feature: 'Soporte post-entrega',
    standard: 'No incluido',
    custom: 'Incluido, con ajustes finales (hasta 15 días de entregado)',
  },
  {
    feature: 'Tiempo de entrega',
    standard: '5-7 días hábiles',
    custom: '7-15 días hábiles',
  },
  {
    feature: 'Dominio',
    standard: '✅ Incluido el 1er año (USD 12)',
    custom: '✅ Incluido el 1er año (USD 12)',
  },
  {
    feature: 'Ideal para',
    standard: 'Emprendimientos que buscan salir rápido y con presupuesto ajustado',
    custom: 'Marcas que buscan una presencia diferenciada y a medida',
  },
]

const portfolioComparisonData = [
  ...comparisonData,
  {
    feature: 'Pequeño e-commerce',
    standard: 'No incluido',
    custom: '✅ Incluido',
  },
]

const ecommerceComparisonData = [
  {
    feature: 'Catálogo de productos',
    standard: 'Hasta 20 productos',
    custom: 'Productos ilimitados, según necesidad',
  },
  {
    feature: 'Carrito y checkout',
    standard: 'Flujo de compra estándar',
    custom: 'Flujo de compra diseñado a medida',
  },
  {
    feature: 'Medios de pago',
    standard: 'Integración de 1 pasarela (ej. Mercado Pago)',
    custom: 'Integración de 1 pasarela (ej. Mercado Pago)',
  },
  {
    feature: 'Gestión de stock',
    standard: 'Gestión manual básica',
    custom: 'Gestión de stock con alertas',
  },
  {
    feature: 'Envíos',
    standard: 'Costo fijo o por zona',
    custom: 'Cálculo integrado con correo/logística',
  },
  {
    feature: 'Diseño e identidad visual',
    standard: 'Template propio',
    custom: 'Identidad visual diseñada a medida',
  },
  {
    feature: 'Panel de administración',
    standard: 'Panel básico',
    custom: 'Panel con reportes y estadísticas de ventas',
  },
  {
    feature: 'SEO',
    standard: 'SEO básico (meta tags, alt en imágenes)',
    custom: 'SEO avanzado (estructura, keywords, optimización de contenido)',
  },
  {
    feature: 'Responsive (mobile/desktop)',
    standard: '✅ Incluido',
    custom: '✅ Incluido',
  },
  {
    feature: 'Dominio',
    standard: 'Incluido el 1er año (USD 12)',
    custom: 'Incluido el 1er año (USD 12)',
  },
  {
    feature: 'Revisiones post-entrega',
    standard: '1 revisión',
    custom: '3 revisiones',
  },
  {
    feature: 'Soporte post-entrega',
    standard: 'No incluido',
    custom: '✅ Incluido, con ajustes finales (hasta 15 días de entregado)',
  },
  {
    feature: 'Tiempo de entrega',
    standard: '10-15 días hábiles',
    custom: '15-25 días hábiles',
  },
]

const powerBiComparisonData = [
  {
    feature: 'Fuentes de datos',
    standard: 'Conexión a 1 fuente (Excel/Sheets/CSV)',
    custom: 'Conexión a múltiples fuentes (bases de datos, APIs, ERP)',
  },
  {
    feature: 'Páginas del dashboard',
    standard: 'Una sola página',
    custom: 'Múltiples páginas con sistema de navegación lateral',
  },
  {
    feature: 'Medidas DAX',
    standard: 'Medidas básicas predefinidas',
    custom: 'Medidas DAX desarrolladas a medida del negocio',
  },
  {
    feature: 'Diseño visual',
    standard: 'Template de colores predefinido',
    custom: 'Diseño adaptado a la identidad visual de la marca',
  },
  {
    feature: 'Interactividad y filtros',
    standard: 'Filtros básicos predefinidos',
    custom: 'Filtros y segmentaciones a medida, según necesidad de análisis',
  },
  {
    feature: 'Acceso y seguridad',
    standard: 'Acceso mediante enlace compartido',
    custom: 'Acceso mediante usuario y contraseña',
  },
  {
    feature: 'Actualización de datos',
    standard: 'Manual, de forma sencilla',
    custom: 'Manual, de forma sencilla',
  },
  {
    feature: 'Capacitación',
    standard: 'No incluida',
    custom: 'Sesión de capacitación de uso incluida',
  },
  {
    feature: 'Revisiones post-entrega',
    standard: '1 revisión',
    custom: '3 revisiones',
  },
  {
    feature: 'Soporte post-entrega',
    standard: 'No incluido',
    custom: '✅ Incluido, con ajustes finales (hasta 15 días de entregado)',
  },
  {
    feature: 'Tiempo de entrega',
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

        {service.id === 5 && projects.length > 0 ? (
          <section className="detail__projects svc-demo-pricing">
            <div className="svc-demo-pricing__grid">
              <div className="project-card">
                <div className="project-card__image">
                  <span>{projects[0].image}</span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{projects[0].name}</h3>
                  <p className="project-card__desc">{projects[0].description}</p>
                  <a href="https://tudemo.com" target="_blank" rel="noopener noreferrer" className="project-card__link">
                    Ingresá a la demo →
                  </a>
                </div>
              </div>

              <div className="svc-pricing-card">
                <h3 className="svc-pricing-card__title">¿Producto estándar o personalizado?</h3>
                <p className="svc-pricing-card__text">
                  Es un desarrollo a medida por naturaleza: un sistema que se adapta a vos, no al revés, 100% personalizado.
                </p>
                <p className="svc-pricing-card__text">
                  Cada empresa tiene procesos, equipos y necesidades diferentes. En lugar de ofrecer un sistema rígido con funciones que quizás nunca uses, construimos una solución modular.
                </p>
                <p className="svc-pricing-card__text">
                  Vos elegís qué necesitás hoy, y nosotros implementamos cada módulo para que se integre con la forma en que trabaja tu empresa.
                </p>
                <h4 className="svc-pricing-card__subtitle">¿Cómo funciona?</h4>
                <ul className="svc-pricing-card__list">
                  <li><strong>Base del sistema</strong> – La estructura principal sobre la que funciona toda la plataforma.</li>
                  <li><strong>Módulos personalizados</strong> – Elegí los módulos que mejor se adapten a tu negocio.</li>
                  <li><strong>Implementación a medida</strong> – Configuramos procesos, permisos y reglas según tu forma de trabajar.</li>
                </ul>
              </div>
            </div>
          </section>
        ) : (
          projects.length > 0 && (
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
          )
        )}

        {service.id === 1 && (
          <ServiceComparison rows={portfolioComparisonData} />
        )}

        {service.id === 2 && (
          <ServiceComparison rows={comparisonData} />
        )}

        {service.id === 3 && (
          <ServiceComparison rows={powerBiComparisonData} />
        )}

        {service.id === 4 && (
          <ServiceComparison rows={ecommerceComparisonData} />
        )}

        {service.id === 5 && (
          <>
          <section id="svc-proyecto-tarjetas" className="svc-project">
            <div className="svc-project__intro">
              <h3 className="svc-project__intro-title">¿Para quién es este proyecto?</h3>
              <p className="svc-project__intro-text">
                Pensado para todo tipo de organización: comercios, estudios, pymes que recién empiezan a ordenarse y organizaciones grandes que quieren unificar sus áreas en un solo lugar.
              </p>
              <p className="svc-project__intro-text">
                Sin un sistema centralizado, la información se dispersa entre planillas y la memoria de cada responsable y eso le cuesta plata y tiempo a la empresa.
              </p>
            </div>

            <h3 className="svc-project__title">Así podría verse el control de tu empresa</h3>

            <div className="svc-project__grid">
              {svcModules.map((mod) => (
                <div key={mod.title} className={`svc-project__block svc-project__block--${mod.accent}`}>
                  <div className={`svc-project__icon svc-project__icon--${mod.accent}`}>
                    <ModuleIcon name={mod.icon} />
                  </div>
                  <div className="svc-project__info">
                    <h4>{mod.title}</h4>
                    <p>{mod.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="svc-project__closing">
              Seas una empresa chica que da su primer paso o una organización grande, el sistema se adapta por módulos a tu tamaño.
            </p>
          </section>
          </>
        )}
      </main>
    </div>
  )
}
