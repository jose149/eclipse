"use client";

import { Tabs, Tab, Select, MenuItem } from "@mui/material";
import { useAppContext } from "../../providers/AppContext";

const tabValues = ["home", "link1", "link2", "link3"] as const;

export default function Header() {
  const { language, setLanguage, activeTab, setActiveTab } = useAppContext();

  return (
    <header>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
      >
        <Tab label="Inicio" value="home" />
        <Tab label="Sección 1" value="link1" />
        <Tab label="Sección 2" value="link2" />
        <Tab label="Sección 3" value="link3" />
      </Tabs>

      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "es" | "en")}
      >
        <MenuItem value="es">🇪🇸 Español</MenuItem>
        <MenuItem value="en">🇬🇧 English</MenuItem>
      </Select>
    </header>
  );
}