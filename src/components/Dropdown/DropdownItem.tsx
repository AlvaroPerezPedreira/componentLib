import React, { use } from "react";
import { themes, variants } from "../../theme";
import { useDropdownContext } from "./context";

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  variant?: keyof typeof variants;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export function DropdownItem({
  children,
  onClick,
  href,
  disabled,
  variant,
  target = "_blank",
  rel = "noopener noreferrer",
}: DropdownItemProps) {
  const { variant: contextVariant, sizeStyle, theme } = useDropdownContext();

  const appliedVariant = variant ?? contextVariant ?? "default";

  const variantColors = variants[appliedVariant] || variants.default;
  const themeColors = themes[theme ?? "light"] || themes.light;

  const commonProps = {
    className: `dropdown-item dropdown-item--${sizeStyle} ${disabled ? "dropdown-item--disabled" : ""}`,
    tabIndex: disabled ? -1 : 0,
    role: "menuitem",
    "aria-disabled": disabled,
    style: {
      "--theme-text-color": themeColors.color,
      "--theme-contrast": themeColors.contrast,
      "--variant-highlight": variantColors.highlight,
      "--variant-color": variantColors.color,
    } as React.CSSProperties,
    onClick: (e: React.MouseEvent) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.();
    },
  };

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        {...commonProps}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          onClick?.();
        }}
      >
        {children}
      </a>
    );
  }

  return <li {...commonProps}>{children}</li>;
}
