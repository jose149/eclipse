"use client";

import { useTranslation } from "react-i18next";
import "./Home.css";

const FORM_URL = "https://URL_DEL_FORMULARIO.com";

type ScheduleItem = {
  time: string;
  text: string;
};

export default function Home() {
  const { t } = useTranslation();

  const day12Items = t("home.schedule.day12.items", {
    returnObjects: true,
  }) as ScheduleItem[];

  return (
    <section id="home" className="home">
      <div className="home__inner">
        <div className="home__hero">
          <div className="home__copy">
            <p className="home__eyebrow">{t("home.eyebrow")}</p>

            <h1 className="home__title">{t("home.title")}</h1>

            <p className="home__lead">{t("home.lead")}</p>

            <p className="home__intro">{t("home.intro")}</p>

            <div className="home__actions">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="home__button home__button--primary"
              >
                {t("home.formButton")}
              </a>

              <a
                href="#eclipse-info"
                className="home__button home__button--secondary"
              >
                {t("home.eclipseInfo")}
              </a>
            </div>
          </div>

          <aside className="home__event-card" aria-label={t("home.eventCard.label")}>
            <div className="home__eclipse" />

            <p className="home__card-label">{t("home.eventCard.label")}</p>

            <div className="home__card-main">
              <span>{t("home.eventCard.day")}</span>

              <div>
                <p>{t("home.eventCard.month")}</p>
                <p>{t("home.eventCard.year")}</p>
              </div>
            </div>

            <div className="home__card-divider" />

            <p className="home__card-place">{t("home.eventCard.place")}</p>

            <p className="home__card-text">
              {t("home.eventCard.description")}
            </p>
          </aside>
        </div>

        <div className="home__message">
          <p>{t("home.message")}</p>
        </div>

        <div className="home__schedule">
          <article className="home__schedule-card">
            <p className="home__schedule-date">
              {t("home.schedule.day11.date")}
            </p>

            <h2>{t("home.schedule.day11.title")}</h2>

            <p>
              <strong>{t("home.schedule.day11.time")}</strong> ·{" "}
              {t("home.schedule.day11.location")}
            </p>

            <p>{t("home.schedule.day11.description")}</p>
          </article>

          <article className="home__schedule-card home__schedule-card--featured">
            <p className="home__schedule-date">
              {t("home.schedule.day12.date")}
            </p>

            <h2>{t("home.schedule.day12.title")}</h2>

            <ul>
              {day12Items.map((item) => (
                <li key={`${item.time}-${item.text}`}>
                  <strong>{item.time}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="home__notes">
          <p>{t("home.notes.cabins")}</p>

          <p>{t("home.notes.invitation")}</p>
        </div>
      </div>
    </section>
  );
}