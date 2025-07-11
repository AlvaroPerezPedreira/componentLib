export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export const thicknesses: Record<"sm" | "md" | "lg", string> = {
  sm: "2px",
  md: "3px",
  lg: "4px",
};
