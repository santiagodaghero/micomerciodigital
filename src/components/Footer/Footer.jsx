import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo MiComercioDigital" className="footer__logo-img" />
          <p className="footer__text">
            Creamos tu presencia digital
          </p>
        </div>

        <div className="footer__social">
          <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href="#" className="footer__social-link footer__whatsapp" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} MiComercioDigital. Todos los derechos reservados.
        </p>

        <button className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba">
          &#8593;
        </button>
      </div>
    </footer>
  )
}
