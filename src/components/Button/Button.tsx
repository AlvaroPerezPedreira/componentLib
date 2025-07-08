import React, { forwardRef, useId } from "react";
import type { ButtonHTMLAttributes } from "react";
import { sizes, themes, thicknesses, variants } from "../../theme";
import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  thickness?: keyof typeof thicknesses;
  icon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      label,
      variant = "default",
      theme = "light",
      sizeStyle = "md",
      thickness = "md",
      disabled = false,
      id,
      type = "button",
      ...restProps
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const sizeStyles = sizes[sizeStyle] || sizes.md;
    const thicknessStyles = thicknesses[thickness] || thicknesses.md;

    const generatedId = useId();
    const buttonId = id || generatedId;

    return (
      <div
        className={`button-container${disabled ? " button-disabled" : ""}`}
        style={
          {
            "--button-color": variantColors.color,
            "--button-font-size": sizeStyles.fontSize,
            "--button-thickness": thicknessStyles,
            "--button-text-color": themeColors.color,
          } as React.CSSProperties
        }
      >
        <button
          {...restProps}
          className="button"
          id={buttonId}
          type={type || "button"}
          disabled={disabled}
          ref={ref}
          aria-label={label}
        >
          {restProps.icon && (
            <span className="button-icon">{restProps.icon}</span>
          )}
          {label}
        </button>
      </div>
    );
  }
);
