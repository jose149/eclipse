"use client";

import { Tabs, Tab, Select, MenuItem } from "@mui/material";
import { useAppContext } from "../../providers/AppContext";

const tabValues = ["home", "informacion", "dresscode"] as const;

export default function Header() {
  const { language, setLanguage, activeTab, setActiveTab } = useAppContext();

  return (
    <header>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
      >
        <Tab label="Inicio" value="home" />
        <Tab label="información" value="information" />
        <Tab label="Dress Code" value="dresscode" />
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