import React from "react";
import { useTranslation } from "react-i18next"; // 👈 Hookni import qilish
import schoolLogo from "../assets/school_18.png";
import collegeLogo from "../assets/litsey.webp";
import uniLogo from "../assets/samDPI.png";
import "../styles/education.css";

const Education = () => {
  const { t } = useTranslation();

  // Rasmlar tartibi JSONdagi tartib bilan bir xil bo'lishi kerak
  const logos = [schoolLogo, collegeLogo, uniLogo];

  // JSON ichidagi 'items' massivini olamiz
  const educationItems = t("education.items", { returnObjects: true });

  return (
    <section className="edu-section">
      <div className="site-container edu-page">
        <div className="text-center mb-4">
          <h1 className="edu-title">{t("education.title")}</h1>
          <p className="edu-subtitle mx-auto">
            {t("education.subtitle")}
          </p>
        </div>

        <div className="edu-card">
          {Array.isArray(educationItems) && educationItems.map((x, idx) => (
            <div className="edu-row" key={idx}>
              {/* Left: logo */}
              <div className="edu-left">
                <div className="edu-logo-wrap">
                  <img src={logos[idx]} alt={x.title} className="edu-logo" />
                </div>
              </div>

              {/* Right: content */}
              <div className="edu-right">
                <div className="edu-head">
                  <h5 className="edu-item-title">{x.title}</h5>
                  <span className="edu-year">{x.year}</span>
                </div>
                <p className="edu-desc">{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;