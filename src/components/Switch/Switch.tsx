import React, { forwardRef } from "react";
import "./Switch.css";
import { sizes, themes, variants } from "../../theme";

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      variant = "default",
      theme = "light",
      sizeStyle = "md",
      disabled = false,
      startIcon,
      endIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;

    return (
      <label
        className={`switch-label switch-label--${sizeStyle} ${disabled ? "switch-disabled" : ""} ${className}`}
        data-testid="switch-container"
        style={
          {
            "--variant-color": variantColors.color,
            "--variant-text-color": variantColors.textColor,
            "--background-color": themeColors.background,
            "--text-color": themeColors.color,
            "--box-shadow": themeColors.boxShadow,
          } as React.CSSProperties
        }
      >
        <input
          type="checkbox"
          className="sr-only peer"
          role="switch"
          aria-checked={props.checked}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <div
          className={`switch-track switch-track--${sizeStyle}`}
          aria-hidden="true"
        >
          {endIcon && (
            <span
              className={`switch-icon switch-icon--${sizeStyle} switch-end switch-end--${sizeStyle}`}
            >
              {endIcon}
            </span>
          )}
          {startIcon && (
            <span
              className={`switch-icon switch-icon--${sizeStyle} switch-start switch-start--${sizeStyle}`}
            >
              {startIcon}
            </span>
          )}
        </div>
      </label>
    );
  }
);
