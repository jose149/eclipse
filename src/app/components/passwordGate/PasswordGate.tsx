"use client";

import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../providers/AppContext";
import "./PasswordGate.css";

type Language = "es" | "en";

const PASSWORD = "Eclipse2026";
const STORAGE_KEY = "eow-party-access-granted";

const copy = {
  es: {
    brand: "EoW Party",
    eyebrow: "Invitación privada",
    title: "The End of the World Party",
    subtitle: "Mhares · 12 agosto 2026",
    text: "Esta web contiene información reservada para invitados. Introduce la contraseña para acceder.",
    label: "Contraseña",
    placeholder: "Introduce la contraseña",
    button: "Acceder",
    error: "La contraseña no es correcta. Inténtalo de nuevo.",
    languageLabel: "Idioma",
  },
  en: {
    brand: "EoW Party",
    eyebrow: "Private invitation",
    title: "The End of the World Party",
    subtitle: "Mhares · August 12, 2026",
    text: "This website contains information reserved for guests. Enter the password to access.",
    label: "Password",
    placeholder: "Enter password",
    button: "Enter",
    error: "The password is not correct. Please try again.",
    languageLabel: "Language",
  },
};

export default function PasswordGate({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useAppContext();
  const { i18n } = useTranslation();

  const [password, setPassword] = useState("");
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [error, setError] = useState("");

  const currentCopy = copy[language];

  useEffect(() => {
  if (typeof window === "undefined") return;

  const storedAccess = window.localStorage.getItem(STORAGE_KEY);

  setHasAccess(storedAccess === "true");
}, []);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as Language;

    setLanguage(newLanguage);
    void i18n.changeLanguage(newLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", newLanguage);
      document.documentElement.lang = newLanguage;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setHasAccess(true);
      setError("");
      return;
    }

    setError(currentCopy.error);
  };

  if (hasAccess === null) {
  return null;
}

if (hasAccess) {
  return <>{children}</>;
}

  return (
    <section className="password-gate" aria-label={currentCopy.eyebrow}>
      <div className="password-gate__ambient password-gate__ambient--one" />
      <div className="password-gate__ambient password-gate__ambient--two" />

      <div className="password-gate__shell">
        <header className="password-gate__topbar">
          <p className="password-gate__brand">{currentCopy.brand}</p>

          <label className="password-gate__language">
            <span className="password-gate__sr-only">
              {currentCopy.languageLabel}
            </span>

            <select value={language} onChange={handleLanguageChange}>
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </label>
        </header>

        <article className="password-gate__card">
          <div className="password-gate__eclipse" />

          <p className="password-gate__eyebrow">{currentCopy.eyebrow}</p>

          <h1 className="password-gate__title">{currentCopy.title}</h1>

          <p className="password-gate__subtitle">{currentCopy.subtitle}</p>

          <p className="password-gate__text">{currentCopy.text}</p>

          <form className="password-gate__form" onSubmit={handleSubmit}>
            <label className="password-gate__label" htmlFor="event-password">
              {currentCopy.label}
            </label>

            <input
              id="event-password"
              className="password-gate__input"
              type="password"
              value={password}
              placeholder={currentCopy.placeholder}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              autoComplete="current-password"
            />

            {error && <p className="password-gate__error">{error}</p>}

            <button className="password-gate__button" type="submit">
              {currentCopy.button}
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}