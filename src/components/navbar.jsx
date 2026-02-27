import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/navbar.css";

const Navbar = ({ dark, setDark }) => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const active = (p) => (pathname === p ? "nav-active" : "");

  const [lang, setLang] = useState(i18n.language || "uz");

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <nav className="navbar-custom">
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          Umidjon
        </Link>

        <div className="nav-links">
          <Link className={`nav-item ${active("/")}`} to="/">
            {t("nav.about")}
          </Link>

          <Link className={`nav-item ${active("/education")}`} to="/education">
            {t("nav.education")}
          </Link>

          <Link className={`nav-item ${active("/certificates")}`} to="/certificates">
            {t("nav.certificates")}
          </Link>

          <Link className={`nav-item ${active("/work")}`} to="/work">
            {t("nav.work")}
          </Link>

          <select className="nav-lang" value={lang} onChange={handleLangChange}>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          <button className="nav-theme" onClick={() => setDark((p) => !p)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;