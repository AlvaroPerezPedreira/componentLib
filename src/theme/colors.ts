import type { ColorVariants, ThemeTypes } from "./types";

export const themes: ThemeTypes = {
  light: {
    color: "#000000",
    contrast: "#a0a0a0",
    background: "#ffffff",
  },
  dark: {
    color: "#ffffff",
    contrast: "#6c757d",
    background: "#000000",
  },
};

export const variants: ColorVariants = {
  default: {
    color: "#006FEE",
    contrast: "#004BB5",
  },
  success: {
    color: "#17c964",
    contrast: "#129c4b",
  },
  warning: {
    color: "#f5a524",
    contrast: "#d18f00",
  },
  danger: {
    color: "#f31260",
    contrast: "#b20a4a",
  },
  info: {
    color: "#0dcaf0",
    contrast: "#0a8db8",
  },
};
