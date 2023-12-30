import "./Header.css";
import logo from "../../images/logo2.svg";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__info">
          <Link className="header__enter header__enter_theme_black" to="/sign-up">
            Регистрация
          </Link>
          <Link className="header__enter" to="/sign-in">
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}
