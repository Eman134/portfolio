import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLanguage } from "../services/translation";
import "../styles/projects.css"
import project3Image_unused from '../assets/realconsult/realconsult.png';

// Nisruksha images
import nisrukshaImage from '../assets/nisruksha/nisruksha.png';
import imgBlackjack from '../assets/nisruksha/imagemblackjack.png';
import imgMapa from '../assets/nisruksha/imagemmapa.png';
import imgMaquina from '../assets/nisruksha/imagemmaquina.png';
import imgMaquina2 from '../assets/nisruksha/imagemmaquina2.png';
import imgMineracao from '../assets/nisruksha/imagemmineracao.png';
import imgMineracao2 from '../assets/nisruksha/imagemmineracao2armazem.png';
import imgMochila from '../assets/nisruksha/imagemmochila.png';
import imgPesca from '../assets/nisruksha/imagempesca.png';
import imgSaldo from '../assets/nisruksha/imagemsaldo.png';

// PsiPlus images
import psiplusMain from '../assets/psiplus/psiplus.png';
import psi1 from '../assets/psiplus/psiplus1.png';
import psi2 from '../assets/psiplus/psiplus2.png';
import psi3 from '../assets/psiplus/psiplus3.png';
import psi4 from '../assets/psiplus/psiplus4.png';
import psi5 from '../assets/psiplus/psiplus5.png';
import psi6 from '../assets/psiplus/psiplus6.png';
import psi7 from '../assets/psiplus/psiplus7.png';
import psi8 from '../assets/psiplus/psiplus8.jpg';
import psi9 from '../assets/psiplus/psiplus9.jpg';

// REALConsult images
import rcMain from '../assets/realconsult/realconsult.png';
import rcLogin from '../assets/realconsult/Login.png';
import rcDashboard from '../assets/realconsult/Dashboard.png';
import rcAuditoria from '../assets/realconsult/Auditoria.png';
import rcEconomias from '../assets/realconsult/EconomiasGeradas.png';
import rcGestaoClientes from '../assets/realconsult/GestaoClientes.png';
import rcGestaoUsuarios from '../assets/realconsult/GestaoUsuarios.png';
import rcReceitas from '../assets/realconsult/Receitas.png';
import rcReceitasFat from '../assets/realconsult/ReceitasFaturamento.png';
import rcDespesas from '../assets/realconsult/Despesas.png';
import rcAPISaas1 from '../assets/realconsult/APISaas1.png';
import rcAPISaas2 from '../assets/realconsult/APISaas2.png';
import rcLembreteNF from '../assets/realconsult/LembreteNF.png';
import rcPerfil from '../assets/realconsult/PerfilUsuario.png';
import rcApresentacao from '../assets/realconsult/realconsultapresentacao.jpg';

