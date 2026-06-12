"use client";

import { useTranslation } from "react-i18next";
import "./DressCode.css";

export default function DressCode() {
  const { t } = useTranslation();

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

        <section className="dress-code__concept-card">
          <p>{t("dressCode.concept")}</p>
        </section>

        <section className="dress-code__guides">
          <article className="dress-code__guide-card">
            <p className="dress-code__section-label">
              {t("dressCode.inspirationLabel")}
            </p>

            <div className="dress-code__chips">
              {inspiration.map((item) => (
                <span className="dress-code__chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="dress-code__guide-card dress-code__guide-card--palette">
            <p className="dress-code__section-label">
              {t("dressCode.colorsLabel")}
            </p>

            <div className="dress-code__color-list">
              {colors.map((color) => (
                <span className="dress-code__color-pill" key={color}>
                  {color}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="dress-code__rules">
          <article className="dress-code__rule-card dress-code__rule-card--yes">
            <p className="dress-code__rule-kicker">
              {t("dressCode.yes.kicker")}
            </p>

            <h3>
              {t("dressCode.yes.title")}{" "}
              <span>{t("dressCode.yes.subtitle")}</span>
            </h3>

            <ul>
              {yesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="dress-code__rule-card dress-code__rule-card--no">
            <p className="dress-code__rule-kicker">
              {t("dressCode.no.kicker")}
            </p>

            <h3>
              {t("dressCode.no.title")}{" "}
              <span>{t("dressCode.no.subtitle")}</span>
            </h3>

            <ul>
              {noList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <footer className="dress-code__closing">
          <p>{t("dressCode.closing")}</p>
        </footer>
      </div>
    </section>
  );
}