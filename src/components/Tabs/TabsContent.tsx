import React, { ReactNode } from "react";
import { useTabsContext } from "./context";
import "./Tabs.css";
import { themes, variants } from "../../theme";

export interface TabsContentProps {
  value: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}

export function TabsContent({ value, children, variant }: TabsContentProps) {
  const {
    activeTab,
    sizeStyle,
    variant: contextVariant,
    theme,
  } = useTabsContext();
  const isActive = activeTab === value;

  const appliedVariant = variant ?? contextVariant ?? "default";

  const variantColors = variants[appliedVariant] || variants.default;
  const themeColors = themes[theme ?? "light"] || themes.light;

  return (
    <div
      role="tabpanel"
      className={`tabs-content tabs-content--${sizeStyle} ${isActive ? "tabs-content--active" : ""}`}
      style={
        {
          "--theme-text-color": themeColors.color,
          "--theme-contrast": themeColors.contrast,
          "--theme-background": themeColors.background,
          "--variant-highlight": variantColors.highlight,
          "--variant-border": variantColors.contrast,
          "--variant-color": variantColors.color,
          "--variant-textColor": variantColors.textColor,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

TabsContent.displayName = "TabsContent";
