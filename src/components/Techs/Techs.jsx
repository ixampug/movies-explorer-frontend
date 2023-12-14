import './Techs.css'
export default function Techs() {
  return (
    <section className="techs" id="techs">
      <h3 className="techs__title">Технологии</h3>
      <h4 className="techs__subtitle">7 технологий</h4>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__panel">
        <li className="techs__box">HTML</li>
        <li className="techs__box">CSS</li>
        <li className="techs__box">JS</li>
        <li className="techs__box">React</li>
        <li className="techs__box">Git</li>
        <li className="techs__box">Express.js</li>
        <li className="techs__box">mongoDB</li>
      </ul>
    </section>
  );
}
