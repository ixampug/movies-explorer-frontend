import './Portfolio.css'
export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <nav className="portfolio__links">
        <a
          href="https://github.com/ixampug/how-to-learn"
          target="_blank"
          className="portfolio__link"
          rel="noreferrer"
        >
          Статичный сайт
          <p className="portfolio__link-icon">↗</p>
        </a>
        <a
          href="https://github.com/ixampug/russian-travel"
          target="_blank"
          className="portfolio__link"
          rel="noreferrer"
        >
          Адаптивный сайт
          <p className="portfolio__link-icon">↗</p>
        </a>
        <a
          href="https://github.com/ixampug/react-mesto-api-full-gha"
          target="_blank"
          className="portfolio__link portfolio__link_black"
          rel="noreferrer"
        >
          Одностраничное приложение
          <p className="portfolio__link-icon">↗</p>
        </a>
      </nav>
    </section>
  );
}
