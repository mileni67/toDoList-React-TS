import { Theme, Themes } from "../models/theme";

const light: Theme = {
    name: "light",
    colors: {
        backgroundPrimary: "linear-gradient(180deg, #f9fbff 0%, #e6eef7 100%)",
        backgroundSecondary: "rgba(255, 255, 255, 0.8)",
        header: "#3B82F6",
        textPrimary: "#1E293B",
        textSecondary: "#475569",
        accent: "#2563EB",
        accentHover: "#1D4ED8",
        border: "rgba(0,0,0,0.1)",
    },
};

const dark: Theme = {
    name: "dark",
    colors: {
        backgroundPrimary: "linear-gradient(160deg, #0F2027, #203A43, #2C5364)",
        backgroundSecondary: "rgba(255, 255, 255, 0.05)",
        header: "#1E293B",
        textPrimary: "#E2E8F0",
        textSecondary: "#94A3B8",
        accent: "#60A5FA",
        accentHover: "#93C5FD",
        border: "rgba(255,255,255,0.1)",
    },
};

export const themes: Themes = { light, dark };
