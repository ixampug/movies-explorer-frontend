import { Link } from "react-router-dom";
import "./NotFound.css";
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found__button">
        Назад
      </Link>
    </div>
  );
}
