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
          <div className="comparison__table-wrapper">
            <table className="comparison__table">
              <thead>
                <tr>
                  <th className="comparison__th comparison__th--feature">Característica</th>
                  <th className="comparison__th comparison__th--standard">Producto Estándar</th>
                  <th className="comparison__th comparison__th--custom">Producto Personalizado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="comparison__td comparison__td--feature">Diseño base incluido</td>
                  <td className="comparison__td comparison__td--check">✓</td>
                  <td className="comparison__td comparison__td--check">✓</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Secciones predefinidas</td>
                  <td className="comparison__td">Hasta 5 secciones</td>
                  <td className="comparison__td">Ilimitadas</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Análisis de paleta de colores</td>
                  <td className="comparison__td comparison__td--cross">—</td>
                  <td className="comparison__td comparison__td--check">✓</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Diseño y rediseño de íconos</td>
                  <td className="comparison__td comparison__td--cross">—</td>
                  <td className="comparison__td comparison__td--check">✓</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Diseño visual personalizado</td>
                  <td className="comparison__td comparison__td--cross">—</td>
                  <td className="comparison__td comparison__td--check">✓</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Contenido y textos a medida</td>
                  <td className="comparison__td comparison__td--cross">—</td>
                  <td className="comparison__td comparison__td--check">✓</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Revisiones post-entrega</td>
                  <td className="comparison__td">1 revisión</td>
                  <td className="comparison__td">3 revisiones</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Soporte y ajustes finales</td>
                  <td className="comparison__td comparison__td--cross">—</td>
                  <td className="comparison__td comparison__td--check">✓</td>
                </tr>
                <tr>
                  <td className="comparison__td comparison__td--feature">Tiempo de entrega</td>
                  <td className="comparison__td">5-7 días hábiles</td>
                  <td className="comparison__td">7-12 días hábiles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
