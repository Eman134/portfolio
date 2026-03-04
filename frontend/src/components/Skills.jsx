import { useLanguage } from "../services/translation";
import "../styles/skills.css"

const Skills = () => {
    const { t } = useLanguage();

     const skillsData = [
        {
            titleKey: 'skills.skill-1-title',
            techs: "TyppeScript Python JavaScript Cobol"
        },
        {
            titleKey: 'skills.skill-2-title',
            techs: "VSCode Figma Linux Git Font Awesome"
        },
        {
            titleKey: 'skills.skill-3-title',
            techs: " React Vue Dinsnake Discord.js"
        },
        {
            titleKey: 'skills.skill-4-title',
            techs: "SQLite PostGreSQL Mongo"
        }
    ];

    return (
        <section className="skills-content">
            <h1 className="skills-title">
                <span className="skills-tag">#</span>
                {t("skills")}
            </h1>

            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <h3 className="skills-description">
                            {t(skill.titleKey)}
                        </h3>
                        <p className="skills-details">{t(skill.techs)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;