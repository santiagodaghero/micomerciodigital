import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './ServiceComparison.css'

function CheckIcon() {
  return (
    <svg className="svc-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ServiceComparison({ rows }) {
  const formatCell = (text) => {
    if (text.startsWith('✅')) {
      return (
        <>
          <CheckIcon /> {text.replace('✅', '').trim()}
        </>
      )
    }
    return text
  }

  return (
    <section className="svc-comparison">
      <AnimatedSection>
        <h3 className="svc-comparison__title">¿Producto Estándar o Personalizado?</h3>
        <p className="svc-comparison__subtitle">
          Conocé las diferencias para elegir la mejor opción
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="svc-comparison__table-wrapper">
          <table className="svc-comparison__table">
            <thead>
              <tr>
                <th className="svc-comparison__th svc-comparison__th--feature">Característica</th>
                <th className="svc-comparison__th svc-comparison__th--standard">Estándar</th>
                <th className="svc-comparison__th svc-comparison__th--custom">Personalizado</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="svc-comparison__td svc-comparison__td--feature">{row.feature}</td>
                  <td className="svc-comparison__td">{formatCell(row.standard)}</td>
                  <td className="svc-comparison__td svc-comparison__td--custom">{formatCell(row.custom)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </section>
  )
}
