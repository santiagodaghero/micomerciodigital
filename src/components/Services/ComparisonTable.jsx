import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './ComparisonTable.css'

export default function ComparisonTable() {
  return (
    <section className="comparison">
      <div className="container">
        <AnimatedSection>
          <h2 className="comparison__title">¿Producto Estándar o Personalizado?</h2>
          <p className="comparison__subtitle">
            Elegí la opción que mejor se adapte a lo que necesitás
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="comparison__grid">
            <div className="comparison__card comparison__card--standard">
              <h3 className="comparison__card-title">Producto Estándar</h3>
              <ul className="comparison__card-list">
                <li>Basado en un modelo ya diseñado y probado, adaptado a cada proyecto</li>
                <li>Contenido y ajustes visuales aplicados sobre una estructura estandarizada</li>
                <li>Cantidad de secciones y funcionalidades limitada según el modelo elegido</li>
                <li>Paleta de colores e íconos predefinidos, sin diseño a medida</li>
                <li>Responsive básico, adaptado a celular y PC</li>
                <li>SEO básico incluido</li>
                <li>Dominio incluido durante el primer año</li>
                <li>1 revisión post-entrega</li>
                <li>Entrega rápida, con calidad sólida y resultados concretos</li>
                <li>Ideal para quienes buscan una presencia profesional online sin necesidad de personalización profunda</li>
              </ul>
            </div>
            <div className="comparison__card comparison__card--custom">
              <h3 className="comparison__card-title">Producto Personalizado</h3>
              <ul className="comparison__card-list">
                <li>Diseño desde cero, a medida de tu marca</li>
                <li>Identidad visual, estructura y funcionalidades sin límites</li>
                <li>Animaciones al pasar de secciones</li>
                <li>Iconos y gráficos a medida</li>
                <li>Trabajo más exhaustivo en adaptabilidad responsive (mobile, tablet y PC)</li>
                <li>Optimización de velocidad y SEO</li>
                <li>Más revisiones y soporte post-entrega</li>
                <li>Ideal si buscás un proyecto único al 100%</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="comparison__note">
            Dentro de cada uno de nuestros servicios podés encontrar el detalle de lo que incluye un producto estándar y un producto personalizado, para que elijas la opción que mejor se adapte a tus necesidades.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
