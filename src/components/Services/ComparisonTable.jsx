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
                <li>Basado en un modelo ya diseñado y probado</li>
                <li>Adaptamos tu contenido y ajustes visuales a un modelo estandarizado</li>
                <li>Cambios limitados al modelo (sin diseño desde cero)</li>
                <li>Cantidad de secciones limitada según el modelo elegido</li>
                <li>Calidad sólida y entrega rápida</li>
                <li>Iconos estándares, sin modificaciones visuales/colores</li>
                <li>Responsive básico (adaptado a celular y PC)</li>
                <li>Ideal para resultados concretos, sin personalización profunda</li>
                <li>Menor cantidad de cambios post-entrega</li>
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
