import "./AboutMe.css";
import student__photo from "../../images/student__photo.jpg";
export default function AboutMe() {
  return (
    <section className="student" id="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__container">
        <div className="student__information">
          <h2 className="student__name">Максим</h2>
          <p className="student__description">Фронтенд-разработчик, 28 лет</p>
          <div className="student__about">
            <p className="student__bio">
              Я родился в Чебоксарах, живу в Санкт-Петербурге. Закончил
              факультет конфликтологии, сейчас прохожу курс по веб-разработке.
              Работал в службе поддержки медиасервисов Яндекса.
            </p>
            <a
              href="https://github.com/ixampug"
              target="_blank"
              className="student__link"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img
          src={student__photo}
          className="student__photo"
          alt="фото студента"
        />
      </div>
    </section>
  );
}
