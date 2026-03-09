import { useLanguage } from "../services/translation";
import "../styles/skills.css"

const Skills = () => {
    const { t } = useLanguage();

     const skillsData = [
        {
            titleKey: 'skills.skill-1-title',
            techs: "TypeScript Python JavaScript Cobol"
        },
        {
            titleKey: 'skills.skill-2-title',
            techs: "VSCode Figma Linux Git Font-Awesome"
        },
        {
            titleKey: 'skills.skill-3-title',
            techs: "React Vue Dinsnake Discord.js"
        },
        {
            titleKey: 'skills.skill-4-title',
            techs: "SQLite PostgreSQL Mongo"
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
                            <span className="skill-slashes">//</span> {t(skill.titleKey)}
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