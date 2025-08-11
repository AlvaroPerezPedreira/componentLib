import React from "react";
import { useDropdownContext } from "./context";
import { themes, variants } from "../../theme";

export interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export function DropdownTrigger({
  children,
  variant,
  ...props
}: DropdownTriggerProps) {
  const { open, setOpen } = useDropdownContext();
  const { variant: contextVariant, sizeStyle, theme } = useDropdownContext();

  const appliedVariant = variant ?? contextVariant ?? "default";

  const variantColors = variants[appliedVariant] || variants.default;
  const themeColors = themes[theme ?? "light"] || themes.light;

  return (
    <button
      {...props}
      className={`dropdown-trigger dropdown-trigger--${sizeStyle} ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-haspopup="true"
      aria-expanded={open}
      type="button"
      style={
        {
          "--theme-text-color": themeColors.color,
          "--theme-contrast": themeColors.contrast,
          "--theme-background": themeColors.background,
          "--variant-border": variantColors.contrast,
          "--variant-color": variantColors.color,
        } as React.CSSProperties
      }
    >
      {children}
    </button>
  );
}
