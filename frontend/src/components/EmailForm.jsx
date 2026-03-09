import { useRef, useState, useEffect } from 'react'
import { useLanguage } from '../services/translation'
import { sendEmail } from '../services/email'
import '../styles/contacts.css'

const EmailForm = () => {
  const { t } = useLanguage()
  const formRef = useRef()
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (enviado || error) {
      const timer = setTimeout(() => {
        setEnviado(false)
        setError(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [enviado, error])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    sendEmail(formRef)
      .then(() => {
        setEnviado(true)
        formRef.current.reset()
      })
      .catch((err) => {
        console.error('Email send failed', err)
        setError('Erro ao enviar mensagem')
      })
  }

  return (
    <div className="contact-form-premium">
      <div className="form-heading-premium">&gt; {t('entre-em-contato') }</div>
      <p className="form-sub-premium">{t('contato-descricao')}</p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-field-group">
            <label className="form-field-label" htmlFor="nome">{t('nome')}</label>
            <input className="form-field-input" type="text" id="nome" name="name" placeholder="Ex: Kayke Emanoel" required />
        </div>

        <div className="form-field-group">
            <label className="form-field-label" htmlFor="email">{t('email')}</label>
            <input className="form-field-input" type="email" id="email" name="email" placeholder="seu@email.com" required />
        </div>

        <div className="form-field-group">
            <label className="form-field-label" htmlFor="mensagem">{t('mensagem')}</label>
            <textarea className="form-field-textarea" id="mensagem" name="message" placeholder="Sua mensagem..." required></textarea>
        </div>

        <button className="btn-form-submit" type="submit">{t('enviar')}</button>

        {enviado && <p className="successo-mensagem">{t('mensagem-enviada')}</p>}
        {error && <p className="error-mensagem">{error}</p>}
      </form>
    </div>
  )
}

export default EmailForm;
