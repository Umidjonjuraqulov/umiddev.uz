import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // 👈 Hookni import qilish
import cert1 from "../assets/hackerrank.PNG";
import cert2 from "../assets/kopirayting.png";
import cert3 from "../assets/umid42.png";
import "../styles/cert.css";

const Certificates = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  // Rasmlarni massivga tartib bilan joylashtiramiz
  const certImages = [cert1, cert2, cert3];

  // JSON dan obyektlar massivini olamiz
  const certItems = t("certificates.items", { returnObjects: true });

  const openModal = (img) => setSelected(img);
  const closeModal = () => setSelected(null);

  return (
    <section className="cert-section py-5">
      <div className="site-container cert-page">
        <div className="text-center mb-5">
          <h1 className="fw-bold cert-title">{t("certificates.title")}</h1>
          <p className="text-muted cert-subtitle">
            {t("certificates.subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="cert-grid">
          {Array.isArray(certItems) && certItems.map((cert, index) => (
            <div key={index}>
              <div
                className="cert-card"
                role="button"
                tabIndex={0}
                onClick={() => openModal(certImages[index])}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(certImages[index]);
                }}
              >
                <div className="cert-img-wrap">
                  <img 
                    src={certImages[index]} 
                    className="cert-img" 
                    alt={cert.title} 
                  />
                </div>

                <div className="cert-body">
                  <h5 className="cert-card-title">{cert.title}</h5>
                  <div className="cert-meta">
                    {cert.platform} • {cert.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="cert-modal" onClick={closeModal}>
            <div className="cert-modal-inner" onClick={(e) => e.stopPropagation()}>
              <button className="cert-close" onClick={closeModal} aria-label="Close">
                ✕
              </button>
              <img src={selected} className="cert-modal-img" alt="preview" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;