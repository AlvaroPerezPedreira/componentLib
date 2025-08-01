import React, { createContext, useContext } from "react";
import { sizes, themes, variants } from "../../theme";

export interface CardContextValue {
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
}

export const CardContext = createContext<CardContextValue | undefined>(
  undefined
);

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
}
