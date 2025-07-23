import React from "react";
import { useDropdownContext } from "./context";
import { themes, variants } from "../../theme";

export interface DropdownMenuProps {
  children: React.ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const { open } = useDropdownContext();
  const { variant: contextVariant, sizeStyle, theme } = useDropdownContext();

  const variantColors =
    variants[contextVariant ?? "default"] || variants.default;
  const themeColors = themes[theme ?? "light"] || themes.light;

  return (
    <ul
      className={`dropdown-menu dropdown-menu--${sizeStyle} ${open ? "visible" : ""}`}
      style={
        {
          "--theme-background": themeColors.background,
          "--theme-text-color": themeColors.color,
          "--theme-boxshadow": themeColors.boxShadow,
          "--variant-highlight": variantColors.highlight,
          "--variant-color": variantColors.color,
        } as React.CSSProperties
      }
    >
      {children}
    </ul>
  );
}
