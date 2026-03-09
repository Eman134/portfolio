import { Link } from 'react-router-dom'
import { useLanguage } from "../services/translation";
import "../styles/projects.css"
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const BestProjects = () => {
    const { t } = useLanguage();

    const bestProjectsData = [
        {
            image: project1Image,
            techs: ['React', 'Node.js'],
            titleKey: 'projects.project-1-title',
            descKey: 'projects.project-1-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            image: project2Image,
            techs: ['React', 'Node.js'],
            titleKey: 'projects.project-2-title',
            descKey: 'projects.project-2-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },
        {
            image: project3Image,
            techs: ['React', 'Node.js'],
            titleKey: 'projects.project-3-title',
            descKey: 'projects.project-3-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        }
    ];

    return (
        <section className="best-projects-content">
            <div className="best-projects-header">
                <h2 className="best-projects-title">
                    <span className="projects-tag">#</span>
                    {t("projects.best-projects")}
                </h2>
                <Link to="projects" className="all-projects">{t("ver-todos")} &gt;</Link>
            </div>

            <div className="best-projects-grid">
                {bestProjectsData.map((project, index) => (
                    <div className="project-card-premium" key={index}>
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={t(project.titleKey)}
                                className="project-img-display"
                            />
                        </div>

                        <div className="project-body-premium">
                            <div className="project-tech-stack">
                                {project.techs.join(' · ')}
                            </div>

                            <h3 className="project-title-premium">
                                {t(project.titleKey)}
                            </h3>

                            <p className="project-desc-premium">
                                {t(project.descKey)}
                            </p>

                            <div className="project-btns-premium">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-card-sm"
                                >
                                    &gt; GitHub
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-card-sm"
                                >
                                    &gt; Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestProjects;