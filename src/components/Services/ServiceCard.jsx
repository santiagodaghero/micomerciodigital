import { Link } from 'react-router-dom'
import './ServiceCard.css'

export default function ServiceCard({ service }) {
  return (
    <Link to={`/servicio/${service.id}`} className="card">
      <div className="card__image">
        <div className="card__image-placeholder">
          <img src={service.icon} alt={service.name} className="card__image-icon" />
        </div>
      </div>

      <div className="card__info">
        <h3 className="card__name">{service.name}</h3>
        <p className="card__description">{service.description}</p>
        <div className="card__includes">
          <span className="card__includes-title">Incluye:</span>
          <ul className="card__includes-list">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card__pricing">
        <div className="card__price-block">
          <span className="card__price-label">Estimado</span>
          <span className="card__price-value">{service.price}</span>
        </div>
        <div className="card__price-block card__price-block--custom">
          <span className="card__price-label">Personalizado</span>
          <span className="card__price-value">{service.customPrice}</span>
        </div>
      </div>
    </Link>
  )
}
