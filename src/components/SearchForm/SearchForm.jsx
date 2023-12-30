import React from "react";
import "./SearchForm.css";
export default function SearchForm() {
  return (
    <form className="search">
      <div className="search__section">
        <input
          type="search"
          placeholder="Фильм"
          required
          className="search__input"
        />
        <button type="submit" className="search__button"></button>
      </div>
      <div className="search__checkbox">
        <label className="search__switch">
          <input type="checkbox" className="search__switch-input" />
          <span className="search__slider"></span>
        </label>
        <span className="search__text">Короткометражки</span>
      </div>
    </form>
  );
}
