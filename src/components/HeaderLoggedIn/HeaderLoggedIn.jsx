import "./HeaderLoggedIn.css";
import logo from "../../images/logo2.svg";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
export default function HeaderLoggedIn() {
  return (
    <header className="header_logged">
      <div className="header_logged__container">
        <Link to="/" className="header_logged__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header_logged__links">
        <Link to="/movies" className="header_logged__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header_logged__link">
          Сохраненные фильмы
        </Link>
        </div>
        <Link to="/profile" className="header_logged__profile">
          Аккаунт
        </Link>
      </div>
    </header>
  );
}
