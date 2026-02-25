import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 👈 i18n hookini import qilamiz
import "../styles/navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation(); // 👈 t (tarjima) va i18n (funksiya) ni olamiz

  const active = (p) => (pathname === p ? "nav-active" : "");

  // 🌙 Dark mode state
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🌍 Language state - i18n dagi joriy tilni olamiz
  const [lang, setLang] = useState(i18n.language || "uz");

  // Dark mode apply
  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // 🌍 Til o'zgarganda i18next-ni ham yangilash
  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang); // 👈 Haqiqiy tilni almashtiruvchi buyruq
  };

  return (
    <nav className="navbar-custom">
      <div className="nav-container">

        {/* Logo */}
        <Link className="nav-logo" to="/">
          Umidjon
        </Link>

        {/* Links */}
        <div className="nav-links">
          {/* t("about.title") kabi kalitlar ishlatiladi */}
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

          {/* 🌍 Language selector */}
          <select
            className="nav-lang"
            value={lang}
            onChange={handleLangChange} // 👈 Yangi funksiyani ulaymiz
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          {/* 🌙 Dark mode toggle */}
          <button
            className="nav-theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;