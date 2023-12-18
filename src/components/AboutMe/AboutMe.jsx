import "./AboutMe.css";
import student__photo from "../../images/student__photo.jpg";
export default function AboutMe() {
  return (
    <section className="student" id="student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
        <div className="student__content">
          <div className="student-info">
            <h3 className="student-info__name">Максим</h3>
            <p className="student-info__role">Фронтенд-разработчик, 28 лет</p>
            <div className="student-bio">
              <p className="student-bio__text">
                Я родился в Чебоксарах, живу в Санкт-Петербурге. Закончил
                факультет конфликтологии, сейчас прохожу курс по веб-разработке.
                Работал в службе поддержки медиасервисов Яндекса.
              </p>
              <a
                href="https://github.com/ixampug"
                target="_blank"
                className="student-bio__link"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <img
            src={student__photo}
            className="student-photo"
            alt="фото студента"
          />
        </div>
      </div>
    </section>
  );
}
