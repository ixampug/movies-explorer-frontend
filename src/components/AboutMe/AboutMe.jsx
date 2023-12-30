import "./AboutMe.css";
import student__photo from "../../images/student__photo.jpg";
export default function AboutMe() {
  return (
    <section className="student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
        <div className="student__content">
          <div className="student__info">
            <h3 className="student__info-name">Максим</h3>
            <p className="student__info-role">Фронтенд-разработчик, 28 лет</p>
            <p className="student__bio-text">
              Я родился в Чебоксарах, живу в Санкт-Петербурге. Закончил
              факультет конфликтологии, сейчас прохожу курс по веб-разработке.
              Работал в службе поддержки медиасервисов Яндекса.
            </p>
            <a
              href="https://github.com/ixampug"
              target="_blank"
              className="student__bio-link"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img
            src={student__photo}
            className="student__photo"
            alt="фото студента"
          />
        </div>
      </div>
    </section>
  );
}
