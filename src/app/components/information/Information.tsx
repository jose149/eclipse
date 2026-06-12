"use client";

import { useTranslation } from "react-i18next";
import "./Information.css";

type EclipseTimelineRow = {
  phase: string;
  time: string;
};

type StoryCard = {
  key: string;
  featured?: boolean;
  number: string;
  label: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  closing?: string;
};

export default function Information() {
  const { t } = useTranslation();

  const eclipseFacts = t("information.facts", {
    returnObjects: true,
  }) as string[];

  const eclipseTimeline = t("information.timeline.rows", {
    returnObjects: true,
  }) as EclipseTimelineRow[];

  const storyHeaderText = t("information.storyHeader.text");

  const stories: StoryCard[] = [
    {
      key: "anomaly",
      featured: true,
      number: t("information.stories.anomaly.number"),
      label: t("information.stories.anomaly.label"),
      title: t("information.stories.anomaly.title"),
      paragraphs: t("information.stories.anomaly.paragraphs", {
        returnObjects: true,
      }) as string[],
      quote: t("information.stories.anomaly.quote"),
      closing: t("information.stories.anomaly.closing"),
    },
    {
      key: "rumor",
      number: t("information.stories.rumor.number"),
      label: t("information.stories.rumor.label"),
      title: t("information.stories.rumor.title"),
      paragraphs: t("information.stories.rumor.paragraphs", {
        returnObjects: true,
      }) as string[],
    },
    {
      key: "confluence",
      number: t("information.stories.confluence.number"),
      label: t("information.stories.confluence.label"),
      title: t("information.stories.confluence.title"),
      paragraphs: t("information.stories.confluence.paragraphs", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <section id="eclipse-info" className="information">
      <div className="information__inner">
        <div className="information__header">
          <p className="information__eyebrow">{t("information.eyebrow")}</p>

          <h2 className="information__title">
            {t("information.title")}
            <span>{t("information.date")}</span>
          </h2>

          <p className="information__lead">{t("information.lead")}</p>
        </div>

        <div className="information__overview">
          <article className="information__facts-card">
            <p className="information__section-label">
              {t("information.factsLabel")}
            </p>

            <ul className="information__facts">
              {eclipseFacts.map((fact) => (
                <li key={fact}>
                  <span className="information__fact-marker" />
                  <p>{fact}</p>
                </li>
              ))}
            </ul>
          </article>

          <aside className="information__timeline-card">
            <div className="information__timeline-header">
              <p>{t("information.timeline.title")}</p>
              <span>{t("information.timeline.location")}</span>
            </div>

            <div className="information__timeline">
              {eclipseTimeline.map((item) => (
                <div className="information__timeline-row" key={item.phase}>
                  <span>{item.phase}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <figure className="information__eclipse-visual">
          <div className="information__eclipse-glow" />

          <img
            src="/eclipse.png"
            alt="Eclipse sobre el planeta Tierra"
            className="information__eclipse-image"
          />
        </figure>

        <div className="information__divider" />

        <div className="information__story-header">
          <p className="information__eyebrow">
            {t("information.storyHeader.eyebrow")}
          </p>

          <h3>{t("information.storyHeader.title")}</h3>

          {storyHeaderText && <p>{storyHeaderText}</p>}
        </div>

        <div className="information__story-grid">
          {stories.map((story) => (
            <article
              key={story.key}
              className={
                story.featured
                  ? "information__story-card information__story-card--featured"
                  : "information__story-card"
              }
            >
              <div className="information__card-number">{story.number}</div>

              <div className="information__card-content">
                <p className="information__section-label">{story.label}</p>

                <h4>{story.title}</h4>

                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {story.quote && (
                  <blockquote className="information__quote">
                    <p>{story.quote}</p>
                  </blockquote>
                )}

                {story.closing && <p>{story.closing}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}