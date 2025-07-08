import type { SizeVariants } from "./types";

export const sizes: SizeVariants = {
  sm: {
    width: "200px",
    height: "auto",
    fontSize: "14px",
    labelFontSize: "16px",
    labelFontSizeFocused: "12px",
    borderRadius: "6px",
  },
  md: {
    width: "275px",
    height: "auto",
    fontSize: "16px",
    labelFontSize: "20.8px",
    labelFontSizeFocused: "16px",
    borderRadius: "8px",
  },
  lg: {
    width: "350px",
    height: "auto",
    fontSize: "18px",
    labelFontSize: "24px",
    labelFontSizeFocused: "18px",
    borderRadius: "10px",
  },
};

export const thicknesses: Record<"sm" | "md" | "lg", string> = {
  sm: "2px",
  md: "3px",
  lg: "4px",
};
