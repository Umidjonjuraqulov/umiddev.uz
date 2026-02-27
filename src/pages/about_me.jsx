import React from "react";
import { useTranslation } from "react-i18next";
import profile from "../assets/myphoto.jpg";
import "../styles/about_me.css";
import resume from "../assets/resume.pdf";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="site-container about-page">
        <div className="text-center mb-4">
          <h1 className="about-title">{t("about.title")}</h1>
          <p className="about-subtitle">{t("about.subtitle")}</p>
        </div>

        <div className="about-card">
          {/* ✅ LEFT: rasm + socials */}
          <div className="about-left">
            <div className="about-img-wrap">
              <img src={profile} alt="Umidjon" className="about-img" />
            </div>

            {/* ✅ Socials rasm tagida */}
            <div className="about-socials">
              {/* Telegram */}
              <a className="about-social" href="https://t.me/Juraqulov_Umidjon" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M9.04 15.47 8.9 19.7c.56 0 .8-.24 1.09-.53l2.62-2.5 5.43 3.97c.99.55 1.7.26 1.95-.91l3.53-16.58c.31-1.44-.52-2-1.45-1.65L1.64 9.55c-1.39.55-1.37 1.34-.24 1.69l5.6 1.75L19.98 5.4c.66-.4 1.26-.18.77.25z" />
                </svg>
              </a>

              {/* GitHub */}
              <a className="about-social" href="https://github.com/Umidjonjuraqulov" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8 23c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1 .11-.79.42-1.32.76-1.62-2.67-.3-5.48-1.34-5.48-5.96 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.55.12-3.23 0 0 1-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.05.14 3.01.41 2.3-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.92.12 3.23.77.84 1.24 1.91 1.24 3.22 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a className="about-social" href="https://linkedin.com/in/umidjon-juraqulov-030a912b7" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.78-2.2 4.05 0 4.8 2.67 4.8 6.14V24h-4v-8.5c0-2.03-.04-4.65-2.83-4.65-2.83 0-3.26 2.2-3.26 4.5V24h-4V8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a className="about-social" href="https://instagram.com/juraqulov_umidjon.py" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm6-1.4a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 5.8z" />
                </svg>
              </a>

              {/* Facebook */}
              <a className="about-social" href="https://facebook.com/profile.php?id=100079703570952" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ✅ RIGHT: matn + resume */}
          <div className="about-right">
            <h3 className="about-name">{t("about.name")}</h3>

            <p className="about-desc">{t("about.desc1")}</p>
            <p className="about-desc">{t("about.desc2")}</p>

            <div className="about-skills">
              <span className="about-skill">Html</span>
              <span className="about-skill">CSS</span>
              <span className="about-skill">Bootstrap</span>
              <span className="about-skill">React</span>
              <span className="about-skill">Python</span>
              <span className="about-skill">FastAPI</span>
              <span className="about-skill">Django</span>
              <span className="about-skill">REST API</span>
              <span className="about-skill">PostgreSQL</span>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <strong>2+</strong>
                <span>{t("about.exp")}</span>
              </div>
              <div className="about-stat">
                <strong>10+</strong>
                <span>{t("about.projects")}</span>
              </div>
              <div className="about-stat">
                <strong>5+</strong>
                <span>{t("about.tech")}</span>
              </div>
            </div>

            <div className="about-actions">
              <a className="about-resume" href={resume} download="Umidjon_Juraqulov_Resume.pdf">
                {t("about.download")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;