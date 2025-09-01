import React, { createContext, useContext } from "react";
import { sizes, themes, variants } from "../../theme";

export interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
}

export const TabsContext = createContext<TabsContextValue | undefined>(
  undefined
);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};
