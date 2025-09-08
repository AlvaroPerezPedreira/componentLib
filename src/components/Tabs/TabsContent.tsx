import React, { ReactNode } from "react";
import { useTabsContext } from "./context";
import "./Tabs.css";
import { sizes, textAlignments, themes, variants } from "../../theme";

export interface TabsContentProps {
  value: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  sizeStyle?: keyof typeof sizes;
  textAlign?: keyof typeof textAlignments;
}

export function TabsContent({
  value,
  children,
  variant,
  sizeStyle,
  textAlign,
}: TabsContentProps) {
  const {
    activeTab,
    sizeStyle: contextSizeStyle,
    variant: contextVariant,
    theme,
    textAlign: contextTextAlign,
  } = useTabsContext();
  const isActive = activeTab === value;

  const appliedVariant = variant ?? contextVariant ?? "default";
  const appliedSizeStyle = sizeStyle ?? contextSizeStyle ?? "md";
  const appliedTextAlign = textAlign ?? contextTextAlign ?? "justify";

  const variantColors = variants[appliedVariant] || variants.default;
  const themeColors = themes[theme ?? "light"] || themes.light;

  console.log("appliedTextAlign:", appliedTextAlign);

  return (
    <div
      role="tabpanel"
      className={`tabs-content tabs-content--${appliedSizeStyle} ${isActive ? "tabs-content--active" : ""}`}
      style={
        {
          "--theme-text-color": themeColors.color,
          "--theme-contrast": themeColors.contrast,
          "--theme-background": themeColors.background,
          "--variant-highlight": variantColors.highlight,
          "--variant-border": variantColors.contrast,
          "--variant-color": variantColors.color,
          "--variant-textColor": variantColors.textColor,
          "--text-align": appliedTextAlign,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

TabsContent.displayName = "TabsContent";
