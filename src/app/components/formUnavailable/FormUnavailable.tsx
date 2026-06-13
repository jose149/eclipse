"use client";

import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../providers/AppContext";
import Image from "next/image";
import "./FormUnsavailable.css";

type Language = "es" | "en";

const copy = {
  es: {
    brand: "EoW Party",
    languageLabel: "Idioma",
    eyebrow: "Confirmación privada",
    title: "El formulario todavía no está disponible",
    subtitle: "Estamos preparando el acceso RSVP",
    text: "El formulario de confirmación está en proceso y estará disponible próximamente. Por ahora, puedes volver a la invitación y consultar el resto de la información del evento.",
    statusLabel: "Estado",
    statusValue: "En preparación",
    detailLabel: "Acceso",
    detailValue: "Próximamente",
    primaryAction: "Volver a la invitación",
    secondaryAction: "Ver información del eclipse",
  },
  en: {
    brand: "EoW Party",
    languageLabel: "Language",
    eyebrow: "Private confirmation",
    title: "The form is not available yet",
    subtitle: "RSVP access is being prepared",
    text: "The confirmation form is currently in progress and will be available soon. For now, you can return to the invitation and review the rest of the event information.",
    statusLabel: "Status",
    statusValue: "In preparation",
    detailLabel: "Access",
    detailValue: "Coming soon",
    primaryAction: "Return to the invitation",
    secondaryAction: "View eclipse information",
  },
};

export default function FormUnavailable() {
  const { language, setLanguage } = useAppContext();
  const { i18n } = useTranslation();

  const currentCopy = copy[language];

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as Language;

    setLanguage(newLanguage);
    void i18n.changeLanguage(newLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", newLanguage);
      document.documentElement.lang = newLanguage;
    }
  };

  return (
    <section className="form-unavailable" aria-label={currentCopy.title}>
      <div className="form-unavailable__ambient form-unavailable__ambient--one" />
      <div className="form-unavailable__ambient form-unavailable__ambient--two" />

      <div className="form-unavailable__shell">
        <header className="form-unavailable__topbar">
          <p className="form-unavailable__brand">{currentCopy.brand}</p>

          <label className="form-unavailable__language">
            <span className="form-unavailable__sr-only">
              {currentCopy.languageLabel}
            </span>

            <select value={language} onChange={handleLanguageChange}>
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </label>
        </header>


        <article className="form-unavailable__card">
            <div className="form__top-image">
                         <Image
                           src="/logo3.jpg"
                           alt="Mhares Sea Club"
                           fill
                           priority={false}
                           sizes="(max-width: 640px) 100vw, 530px"
                           className="form__top-image-img"
                         />
                       </div>

          <p className="form-unavailable__eyebrow">{currentCopy.eyebrow}</p>

          <h1 className="form-unavailable__title">{currentCopy.title}</h1>

          <p className="form-unavailable__subtitle">{currentCopy.subtitle}</p>

          <p className="form-unavailable__text">{currentCopy.text}</p>

          <div className="form-unavailable__details">
            <div className="form-unavailable__detail">
              <span>{currentCopy.statusLabel}</span>
              <strong>{currentCopy.statusValue}</strong>
            </div>

            <div className="form-unavailable__detail">
              <span>{currentCopy.detailLabel}</span>
              <strong>{currentCopy.detailValue}</strong>
            </div>
          </div>

          <div className="form-unavailable__actions">
            <a href="/#home" className="form-unavailable__button">
              {currentCopy.primaryAction}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}