import { useEffect, useState } from "react";
import { useLanguage } from "../services/translation";
import "../styles/resume.css";

const Resume = () => {
    const { t, idioma } = useLanguage();
    const [resumeLang, setResumeLang] = useState(idioma === "PT" ? "PT" : "EN");

    useEffect(() => {
        setResumeLang(idioma === "PT" ? "PT" : "EN");
    }, [idioma]);

    const resumeFile = resumeLang === "PT" ? "/curriculo-pt.pdf" : "/resume-en.pdf";

    return (
        <div className="resume-content">
            <h1 className="resume-title">
                <span className="resume-tag">&lt;</span>
                {t('resume')}
                <span className="resume-tag">&gt;</span>
            </h1>
            <div className="resume-actions">
                <button
                    type="button"
                    className={`resume-lang-btn ${resumeLang === "PT" ? "active" : ""}`}
                    onClick={() => setResumeLang("PT")}
                >
                    {t('resume-portuguese')}
                </button>
                <button
                    type="button"
                    className={`resume-lang-btn ${resumeLang === "EN" ? "active" : ""}`}
                    onClick={() => setResumeLang("EN")}
                >
                    {t('resume-english')}
                </button>
            </div>
            <div className="resume-preview">
                <iframe
                    className="resume-frame"
                    src={resumeFile}
                    title={t('resume')}
                />
            </div>
        </div>
    );
};

export default Resume;