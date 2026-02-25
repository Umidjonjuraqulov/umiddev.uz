import React from "react";
import { useTranslation } from "react-i18next"; // 👈 Hookni import qilamiz
import profile from "../assets/myphoto.jpg";
import "../styles/about_me.css";
import resume from "../assets/resume.pdf";

const About = () => {
  const { t } = useTranslation(); // 👈 't' funksiyasini chaqiramiz

  return (
    <section className="about-section">
      <div className="site-container about-page">

        <div className="text-center mb-4">
          <h1 className="about-title">{t("about.title")}</h1>
          <p className="about-subtitle">{t("about.subtitle")}</p>
        </div>

        <div className="about-card">
          <div className="about-left">
            <div className="about-img-wrap">
              <img src={profile} alt="Umidjon" className="about-img" />
            </div>
          </div>

          <div className="about-right">
            <h3 className="about-name">{t("about.name")}</h3>

            <p className="about-desc">{t("about.desc1")}</p>
            <p className="about-desc">{t("about.desc2")}</p>

            <div className="about-skills">
              {/* Texnologiya nomlari odatda tarjima qilinmaydi */}
              <span className="about-skill">React</span>
              <span className="about-skill">FastAPI</span>
              <span className="about-skill">Python</span>
              <span className="about-skill">AI</span>
              <span className="about-skill">PostgreSQL</span>
              <span className="about-skill">Web3</span>
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
              <div className="about-socials">
                {/* Social linklar o'zgarishsiz qoladi */}
                <a className="about-social" href="https://t.me/USERNAME" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M9.04 15.47 8.9 19.7c.56 0 .8-.24 1.09-.53l2.62-2.5 5.43 3.97c.99.55 1.7.26 1.95-.91l3.53-16.58h0c.31-1.44-.52-2-1.45-1.65L1.64 9.55c-1.39.55-1.37 1.34-.24 1.69l5.6 1.75L19.98 5.4c.66-.4 1.26-.18.77.25z" />
                  </svg>
                </a>
                {/* Boshqa ijtimoiy tarmoqlar... */}
              </div>

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