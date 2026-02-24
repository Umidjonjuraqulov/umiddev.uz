import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  const active = (p) => (pathname === p ? "nav-active" : "");

  // 🌙 Dark mode state
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🌍 Language state
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

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

  // Language save
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <nav className="navbar-custom">
      <div className="nav-container">

        {/* Logo */}
        <Link className="nav-logo" to="/">
          Umidjon
        </Link>

        {/* Links */}
        <div className="nav-links">

          <Link className={`nav-item ${active("/")}`} to="/">
            Education
          </Link>

          <Link className={`nav-item ${active("/certificates")}`} to="/certificates">
            Certificates
          </Link>

          <Link className={`nav-item ${active("/work")}`} to="/work">
            Work
          </Link>

          {/* 🌍 Language selector */}
          <select
            className="nav-lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
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