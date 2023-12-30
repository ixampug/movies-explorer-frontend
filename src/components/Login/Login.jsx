import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.svg";
import "./Login.css";
export default function Login() {
  return (
    <form className="auth" name="login" noValidate>
      <div className="auth__login">
        <Link to="/" className="auth__logo-link">
          <img src={logo} alt="logo" className="auth__logo" />
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
        <p className="auth__input-name">Email</p>
        <input
          className="auth__input"
          placeholder="Введите email"
        />
        <p className="auth__input-name">Пароль</p>
        <input
          className="auth__input"
          placeholder="Введите пароль"
        />
        <Link to="/movies" className="auth__button">
          <button type="submit" className="auth__submit">
            Войти
          </button>
        </Link>
        <p className="auth__text">
          Ещё не зарегистрированы?
          <Link to="/sign-up" className="auth__link">
            Регистрация
          </Link>
        </p>
      </div>
    </form>
  );
}
