"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import type { Language } from "../i18n";

type TabValue = "home" | "information" | "dresscode";

type AppContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  activeTab: TabValue;
  setActiveTab: (tab: TabValue) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabValue>("home");

  const currentI18nLanguage = i18n.resolvedLanguage ?? i18n.language ?? "es";
  const language: Language = currentI18nLanguage.startsWith("en") ? "en" : "es";

  const setLanguage = useCallback(
    (newLanguage: Language) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("language", newLanguage);
      }

      void i18n.changeLanguage(newLanguage);
    },
    [i18n]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      activeTab,
      setActiveTab,
    }),
    [language, setLanguage, activeTab]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}