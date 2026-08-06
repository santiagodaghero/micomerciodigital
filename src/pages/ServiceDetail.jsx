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
          <section className="svc-comparison">
            <h3 className="svc-comparison__title">¿Para quién es este proyecto?</h3>
            <div className="svc-comparison__text">
              <p>
                Este sistema está pensado para todo tipo de organización: comercios, estudios, institutos, pymes que recién empiezan a ordenarse, empresas medianas que necesitan dejar las planillas y organizaciones grandes que quieren unificar sus áreas en un solo lugar.
              </p>
              <p>
                Sin un sistema centralizado, la información se dispersa entre planillas, papeles y la memoria de cada responsable. Eso se traduce en errores de cálculo, sueldos mal liquidados, una asistencia que nadie controla y un stock que se pierde sin aviso. Cada uno de esos descuidos le cuesta plata y tiempo a la empresa, sin importar su tamaño.
              </p>
              <p>
                Este proyecto existe para terminar con ese desorden: todo en un solo lugar, con acceso según el rol de cada persona, procesos que se resuelven solos y decisiones tomadas con números reales en lugar de suposiciones.
              </p>
              <ul>
                <li><strong>Orden y control:</strong> todo el equipo y sus datos centralizados en un solo sistema.</li>
                <li><strong>Asistencia al día:</strong> presentismo y ausencias sin planillas, con el historial de cada persona.</li>
                <li><strong>Sueldos sin cuentas a mano:</strong> liquidaciones calculadas automáticamente, período por período.</li>
                <li><strong>Proyectos bajo control:</strong> responsables, estados y avance de cada trabajo siempre visibles.</li>
                <li><strong>Stock que no se pierde:</strong> alertas de reposición y movimientos registrados con un clic.</li>
                <li><strong>Decidir con datos:</strong> reportes y KPIs de ganancias, costos y márgenes en tiempo real.</li>
              </ul>
              <p>
                Seas una empresa chica que da su primer paso o una organización grande que necesita ordenar varias áreas, el sistema se adapta por módulos a tu tamaño y a tu forma de trabajar: arrancás por lo que necesitás hoy y vas sumando funciones a medida que crecés.
              </p>
            </div>
          </section>

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
            <button
              type="button"
              className="svc-comparison__more"
              onClick={() =>
                document.getElementById('svc-proyecto-tarjetas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              aria-label="Conocé más sobre el proyecto"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
              <span>Conocé más sobre el proyecto</span>
            </button>
          </section>

          <section id="svc-proyecto-tarjetas" className="svc-project">
            <h3 className="svc-project__title">Así se ve por dentro</h3>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Acceso y Roles</h4>
                <p>
                  Sistema de login donde cada empleado ingresa con usuario y contraseña propios. El acceso a las distintas secciones de la aplicación varía según la jerarquía y el rol: jefes de área, encargados o empleados de planta. Así se protege la información sensible de la empresa, mostrando solo lo que corresponde a cada nivel. Garantiza un control de acceso ordenado y seguro.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Calendario de Proyectos</h4>
                <p>
                  Vista mensual que centraliza todos los proyectos activos de la empresa, organizados día a día. Cada proyecto se identifica con un color según su estado: verde para finalizado, azul para iniciado y rojo para retrasado. Permite visualizar de un vistazo el avance general y detectar rápidamente demoras. Facilita el seguimiento sin necesidad de revisar cada proyecto por separado.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Reportes y KPIs</h4>
                <p>
                  Muestra la estructura organizacional de la empresa, con acceso a cada área y a los empleados que la integran. Informa la evolución mensual de ganancias, el personal por área, los mejores clientes y los productos más y menos vendidos. Centraliza los indicadores clave para la toma de decisiones. Facilita una visión global del desempeño del negocio.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Gestión de Personal</h4>
                <p>
                  Módulo con dos apartados: empleados (legajo, nombre, área, puesto, nivel operativo, altas y bajas) y asistencias (presentes, licencias, partes de enfermo). Centraliza la información básica del personal y su control diario. Permite dar de alta y baja empleados según corresponda. Simplifica el seguimiento operativo del equipo.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Gestión de Clientes</h4>
                <p>
                  Módulo de administración de clientes con su base de datos (nombre, CUIT, mail) para un mejor control comercial. Incluye la facturación, con creación de facturas y presupuestos en estados de aprobado y pagado. Centraliza toda la relación comercial con los clientes de la empresa. Facilita el seguimiento de cobranzas y presupuestos pendientes.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Sueldos y liquidaciones</h4>
                <p>
                  Los recibos de cada período filtrados por año y mes, con la liquidación de cada empleado ya calculada. Desde acá se generan y se consultan los sueldos sin planillas ni cuentas a mano.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Finanzas</h4>
                <p>
                  Apartado de ganancias con KPIs detallados: ingresos, costo de mercadería vendida, gastos, sueldos, ganancia neta y margen, todo con gráficos. Incluye ventas (a partir de facturas aceptadas) y gastos propios de la empresa. Ofrece una visión financiera completa e integrada del negocio.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Recursos</h4>
                <p>
                  Apartado que muestra todos los activos de la empresa, con su estado (disponible, activo, en mantenimiento o dado de baja), a quién fue asignado y a qué sucursal pertenece. Incluye además el control de stock, destacando los productos de mayor circulación y con alarmas de stock bajo. Centraliza el seguimiento de bienes y mercadería de la empresa.
                </p>
              </div>
            </div>

            <div className="svc-project__block">
              <div className="svc-project__info">
                <h4>Mensajería Interna</h4>
                <p>
                  Canal de comunicación interno entre jefes, encargados y empleados en ambos sentidos. Incluye notificaciones automáticas sobre solicitudes de licencia y su estado de aprobación. Facilita la comunicación fluida dentro de la empresa sin depender de herramientas externas. Mantiene informado a cada usuario según su rol.
                </p>
              </div>
            </div>
          </section>
          </>
        )}
      </main>
    </div>
  )
}
