import React, { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { themes, variants, sizes } from "../../theme";
import "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant = "default",
      theme = "light",
      sizeStyle = "md",
      id,
      disabled = false,
      placeholder,
      ...props
    },
    ref
  ) => {
    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const sizeStyles = sizes[sizeStyle] || sizes.md;
    const generatedId = useId();
    const inputId = id || generatedId;

    const inputPlaceholder = placeholder === undefined ? " " : placeholder;
    const shouldFloat = !!inputPlaceholder;
    const preventFloat = props.readOnly && !inputPlaceholder && !props.value;

    return (
      <div
        className={`input-container${disabled ? " input-disabled" : ""}`}
        style={
          {
            "--focus-border-color": variantColors.color,
            "--border-color": themeColors.contrast,
            "--label-font-size": sizeStyles.labelFontSize,
            "--label-font-size-focused": sizeStyles.labelFontSizeFocused,
          } as React.CSSProperties
        }
        title={
          disabled
            ? "Este campo está deshabilitado"
            : props.readOnly
            ? "Este campo es de solo lectura"
            : undefined
        }
      >
        <input
          {...props}
          className={`input-field${shouldFloat ? " float-label" : ""}${
            preventFloat ? " prevent-float" : ""
          }`}
          id={inputId}
          placeholder={inputPlaceholder}
          type={props.type || "text"}
          style={{
            color: themeColors.color,
            cursor: disabled
              ? "not-allowed"
              : props.readOnly
              ? "default"
              : "text",
            width: sizeStyles.width,
            height: sizeStyles.height,
            fontSize: sizeStyles.fontSize,
          }}
          disabled={disabled}
          aria-description={props["aria-description"]}
          ref={ref}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="input-label"
            style={{
              color: variantColors.color,
            }}
            aria-label={label}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
