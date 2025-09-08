import React, { ReactNode } from "react";
import { useTabsContext } from "./context";
import { themes, variants } from "../../theme";
import "./Tabs.css";

export interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  disabled?: boolean;
  icon?: ReactNode;
}

export function TabsTrigger({
  value,
  children,
  variant,
  disabled,
  icon,
}: TabsTriggerProps) {
  const {
    activeTab,
    setActiveTab,
    sizeStyle,
    variant: contextVariant,
    theme,
  } = useTabsContext();

  const isActive = activeTab === value;

  const appliedVariant = variant ?? contextVariant ?? "default";

  const variantColors = variants[appliedVariant] || variants.default;
  const themeColors = themes[theme ?? "light"] || themes.light;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={`tabs-trigger tabs-trigger--${sizeStyle} ${isActive ? "tabs-trigger--active" : ""} ${disabled ? "tabs-trigger--disabled" : ""}`}
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
      {icon && (
        <span className={`tabs-trigger-icon tabs-trigger-icon--${sizeStyle}`}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

TabsTrigger.displayName = "TabsTrigger";
