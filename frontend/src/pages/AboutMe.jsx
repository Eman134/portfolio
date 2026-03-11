import { useLanguage } from '../services/translation'
import Skills from '../components/Skills.jsx'
import Contacts from '../components/contacts.jsx'
import '../styles/about.css'
import eloLogo from "../assets/elo_group_logo.jpg";
import engetowerLogo from "../assets/engetower_logo.jpg";
import profilePhoto from "../assets/kayke.jpeg"

const AboutMe = () => {
    const { t } = useLanguage()

    return (
        <div className="about-page-wrapper">
            <section className="about-content">
                <h1 className="about-title">
                    <span className="about-tag">/</span>
                    {t('about')}
                </h1>

                <p className="about-subtitle">{t('about-subtitle')}</p>

                <div className="about-main">
                    <div className="about-bio">
                        <p>{t('about-paragraph-1')}</p>
                        <p>{t('about-paragraph-2')}</p>
                    </div>

                    <div className="about-photo-wrapper">
                        <img className="about-photo" src={profilePhoto} alt="Profile" />
                    </div>
                </div>
            </section>

            <div className="about-intro-contacts">
                <div className="contact-links-group" style={{ margin: '0 auto', justifyContent: 'flex-start', maxWidth: '980px', padding: '0 2rem' }}>
                    <a href="https://linkedin.com/in/kaykeeman" className="contact-btn-social" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-linkedin icon'></i>
                        <span className="label">Linkedin</span>
                    </a>
                    <a href="https://github.com/Eman134" className="contact-btn-social" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github icon'></i>
                        <span className="label">Github</span>
                    </a>
                    <a href="mailto:kaykeeman@gmail.com" className="contact-btn-social" target="_blank" rel="noopener noreferrer">
                        <i className='bx bx-envelope icon'></i>
                        <span className="label">Email</span>
                    </a>
                    <a href="https://wa.me/5531971661762" className="contact-btn-social" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-whatsapp icon'></i>
                        <span className="label">Whatsapp</span>
                    </a>
                </div>
            </div>

            <Skills />

            <section className="experience-content">
                <h1 className="experience-title">
                    <span className="experience-tag">#</span>
                    {t('experience')}
                    <hr></hr>
                </h1>
                <div className="timeline">
                    <div className="container">
                        <img src={eloLogo} alt="EloGroup Logo"/>
                        <div className="text-box">
                            <h2 className="enterpriseTitle text-gradient"> 
                                {t('enterprise-name-1')} 
                                <span className="job-date-pill">
                                    {t('job-time-1')} · {t('job-time-1-interval')}
                                </span>
                            </h2>
                            <h2> {t('position-name-1')}</h2>
                            <p>{t('job-description-1')}</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={engetowerLogo} alt="Engetower Logo"/>
                        <div className="text-box">
                            <h2 className="enterpriseTitle text-gradient"> 
                                {t('enterprise-name-2')}
                                <span className="job-date-pill">
                                    {t('job-time-2')} · {t('job-time-2-interval')}
                                </span>
                            </h2>
                            <h2> {t('position-name-2')}</h2>
                            <p>{t('job-description-2')}</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={engetowerLogo} alt="Engetower Logo"/>
                        <div className="text-box">
                            <h2 className="enterpriseTitle text-gradient"> 
                                {t('enterprise-name-3')}
                                <span className="job-date-pill">
                                    {t('job-time-3')} · {t('job-time-3-interval')}
                                </span>
                            </h2>
                            <h2> {t('position-name-3')}</h2>
                            <p>{t('job-description-3')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="education-content">
                <h1 className="experience-title">
                    <span className="experience-tag">#</span>
                    {t('education')}
                </h1>
                <div className="education-grid">
                    <div className="education-card">
                        <i className='bx bxs-graduation edu-icon'></i>
                        <div className="edu-info">
                            <h3>{t('education-1-school')}</h3>
                            <p>{t('education-1-degree')}</p>
                            <span className="job-date-pill">{t('education-1-time')}</span>
                        </div>
                    </div>
                    <div className="education-card">
                        <i className='bx bxs-school edu-icon'></i>
                        <div className="edu-info">
                            <h3>{t('education-2-school')}</h3>
                            <p>{t('education-2-degree')}</p>
                            <span className="job-date-pill">{t('education-2-time')}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="certificates-content">
                <h1 className="experience-title">
                    <span className="experience-tag">#</span>
                    {t('certificates')}
                </h1>
                <div className="certificates-grid">
                    <div className="certificate-card">
                        <i className='bx bx-certification cert-icon'></i>
                        <div className="cert-info">
                            <span className="cert-date">{t('cert-1-date')}</span>
                            <h3>{t('cert-1-title')}</h3>
                            <p>{t('cert-1-org')}</p>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <i className='bx bx-terminal cert-icon'></i>
                        <div className="cert-info">
                            <span className="cert-date">{t('cert-2-date')}</span>
                            <h3>{t('cert-2-title')}</h3>
                            <p>{t('cert-2-org')}</p>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <i className='bx bx-award cert-icon'></i>
                        <div className="cert-info">
                            <span className="cert-date">{t('cert-3-date')}</span>
                            <h3>{t('cert-3-title')}</h3>
                            <p>{t('cert-3-org')}</p>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <i className='bx bx-cloud cert-icon'></i>
                        <div className="cert-info">
                            <span className="cert-date">{t('cert-4-date')}</span>
                            <h3>{t('cert-4-title')}</h3>
                            <p>{t('cert-4-org')}</p>
                        </div>
                    </div>
                    <div className="certificate-card">
                        <i className='bx bx-check-shield cert-icon'></i>
                        <div className="cert-info">
                            <span className="cert-date">{t('cert-5-date')}</span>
                            <h3>{t('cert-5-title')}</h3>
                            <p>{t('cert-5-org')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="about-footer-contacts">
                <Contacts />
            </div>
        </div>
    )
}

export default AboutMe
