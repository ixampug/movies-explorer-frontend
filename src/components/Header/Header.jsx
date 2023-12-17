import "./Header.css";
import logo from "../../images/logo2.svg";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__info">
        <Link className="header__enter header__enter_black" to="/sign-up">
          Регистрация
        </Link>
        <Link className="header__enter" to="/sign-in">
          Войти
        </Link>
      </div>
    </header>
  );
}
