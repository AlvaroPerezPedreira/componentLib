import React, { ReactNode, InputHTMLAttributes } from "react";
import { useRadioGroupContext } from "./context";
import "./RadioGroup.css";
import { sizes, themes, variants } from "../../theme";

export interface RadioGroupItemProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  children?: ReactNode;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
}

export function RadioGroupItem({
  value: itemValue,
  children,
  variant,
  theme,
  sizeStyle,
  ...rest
}: RadioGroupItemProps) {
  const {
    value,
    setValue,
    name,
    variant: contextVariant,
    theme: contextTheme,
    sizeStyle: contextSizeStyle,
  } = useRadioGroupContext();
  const id = `radio-${name}-${itemValue}`;

  const appliedVariant = variant ?? contextVariant ?? "default";
  const appliedTheme = theme ?? contextTheme ?? "light";
  const appliedSizeStyle = sizeStyle ?? contextSizeStyle ?? "md";

  const variantColors = variants[appliedVariant] || variants.default;
  const themeColors = themes[appliedTheme] || themes.light;

  return (
    <label
      htmlFor={id}
      className={`radio-wrapper radio-wrapper--${appliedSizeStyle}`}
      style={
        {
          "--theme-text-color": themeColors.color,
          "--theme-contrast": themeColors.contrast,
          "--variant-hover": variantColors.highlight,
          "--variant-color": variantColors.color,
        } as React.CSSProperties
      }
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={itemValue}
        checked={value === itemValue}
        onChange={() => setValue(itemValue)}
        {...rest}
      />
      <span>{children}</span>
    </label>
  );
}
