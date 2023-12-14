import "./AboutProject.css";
export default function AboutProject() {
  return (
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__box">

        <div className="project__card">
          <p className="project__paragraph">
            Дипломный проект включал 5 этапов
          </p>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="project__card">
          <p className="project__paragraph">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>

      </div>
      <div className="project__progress">
        <p className="project__meter project__meter_green">
          1 неделя
        </p>
        <p className="project__meter project__meter_grey">
          4 недели
        </p>
        <p className="project__meter project__meter_black">
          Back-end
        </p>
        <p className="project__meter project__meter_black">
          Front-end
        </p>
      </div>
    </section>
  );
}
