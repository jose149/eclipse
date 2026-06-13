"use client";

import { useTranslation } from "react-i18next";
import { useAppContext } from "../../providers/AppContext";
import "./DressCode.css";

const DRESS_CODE_URL_ES = "/moodboard-eow-party-ES.html";
const DRESS_CODE_URL_EN = "/moodboard-eow-party-EN.html";

export default function DressCode() {
  const { t } = useTranslation();
  const { language } = useAppContext();

  const intro = t("dressCode.intro", {
    returnObjects: true,
  }) as string[];

  const characters = t("dressCode.characters", {
    returnObjects: true,
  }) as string[];

  const inspiration = t("dressCode.inspiration", {
    returnObjects: true,
  }) as string[];

  const colors = t("dressCode.colors", {
    returnObjects: true,
  }) as string[];

  const yesList = t("dressCode.yes.items", {
    returnObjects: true,
  }) as string[];

  const noList = t("dressCode.no.items", {
    returnObjects: true,
  }) as string[];



  return (
    <section id="dress-code" className="dress-code">
      <a
        href={language === "es" ? DRESS_CODE_URL_ES : DRESS_CODE_URL_EN}
        target="_blank"
        rel="noopener noreferrer"
        className="home__button home__button--primary dress-code__button"
      >
        {t("dressCode.button")}
      </a>
      <div className="dress-code__inner">
        <header className="dress-code__header">

          <h2 className="dress-code__title">{t("dressCode.title")}</h2>

          <p className="dress-code__subtitle">{t("dressCode.subtitle")}</p>

          <div className="dress-code__intro">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <section
          className="dress-code__characters"
          aria-label={t("dressCode.charactersTitle")}
        >
          <div className="dress-code__section-heading">
            <p className="dress-code__section-label">
              {t("dressCode.charactersLabel")}
            </p>

            <h3>{t("dressCode.charactersTitle")}</h3>
          </div>

          <div className="dress-code__character-grid">
            {characters.map((character) => (
              <article className="dress-code__character-card" key={character}>
                <span className="dress-code__character-dot" />
                <p>{character}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}