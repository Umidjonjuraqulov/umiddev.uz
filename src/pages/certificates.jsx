import React, { useState } from "react";
import cert1 from "../assets/hackerrank.PNG";
import cert2 from "../assets/kopirayting.png";
import cert3 from "../assets/umid42.png";
import "../styles/cert.css";

const certificates = [
  {
    title: "Python Specialization",
    platform: "Coursera",
    year: "2022",
    image: cert1,
  },
  {
    title: "Django Framework",
    platform: "Udemy",
    year: "2023",
    image: cert2,
  },
  {
    title: "AI Foundations",
    platform: "Google",
    year: "2024",
    image: cert3,
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (img) => setSelected(img);
  const closeModal = () => setSelected(null);

  return (
    <section className="cert-section py-5">
      <div className="site-container cert-page">
        <div className="text-center mb-5">
          <h1 className="fw-bold cert-title">My Certifications</h1>
          <p className="text-muted cert-subtitle">
            Verified achievements in development and AI
          </p>
        </div>

        {/* GRID (3 columns on desktop) */}
        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div key={index}>
              <div
                className="cert-card"
                role="button"
                tabIndex={0}
                onClick={() => openModal(cert.image)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(cert.image);
                }}
              >
                <div className="cert-img-wrap">
                  <img src={cert.image} className="cert-img" alt={cert.title} />
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