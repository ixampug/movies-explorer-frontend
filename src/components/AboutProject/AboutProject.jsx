import "./AboutProject.css";
export default function AboutProject() {
  return (
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__container">
        <div className="project__card">
          <h3 className="project__card-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__card-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__card">
          <h3 className="project__card-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__card-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__progress">
        <p className="project__meter project__meter_green">1 неделя</p>
        <p className="project__meter project__meter_grey">4 недели</p>
        <p className="project__meter project__meter_black">Back-end</p>
        <p className="project__meter project__meter_black">Front-end</p>
      </div>
    </section>
  );
}
