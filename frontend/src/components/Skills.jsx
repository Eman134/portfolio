import { useLanguage } from "../services/translation";
import "../styles/skills.css"

const Skills = () => {
    const { t } = useLanguage();

    const skillsData = [
        {
            titleKey: 'skills.languages',
            iconClass: 'bx bx-code-alt',
            techs: "Java Golang JavaScript TypeScript C/C++"
        },
        {
            titleKey: 'skills.backend',
            iconClass: 'bx bx-terminal',
            techs: "Node.js(Express) Spring-Boot RESTful-APIs Postman Testes-Unitários/Automatizados"
        },
        {
            titleKey: 'skills.frontend',
            iconClass: 'bx bxl-react',
            techs: "React.js HTML5 CSS3 Tailwind Bootstrap"
        },
        {
            titleKey: 'skills.databases',
            iconClass: 'bx bx-coin-stack',
            techs: "PostgreSQL Redis"
        },
        {
            titleKey: 'skills.devops',
            iconClass: 'bx bx-cloud',
            techs: "Docker Git"
        },
        {
            titleKey: 'skills.best_practices',
            iconClass: 'bx bx-medal',
            techs: "POO SOLID Clean-Code Design-Patterns"
        },
        {
            titleKey: 'skills.modeling',
            iconClass: 'bx bx-layer',
            techs: "UML BPMN"
        },
        {
            titleKey: 'skills.tools_methods',
            iconClass: 'bx bx-wrench',
            techs: "Scrum Kanban Trello Figma Github"
        }
    ];

    return (
        <section className="skills-content-premium">
            <h2 className="skills-section-title">
                <span className="skills-hash">#</span>
                {t("skills")}
            </h2>

            <div className="skills-grid-premium">
                {skillsData.map((skill, index) => (
                    <div className="skill-box-premium" key={index}>
                        <div className="skill-box-header">
                            <i className={`${skill.iconClass} skill-icon-premium`}></i>
                            {t(skill.titleKey)}
                        </div>
                        <div className="skill-tags-group">
                            {skill.techs.split(' ').map((tech, i) => (
                                <span className="skill-tag-premium" key={i}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;