const BestProjects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);

    const bestProjectsData = [
        {
            id: 1,
            image: nisrukshaImage,
            gallery: [
                nisrukshaImage, imgMapa, imgMineracao, imgMineracao2,
                imgMaquina, imgMaquina2, imgMochila, imgPesca,
                imgBlackjack, imgSaldo
            ],
            techs: ['Discord.js', 'Node.js', 'Canvas', 'PostgreSQL'],
            titleKey: 'projects.project-1-title',
            descKey: 'projects.project-1-description',
            detailsKey: 'projects.project-1-details',
            github: 'https://github.com/Eman134/Nisruksha-Bot',
            demo: null
        },
        {
            id: 2,
            image: psiplusMain,
            gallery: [psi8, psi9, psi1, psi2, psi3, psi4, psi5, psi6, psi7],
            techs: ['Spring Boot', 'React', 'TypeScript'],
            titleKey: 'projects.project-2-title',
            descKey: 'projects.project-2-description',
            detailsKey: 'projects.project-2-details',
            awardKey: 'projects.project-2-award',
            github: 'https://github.com/Eman134/pmg-es-2025-1-ti2-3740100-psiplus',
            linkedin: 'https://www.linkedin.com/posts/kaykeeman_wemakesoftware-pucminas-inovaaexaeto-activity-7371329760477536256-TxLc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQutiQBT9SMzyxs5977xrztp20kEx8elnQ',
            demo: null
        },
        {
            id: 3,
            image: rcMain,
            gallery: [rcApresentacao,rcDashboard, rcLogin, rcAuditoria, rcEconomias, rcGestaoClientes, rcGestaoUsuarios, rcReceitas, rcReceitasFat, rcDespesas, rcAPISaas1, rcAPISaas2, rcLembreteNF, rcPerfil],
            techs: ['Next.js 15', 'Spring Boot', 'MySQL', 'Tailwind'],
            titleKey: 'projects.project-3-title',
            descKey: 'projects.project-3-description',
            detailsKey: 'projects.project-3-details',
            awardKey: 'projects.project-3-award',
            linkedin: 'https://www.linkedin.com/posts/kaykeeman_wemakesoftware-pucminas-inovaaexaeto-activity-7441977418527150081-A5sf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQutiQBT9SMzyxs5977xrztp20kEx8elnQ',
            github: null,
            githubPrivate: true
        }
    ];

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section className="best-projects-content">
            <div className="best-projects-header">
                <h2 className="best-projects-title">
                    <span className="projects-tag">#</span>{" "}
                    {t("projects.best-projects")}
                </h2>
                <Link to="projects" className="all-projects">{t("ver-todos")} &gt;</Link>
            </div>

            <div className="best-projects-grid">
                {bestProjectsData.map((project, index) => (
                    <div className="project-card-premium" key={index} onClick={() => openModal(project)}>
                        <div className="project-image-container">
                            {project.awardKey && (
                                <div className="card-award-tag">
                                    <i className='bx bxs-medal card-medal-icon'></i>
                                    <span className="award-text">{t(project.awardKey)}</span>
                                </div>
                            )}
                            <img
                                src={project.image}
                                alt={t(project.titleKey)}
                                className="project-img-display"
                            />
                            <div className="project-image-overlay">
                                <span>{t("view-details")}</span>
                            </div>
                        </div>

                        <div className="project-body-premium">
                            <div className="project-tags-group">
                                {project.techs.map((tech, i) => (
                                    <span className="project-tag-pill" key={i}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 className="project-title-premium">
                                {t(project.titleKey)}
                            </h3>

                            <p className="project-desc-premium">
                                {t(project.descKey)}
                            </p>

                            <div className="project-btns-premium" onClick={(e) => e.stopPropagation()}>
                                {project.githubPrivate ? (
                                    <span className="btn-card-sm-disabled">
                                        <i className='bx bx-lock-alt'></i> {t("projects.project-3-github-private")}
                                    </span>
                                ) : (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card-sm"
                                    >
                                        &gt; GitHub
                                    </a>
                                )}

                                {project.linkedin && (
                                    <a
                                        href={project.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card-sm"
                                    >
                                        <i className='bx bxl-linkedin-square'></i> LinkedIn
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card-sm"
                                    >
                                        &gt; Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>&times;</button>

                        <div className="modal-scroll-area">
                            <h2 className="modal-title">{t(selectedProject.titleKey)}</h2>

                            <div className="modal-gallery-premium">
                                {selectedProject.gallery.map((img, idx) => (
                                    <img key={idx} src={img} alt="Project Preview" className="gallery-item-premium" />
                                ))}
                            </div>

                            <div className="modal-info-section">
                                <div className="project-tags-group">
                                    {selectedProject.techs.map((tech, i) => (
                                        <span className="project-tag-pill" key={i}>{tech}</span>
                                    ))}
                                </div>
                                <h2 className="modal-title">{t(selectedProject.titleKey)}</h2>

                                {selectedProject.awardKey && (
                                    <div className="modal-award-highlight">
                                        <i className='bx bxs-medal medal-icon'></i>
                                        <span>{t(selectedProject.awardKey)}</span>
                                    </div>
                                )}

                                <p className="modal-description">{t(selectedProject.descKey)}</p>
                                {selectedProject.detailsKey && (
                                    <div className="modal-details-box">
                                        <h4>{t("Aprendizado & Tecnologias")}:</h4>
                                        <p>{t(selectedProject.detailsKey)}</p>
                                    </div>
                                )}

                                <div className="project-btns-premium">
                                    {selectedProject.githubPrivate ? (
                                        <span className="btn-card-sm-disabled">
                                            <i className='bx bx-lock-alt'></i> {t("projects.private-repo")}
                                        </span>
                                    ) : (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-card-sm">&gt; GitHub</a>
                                    )}

                                    {selectedProject.linkedin && (
                                        <a href={selectedProject.linkedin} target="_blank" rel="noopener noreferrer" className="btn-card-sm">
                                            <i className='bx bxl-linkedin-square'></i> {t("projects.project-2-linkedin")}
                                        </a>
                                    )}

                                    {selectedProject.demo && (
                                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-card-sm">&gt; Demo</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BestProjects;