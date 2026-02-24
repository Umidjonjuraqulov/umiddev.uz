import React from "react";
import feLogo from "../assets/raccoons_logo.png";
import beLogo from "../assets/raccoons_logo.png";
import aiLogo from "../assets/raccoons_logo.png";
import "../styles/work.css";

const items = [
  {
    role: "Frontend Developer",
    period: "2023 — Present",
    desc: "Building responsive web applications using React and modern UI frameworks.",
    logo: feLogo,
    tags: ["React", "UI", "Responsive", "SPA"],
  },
  {
    role: "Backend Developer",
    period: "2022 — 2023",
    desc: "Developed REST APIs and integrated databases for production systems.",
    logo: beLogo,
    tags: ["REST API", "DB", "Auth", "Performance"],
  },
  {
    role: "AI & Blockchain Enthusiast",
    period: "2024 — Present",
    desc: "Exploring smart contracts, Web3 technologies and AI integration.",
    logo: aiLogo,
    tags: ["Web3", "Smart Contracts", "AI", "Research"],
  },
];

const Work = () => {
  return (
    <section className="work-section">
      <div className="site-container work-page">
        <div className="text-center mb-4">
          <h1 className="work-title">Work Experience</h1>
          <p className="work-subtitle mx-auto">
            Professional experience and projects.
          </p>
        </div>

        <div className="work-card">
          {items.map((x, idx) => (
            <div className="work-row" key={idx}>
              {/* Left: logo */}
              <div className="work-left">
                <div className="work-logo-wrap">
                  <img src={x.logo} alt={x.role} className="work-logo" />
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
                  {x.tags.map((t) => (
                    <span className="work-tag" key={t}>{t}</span>
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