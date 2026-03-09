import { useLanguage } from '../services/translation'
import "../styles/contacts.css"
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import EmailForm from './EmailForm'

const Contacts = () => {
    const { t } = useLanguage()

    const items = [
        { href: 'https://linkedin.com/in/kaykeeman', label: 'Linkedin', icon: <FaLinkedin /> },
        { href: 'https://github.com/Eman134', label: 'Github', icon: <FaGithub /> },
        { href: 'mailto:kaykeeman@gmail.com', label: 'Email', icon: <FaEnvelope /> },
        { href: 'https://wa.me/5531971661762', label: 'Whatsapp', icon: <FaWhatsapp /> },
    ];

    return (
        <section id="contact" className="contact-content">
            <h2 className="contact-title">
                <span className="contact-hashtag">#</span>{t("contact")}
            </h2>
            <p className="contact-desc">{t("contato-resumo")}</p>

            <div className="contact-links-group">
                {items.map(item => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="contact-btn-social"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </a>
                ))}
            </div>

            <EmailForm />
        </section>
    )
}

export default Contacts;