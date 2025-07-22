import React, { useState, ReactNode } from "react";
import { RadioGroupContext } from "./context";
import "./RadioGroup.css";
import { sizes, themes, variants } from "../../theme";

export interface RadioGroupRootProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
}

export function RadioGroupRoot({
  value: controlledValue,
  defaultValue,
  onValueChange,
  name = "radio-group",
  children,
  variant = "default",
  theme = "light",
  sizeStyle = "md",
  disabled = false,
  orientation = "horizontal",
}: RadioGroupRootProps) {
  const isControlled = controlledValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? ""
  );

  const value = isControlled ? controlledValue : uncontrolledValue;
  const setValue = (newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        value,
        setValue,
        name,
        variant,
        theme,
        sizeStyle,
        disabled,
        orientation,
      }}
    >
      <div
        role="radiogroup"
        aria-label={name}
        className={`radio-group radio-group--${orientation} radio-group--${sizeStyle}`}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}
