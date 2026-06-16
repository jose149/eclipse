"use client";

import { Trans, useTranslation } from "react-i18next";
import Image from "next/image";
import "./Home.css";
import {
  useState,
} from "react";
import { useAppContext } from "../../providers/AppContext";

const FORM_URL = "https://forms.gle/bY5ayA9AjNRHbEKK9"; // Update this URL to the actual form location when available

type TabValue = "home" | "information" | "dresscode";

type ScheduleItem = {
  time: string;
  text: string;
};

export default function Home() {
   const { language, setLanguage, activeTab, setActiveTab } = useAppContext();
  const { t, i18n } = useTranslation();
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollToSection = (tabValue: TabValue) => {
    setActiveTab(tabValue);}

    const handleNavigation = (tabValue: TabValue) => {
    scrollToSection(tabValue);
    setIsMobileMenuOpen(false);
  };

  const day12Items = t("home.schedule.day12.items", {
    returnObjects: true,
  }) as ScheduleItem[];

  const amenitiesItems = t("home.notes.amenities.items", {
  returnObjects: true,
}) as string[];

  return (
    <section id="home" className="home">
      <div className="home__top-image">
  <Image
    src="/logo3.jpg"
    alt="Mhares Sea Club"
    fill
    priority
    sizes="(max-width: 640px) 100vw, 530px"
    className="home__top-image-img"
  />
</div>
      <div className="home__inner">

        <div className="home__hero">
          <div className="home__copy">
            <p className="home__eyebrow">{t("home.eyebrow")}</p>

            <h1 className="home__title">The <span className="home__highlighted">E</span>nd <span className="home__highlighted">O</span>f the <span className="home__highlighted">W</span>orld party</h1>

            <p className="home__lead">{t("home.lead")}</p>

            <p className="home__intro">{t("home.intro")}</p>

             <a
              type="button"
              className="home__button home__button--primary home__button--info"
              href="#eclipse-info"
              aria-label="Go to information"
            >
              {t("home.informationButton")}
            </a>

            <div className="home__actions" />
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

          <a
            href={FORM_URL}
            className="home__button home__button--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("home.formButton")}
          </a>
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
              {day12Items.map((item, index) => (
                <li key={`${item.time}-${item.text}`}>
                  <strong>{item.time}</strong>
                  <span>{item.text} </span>
                  
                </li>
              ))}
            </ul>
            <p className="home__music-note" style={{ marginTop: "24px" }}>
              {t("home.schedule.day12.music")}
            </p>
          </article>
        </div>

        <div className="home__notes">
  <article className="home__note-card home__note-card--amenities">
    <p className="home__note-title">
      {t("home.notes.amenities.title")}
    </p>

    <ul className="home__amenities-list">
      {amenitiesItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>

  <article className="home__note-card">
    <p>
    <Trans
      key={i18n.resolvedLanguage ?? i18n.language}
      t={t}
      i18nKey="home.notes.invitation"
      components={{
        important: <strong className="home__note-strong" />,
      }}
    />
  </p>
  </article>
</div>
      </div>
    </section>
  );
}