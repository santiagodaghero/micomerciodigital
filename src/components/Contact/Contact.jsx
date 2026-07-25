import { useRef, useState } from 'react'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import './Contact.css'

export default function Contact() {
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const fd = new FormData(formRef.current)
    const newErrors = {}
    if (!fd.get('name')?.trim()) newErrors.name = true
    if (!fd.get('email')?.trim()) newErrors.email = true
    if (!fd.get('phone')?.trim()) newErrors.phone = true
    if (!fd.get('service')) newErrors.service = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const fd = new FormData(formRef.current)
    const name = fd.get('name').trim()
    const email = fd.get('email').trim()
    const phone = fd.get('phone').trim()
    const service = fd.get('service')
    const message = fd.get('message')?.trim() || ''

    const subject = encodeURIComponent(`Consulta desde la web - ${service}`)
    let body = `Hola, me llamo ${name}.\n\nServicio: ${service}\nTeléfono: ${phone}`
    if (message) body += `\n\n${message}`
    body += `\n\nMi email de contacto: ${email}`
    window.location.href = `mailto:info@comerciodigital.com.ar?subject=${subject}&body=${encodeURIComponent(body)}`
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    if (!validate()) return

    const fd = new FormData(formRef.current)
    const name = fd.get('name').trim()
    const email = fd.get('email').trim()
    const phone = fd.get('phone').trim()
    const service = fd.get('service')
    const message = fd.get('message')?.trim() || ''

    let text = `Hola, me llamo ${name}.\nServicio: ${service}\nTeléfono: ${phone}`
    if (message) text += `\n\n${message}`
    text += `\n\nMi email de contacto: ${email}`

    window.open(`https://wa.me/5493541534022?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <AnimatedSection>
          <h2 className="contact__title">Contáctanos</h2>
          <p className="contact__subtitle">
            Cuéntanos sobre tu proyecto y te respondemos a la brevedad
          </p>
          <form className="contact__form" ref={formRef} noValidate>
            <div className={`contact__form-group ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required placeholder="Tu nombre" onChange={() => setErrors(prev => ({ ...prev, name: false }))} />
            </div>
            <div className={`contact__form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="tu@email.com" onChange={() => setErrors(prev => ({ ...prev, email: false }))} />
            </div>
            <div className={`contact__form-group ${errors.phone ? 'has-error' : ''}`}>
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" required placeholder="Tu número de teléfono" onChange={() => setErrors(prev => ({ ...prev, phone: false }))} />
            </div>
            <div className={`contact__form-group ${errors.service ? 'has-error' : ''}`}>
              <label htmlFor="service">Servicio</label>
              <select id="service" name="service" required defaultValue="" onChange={() => setErrors(prev => ({ ...prev, service: false }))}>
                <option value="" disabled>Seleccioná un servicio</option>
                <option value="Portfolio profesional">Portfolio profesional</option>
                <option value="Página web">Página web</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Dashboard Power BI">Dashboard Power BI</option>
                <option value="Control organizacional">Control organizacional</option>
              </select>
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">Mensaje <span className="contact__optional">(opcional)</span></label>
              <textarea id="message" name="message" rows={5} placeholder="Contanos de tu proyecto..." />
            </div>
            <div className="contact__btns">
              <button type="button" className="contact__btn contact__btn--email" onClick={handleSubmit}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Enviar email
              </button>
              <button type="button" className="contact__btn contact__btn--whatsapp" onClick={handleWhatsApp}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
