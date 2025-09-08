import React, { ReactNode, useEffect, useState } from "react";
import { TabsContext } from "./context";
import "./Tabs.css";
import { sizes, textAlignments, themes, variants } from "../../theme";

import { TabsTrigger } from "./TabsTrigger";
import { TabsContent } from "./TabsContent";

export interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  defaultValue?: string;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  textAlign?: keyof typeof textAlignments;
}

export function TabsRoot({
  children,
  defaultValue,
  variant = "default",
  theme = "light",
  sizeStyle = "md",
  textAlign = "justify",
  ...props
}: TabsRootProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || "");

  // Validación de duplicados
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const triggerValues: string[] = [];
      const contentValues: string[] = [];

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === TabsTrigger) {
            const value = (child.props as { value: string }).value;
            if (value) {
              if (triggerValues.includes(value)) {
                console.error(
                  `Tabs: Duplicate trigger value "${value}" found. Each trigger must have a unique value.`
                );
              }
              triggerValues.push(value);
            }
          }

          if (child.type === TabsContent) {
            const value = (child.props as { value: string }).value;
            if (value) {
              contentValues.push(value);
            }
          }
        }
      });

      triggerValues.forEach((value) => {
        if (!contentValues.includes(value)) {
          console.warn(
            `Tabs: Trigger with value "${value}" has no corresponding Content component.`
          );
        }
      });

      contentValues.forEach((value) => {
        if (!triggerValues.includes(value)) {
          console.warn(
            `Tabs: Content with value "${value}" has no corresponding Trigger component.`
          );
        }
      });
    }
  }, [children]);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        variant,
        theme,
        sizeStyle,
        textAlign,
      }}
    >
      <div
        className={`tabs-root tabs-root--${sizeStyle}`}
        role="tablist"
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}
