import "./Profile.css";
import React from "react";
export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__box">
        <h3 className="profile__title">Привет, Максим!</h3>
        <form className="profile__form" noValidate>
          <div className="profile__name-box">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              placeholder="Введите ваше имя"
              type="name"
              name="name"
              required
            ></input>
          </div>
          <div className="profile__email-box">
            <label className="profile__label">E-mail</label>
            <input
              className="profile__input"
              placeholder="Введите ваш email"
              type="email"
              name="email"
              required
            ></input>
          </div>
          <div className="profile__buttons">
            <button type="submit" className="profile__button">
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_red"
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
