import React from "react";
import { useCardContext } from "./context";
import "./Card.css";
import { themes, variants } from "../../theme";

interface CardTagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export function CardTag({ children, variant, ...props }: CardTagProps) {
  const { variant: contextVariant, sizeStyle, theme } = useCardContext();
  const appliedVariant = variant ?? contextVariant ?? "default";
  const variantColors = variants[appliedVariant] || variants.default;

  return (
    <div
      {...props}
      className={`card-badge card-badge--${sizeStyle}`}
      data-testid="card-tag"
      style={
        {
          "--theme-text-color": themes[theme ?? "light"].color,
          "--theme-background": themes[theme ?? "light"].background,
          "--variant-color": variantColors.color,
          "--variant-text-color": variantColors.textColor,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
