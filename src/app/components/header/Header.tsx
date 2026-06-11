"use client";

import {
  Box,
  Button,
  Tab,
  Tabs,
  type SelectChangeEvent,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useAppContext } from "../../providers/AppContext";

type TabValue = "home" | "information" | "dresscode";
type Language = "es" | "en";

const FORM_URL = "https://URL_DEL_FORMULARIO.com";

const tabs: {
  value: TabValue;
  label: {
    es: string;
    en: string;
  };
  targetId: string;
}[] = [
  {
    value: "home",
    label: {
      es: "Inicio",
      en: "Home",
    },
    targetId: "home",
  },
  {
    value: "information",
    label: {
      es: "Información",
      en: "Information",
    },
    targetId: "eclipse-info",
  },
  {
    value: "dresscode",
    label: {
      es: "Dress Code",
      en: "Dress Code",
    },
    targetId: "dress-code",
  },
];

export default function Header() {
  const { language, setLanguage, activeTab, setActiveTab } = useAppContext();

  const handleTabChange = (_: React.SyntheticEvent, newValue: TabValue) => {
    setActiveTab(newValue);

    const targetId = tabs.find((tab) => tab.value === newValue)?.targetId;
    const targetElement = targetId ? document.getElementById(targetId) : null;

    targetElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 24,
        zIndex: 1000,
        width: "100%",
        px: { xs: 2, md: 4 },
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: 1180,
          mx: "auto",
          px: { xs: 1.5, md: 2 },
          py: 1.25,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          borderRadius: 999,
          border: "1px solid rgba(185, 150, 91, 0.22)",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(251,247,239,0.68))",
          boxShadow: "0 18px 50px rgba(16, 34, 53, 0.10)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "auto", md: 180 },
            pl: { xs: 1, md: 2 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "0.72rem", md: "0.78rem" },
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B9965B",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            EoW Party
          </Box>
        </Box>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{
            minHeight: 40,
            display: { xs: "none", md: "flex" },

            "& .MuiTabs-indicator": {
              height: 1,
              backgroundColor: "#B9965B",
            },

            "& .MuiTab-root": {
              minHeight: 40,
              px: 2.25,
              color: "#6F756F",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            },

            "& .Mui-selected": {
              color: "#102235",
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label[language]}
              value={tab.value}
              disableRipple
            />
          ))}
        </Tabs>

        <Box
          sx={{
            minWidth: { xs: "auto", md: 260 },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: { xs: 1, md: 1.5 },
          }}
        >
          <Select
            value={language}
            onChange={handleLanguageChange}
            size="small"
            variant="outlined"
            renderValue={(value) => {
              const selectedLanguage = value as Language;

              return selectedLanguage === "es" ? "🇪🇸 ES" : "🇬🇧 EN";
            }}
            sx={{
              height: 40,
              minWidth: 88,
              borderRadius: 999,
              color: "#102235",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              backgroundColor: "rgba(255,255,255,0.42)",

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(23, 32, 42, 0.1)",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(185, 150, 91, 0.42)",
              },

              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#B9965B",
              },

              "& .MuiSelect-select": {
                py: 0.9,
                pl: 1.5,
                pr: 3.5,
              },

              "& .MuiSvgIcon-root": {
                color: "#B9965B",
              },
            }}
            MenuProps={{
              slotProps: {
                paper: {
                  sx: {
                    mt: 1,
                    borderRadius: 3,
                    border: "1px solid rgba(185, 150, 91, 0.18)",
                    boxShadow: "0 18px 50px rgba(16, 34, 53, 0.12)",
                    backgroundColor: "#FFFFFF",
                    color: "#102235",
                  },
                },
              },
            }}
          >
            <MenuItem value="es">🇪🇸 Español</MenuItem>
            <MenuItem value="en">🇬🇧 English</MenuItem>
          </Select>

          <Button
            component="a"
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            disableElevation
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              height: 40,
              px: 2.5,
              borderRadius: 999,
              background:
                "linear-gradient(135deg, #D9C08A 0%, #B9965B 48%, #8C6A3D 100%)",
              color: "#FFFFFF",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #E7D4A2 0%, #B9965B 48%, #8C6A3D 100%)",
                boxShadow: "0 12px 28px rgba(185, 150, 91, 0.28)",
              },
            }}
          >
            {language === "es" ? "Formulario" : "Form"}
          </Button>
        </Box>
      </Box>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          pointerEvents: "auto",
          display: { xs: "flex", md: "none" },
          width: "calc(100% - 32px)",
          mx: "auto",
          mt: 1.25,
          px: 1,
          minHeight: 42,
          borderRadius: 999,
          border: "1px solid rgba(185, 150, 91, 0.18)",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(251,247,239,0.68))",
          boxShadow: "0 14px 36px rgba(16, 34, 53, 0.08)",
          backdropFilter: "blur(18px)",

          "& .MuiTabs-indicator": {
            height: 1,
            backgroundColor: "#B9965B",
          },

          "& .MuiTab-root": {
            minHeight: 42,
            px: 1.75,
            color: "#6F756F",
            fontSize: "0.74rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          },

          "& .Mui-selected": {
            color: "#102235",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label[language]}
            value={tab.value}
            disableRipple
          />
        ))}
      </Tabs>
    </Box>
  );
}