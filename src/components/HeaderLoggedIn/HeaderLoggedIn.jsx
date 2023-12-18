import "./HeaderLoggedIn.css";
import logo from "../../images/logo2.svg";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
export default function HeaderLoggedIn() {
  return (
    <header className="header-logged">
      <div className="header-logged__container">
        <Link to="/" className="header-logged__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header-logged__links">
        <Link to="/movies" className="header-logged__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header-logged__link">
          Сохраненные фильмы
        </Link>
        </div>
        <Link to="/profile" className="header-logged__profile">
          Аккаунт
        </Link>
      </div>
    </header>
  );
}
