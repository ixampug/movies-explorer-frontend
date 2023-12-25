import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.svg";
import "./Register.css";
export default function Register() {
  return (
    <form className="auth" name="register" noValidate>
      <div className="auth__login">
        <Link to="/" className="auth__logo-link">
          <img src={logo} alt="logo" className="auth__logo" />
        </Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <p className="auth__input-name">Имя</p>
        <input
          className="auth__input"
          placeholder="Введите bvz"
        />
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
        <Link to="/movies" className="auth__register-button">
          <button type="submit" className="auth__submit">
            Зарегистрироваться
          </button>
        </Link>
        <p className="auth__text">
        Уже зарегистрированы??
          <Link to="/sign-in" className="auth__link">
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
}
