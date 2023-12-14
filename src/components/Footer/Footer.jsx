import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text footer__line">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copyright">© 2023</p>
        <div className="footer__links">
          <a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer" >
            Яндекс.Практикум
          </a>

          <a href="https://github.com/ixampug" className="footer__link" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
