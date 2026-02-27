import React from "react";
import { useTranslation } from "react-i18next"; // 👈 i18n import
import school18 from "../assets/school_18.png"
import feLogo from "../assets/raccoons_logo.png";
import beLogo from "../assets/venons.png";
import aiLogo from "../assets/meros.png";
import "../styles/work.css";

const Work = () => {
  const { t } = useTranslation();

  // Rasmlar tartibini JSON dagi items bilan moslaymiz
  const logos = [school18, feLogo, beLogo, aiLogo];

  // JSON dagi massivni olamiz
  const workItems = t("work.items", { returnObjects: true });

  return (
    <section className="work-section">
      <div className="site-container work-page">
        <div className="text-center mb-4">
          <h1 className="work-title">{t("work.title")}</h1>
          <p className="work-subtitle mx-auto">
            {t("work.subtitle")}
          </p>
        </div>

        <div className="work-card">
          {Array.isArray(workItems) && workItems.map((x, idx) => (
            <div className="work-row" key={idx}>
              {/* Left: logo */}
              <div className="work-left">
                <div className="work-logo-wrap">
                  <img src={logos[idx]} alt={x.role} className="work-logo" />
                </div>
              </div>

              {/* Right: content */}
              <div className="work-right">
                <div className="work-head">
                  <h5 className="work-role">{x.role}</h5>
                  <span className="work-period">{x.period}</span>
                </div>

                <p className="work-desc">{x.desc}</p>

                <div className="work-tags">
                  {/* Har bir elementning o'z taglari massivini map qilamiz */}
                  {Array.isArray(x.tags) && x.tags.map((tag) => (
                    <span className="work-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;