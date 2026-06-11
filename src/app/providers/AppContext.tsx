"use client";

import { createContext, useContext, useState } from "react";

type Language = "es" | "en";
type Tab = "home" | "link1" | "link2" | "link3";

type AppContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}