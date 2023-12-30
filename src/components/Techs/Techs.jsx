import "./Techs.css";
export default function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h3 className="techs__title">Технологии</h3>
        <h4 className="techs__subtitle">7 технологий</h4>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
