export type VariantColors = {
  color: string;
  contrast: string;
  highlight: string;
  textColor: string;
};

export type ThemeColors = {
  color: string;
  contrast: string;
  background: string;
  highlight: string;
  boxShadow: string;
};

export type ThemeTypes = Record<"light" | "dark", ThemeColors>;

export type ColorVariants = Record<
  "default" | "success" | "warning" | "danger" | "info",
  VariantColors
>;
