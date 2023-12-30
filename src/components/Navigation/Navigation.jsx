import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  //   const navigationItems = document.querySelectorAll('.navigation__item');

  //   navigationItems.forEach(item => {
  //     item.addEventListener('mouseover', () => {
  //       item.classList.add('navigation__item_active');
  //     });

  //     item.addEventListener('mouseout', () => {
  //       item.classList.remove('navigation__item_active');
  //     });
  //   });

  const handleToggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="navigation__button"
        type="button"
        onClick={handleToggleNavigation}
      ></button>
      {isOpen && (
        <>
          <div className="navigation__popup">
            <button
              className="navigation__popup-close-button"
              type="button"
              onClick={handleToggleNavigation}
            ></button>
            <ul className="navigation__list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `navigation__item ${
                      isActive ? "navigation__item_active" : ""
                    }`
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `navigation__item ${
                      isActive ? "navigation__item_active" : ""
                    }`
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `navigation__item ${
                      isActive ? "navigation__item_active" : ""
                    }`
                  }
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="navigation__profile-link">
                  Аккаунт
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="navigation__overlay"
            onClick={handleToggleNavigation}
          />
        </>
      )}
    </>
  );
}
