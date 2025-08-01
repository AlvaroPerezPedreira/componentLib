import React, { ReactNode, useState } from "react";
import { CardContext } from "./context";
import "./Card.css";
import { sizes, themes, variants } from "../../theme";

export interface CardRootProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
}

export function CardRoot({
  children,
  variant = "default",
  theme = "light",
  sizeStyle = "md",
}: CardRootProps) {
  return (
    <CardContext.Provider value={{ variant, theme, sizeStyle }}>
      <div
        className={`card-root card-root--${sizeStyle}`}
        style={
          {
            "--background-color": themes[theme ?? "light"].background,
            "--box-shadow": themes[theme ?? "light"].boxShadow,
          } as React.CSSProperties
        }
        data-testid="card-root"
        role="region"
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}
