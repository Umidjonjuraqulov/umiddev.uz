import React from "react";
import schoolLogo from "../assets/school_18.png";
import collegeLogo from "../assets/litsey.webp";
import uniLogo from "../assets/samDPI.png";
import "../styles/education.css";

const items = [
  {
    title: "Secondary School",
    year: "2019",
    desc: "Focused on Mathematics with strong performance.",
    logo: schoolLogo,
  },
  {
    title: "College in Samarkand",
    year: "2019 — 2021",
    desc: "Graduated with top marks.",
    logo: collegeLogo,
  },
  {
    title: "Samarkand Davlat Pedagogika Instituti",
    year: "2021 — 2025",
    desc: "Working on informatics and software development.",
    logo: uniLogo,
  },
];

const Education = () => {
  return (
    <section className="edu-section">
      <div className="site-container edu-page">
        <div className="text-center mb-4">
          <h1 className="edu-title">Education</h1>
          <p className="edu-subtitle mx-auto">
            Academic background and key achievements.
          </p>
        </div>

        <div className="edu-card">
          {items.map((x, idx) => (
            <div className="edu-row" key={idx}>
              {/* Left: logo */}
              <div className="edu-left">
                <div className="edu-logo-wrap">
                  <img src={x.logo} alt={x.title} className="edu-logo" />
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