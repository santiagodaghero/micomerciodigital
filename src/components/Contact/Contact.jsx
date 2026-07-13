import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <AnimatedSection>
          <h2 className="contact__title">Contáctanos</h2>
          <p className="contact__subtitle">
            Cuéntanos sobre tu proyecto y te respondemos a la brevedad
          </p>
          <form className="contact__form">
            <div className="contact__form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" required placeholder="Tu nombre" />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="tu@email.com" />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" required rows={5} placeholder="Contanos de tu proyecto..." />
            </div>
            <button type="submit" className="contact__btn">Enviar mensaje</button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
