export type VariantColors = {
  color: string;
  contrast: string;
};

export type ThemeColors = {
  color: string;
  contrast: string;
  background: string;
};

export type ThemeTypes = Record<"light" | "dark", ThemeColors>;

export type ColorVariants = Record<
  "default" | "success" | "warning" | "danger" | "info",
  VariantColors
>;

export type ComponentSizeStyles = {
  width: string;
  height: string;
  fontSize: string;
  labelFontSize: string;
  labelFontSizeFocused: string;
  borderRadius: string;
};

export type SizeVariants = Record<"sm" | "md" | "lg", ComponentSizeStyles>;
