import React from "react";
import { useDropdownContext } from "./context";
import { themes, variants } from "../../theme";

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export function DropdownMenu({ children, ...props }: DropdownMenuProps) {
  const { open } = useDropdownContext();
  const { variant: contextVariant, sizeStyle, theme } = useDropdownContext();

  const variantColors =
    variants[contextVariant ?? "default"] || variants.default;
  const themeColors = themes[theme ?? "light"] || themes.light;

  return (
    <ul
      {...props}
      className={`dropdown-menu dropdown-menu--${sizeStyle} ${open ? "visible" : ""}`}
      data-testid="dropdown-menu"
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
