import type { ColorVariants, ThemeTypes } from "./types";

export const themes: ThemeTypes = {
  light: {
    color: "#000000",
    contrast: "#a0a0a0",
    background: "#ffffff",
    highlight: "#71717a",
    boxShadow: `
      0 2px 5px 0 rgba(0, 0, 0, 0.2),       
      0 2px 2px 0 rgba(160, 160, 160, 0.19) 
    `,
  },
  dark: {
    color: "#ffffff",
    contrast: "#7b7d6cff",
    background: "#000000",
    highlight: "#a1a1aa",
    boxShadow: `
      0 2px 5px 0 rgba(255, 255, 255, 0.2), 
      0 2px 2px 0 rgba(108, 117, 125, 0.19)
    `,
  },
};

export const variants: ColorVariants = {
  default: {
    color: "#006FEE",
    contrast: "#004BB5",
    highlight: "#bfdbfe",
    textColor: "#000000",
  },
  success: {
    color: "#17c964",
    contrast: "#129c4b",
    highlight: "#bbf7d0",
    textColor: "#000000",
  },
  warning: {
    color: "#f5a524",
    contrast: "#d18f00",
    highlight: "#fde68a",
    textColor: "#000000",
  },
  danger: {
    color: "#f31260",
    contrast: "#b20a4a",
    highlight: "#fbcfe8",
    textColor: "#000000",
  },
  info: {
    color: "#0dcaf0",
    contrast: "#0a8db8",
    highlight: "#bae6fd",
    textColor: "#ffffff",
  },
};
