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
    contrast: "#ffffff",
  },
  success: {
    color: "#17c964",
    contrast: "#ffffff",
  },
  warning: {
    color: "#f5a524",
    contrast: "#000000",
  },
  danger: {
    color: "#f31260",
    contrast: "#ffffff",
  },
  info: {
    color: "#0dcaf0",
    contrast: "#000000",
  },
};
