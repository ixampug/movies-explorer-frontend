import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__info">
          <p className="footer__copyright">© 2023</p>
          <div className="footer__links">
            <a
              href="https://praktikum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>

            <a
              href="https://github.com/ixampug"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
