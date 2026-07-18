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
              <p className="comparison__card-text">
                Partimos de uno de nuestros modelos de muestra ya diseñados y probados, adaptándolo a tu contenido, tus colores y pequeños ajustes visuales para lograr un resultado prolijo y profesional. Los cambios están limitados a lo que el modelo permite —no incluye diseño desde cero ni desarrollos extra—, pero mantiene una calidad sólida, funcional y con una entrega más rápida. Es la opción ideal si buscás resultados concretos sin necesidad de personalizaciones profundas.
              </p>
            </div>
            <div className="comparison__card comparison__card--custom">
              <h3 className="comparison__card-title">Producto Personalizado</h3>
              <p className="comparison__card-text">
                Dejamos de lado los modelos de muestra y diseñamos tu proyecto desde cero, pensando en tu marca, tu público y tus objetivos particulares. Trabajamos tu identidad visual, la estructura y las funcionalidades sin límites de secciones, productos o páginas, e incluimos más revisiones y soporte posterior a la entrega para ajustar cada detalle. Es la opción indicada si buscás que tu proyecto sea único y represente al 100% lo que tu negocio necesita.
              </p>
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
