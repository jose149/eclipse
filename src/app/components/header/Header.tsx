"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../providers/AppContext";
import "./Header.css";

type TabValue = "home" | "information" | "dresscode";
type Language = "es" | "en";

const FORM_URL = "/form"; // Update this URL to the actual form location when available

const tabs: {
  value: TabValue;
  translationKey: string;
  targetId: string;
}[] = [
  {
    value: "home",
    translationKey: "nav.home",
    targetId: "home",
  },
  {
    value: "information",
    translationKey: "nav.information",
    targetId: "eclipse-info",
  },
  {
    value: "dresscode",
    translationKey: "nav.dressCode",
    targetId: "dress-code",
  },
];

export default function Header() {
  const { language, setLanguage, activeTab, setActiveTab } = useAppContext();
  const { t, i18n } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (tabValue: TabValue) => {
    setActiveTab(tabValue);

    const targetId = tabs.find((tab) => tab.value === tabValue)?.targetId;
    const targetElement = targetId ? document.getElementById(targetId) : null;

    targetElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavigation = (tabValue: TabValue) => {
    scrollToSection(tabValue);
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as Language;

    setLanguage(newLanguage);
    void i18n.changeLanguage(newLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", newLanguage);
      document.documentElement.lang = newLanguage;
    }
  };

  const handleFormClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHeaderClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleDocumentClick = (event: globalThis.MouseEvent) => {
      if (!headerRef.current) return;

      if (!headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="site-header"
      onClick={handleHeaderClick}
    >
      <div className="site-header__bar">
        <button
          type="button"
          className="site-header__brand"
          onClick={() => handleNavigation("home")}
          aria-label="Go to home"
        >
          {t("nav.brand")}
        </button>

        <nav className="site-header__desktop-nav" aria-label="Main navigation">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                className={
                  isActive
                    ? "site-header__nav-button site-header__nav-button--active"
                    : "site-header__nav-button"
                }
                onClick={() => handleNavigation(tab.value)}
              >
                {t(tab.translationKey)}
              </button>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className={
              isMobileMenuOpen
                ? "site-header__menu-button site-header__menu-button--open"
                : "site-header__menu-button"
            }
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="site-header__menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>

            <span className="site-header__menu-label">
              {language === "es" ? "Menú" : "Menu"}
            </span>
          </button>

          <label className="site-header__language">
            <span className="site-header__sr-only">
              {language === "es" ? "Idioma" : "Language"}
            </span>

            <select value={language} onChange={handleLanguageChange}>
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </label>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__form-button"
          >
            {t("nav.form")}
          </a>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={
          isMobileMenuOpen
            ? "site-header__mobile-panel site-header__mobile-panel--open"
            : "site-header__mobile-panel"
        }
      >
        <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                className={
                  isActive
                    ? "site-header__mobile-link site-header__mobile-link--active"
                    : "site-header__mobile-link"
                }
                onClick={() => handleNavigation(tab.value)}
              >
                {t(tab.translationKey)}
              </button>
            );
          })}

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__mobile-form"
            onClick={handleFormClick}
          >
            {t("nav.form")}
          </a>
        </nav>
      </div>
    </header>
  );
}