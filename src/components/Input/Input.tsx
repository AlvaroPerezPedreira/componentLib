import React, { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { themes, variants, sizes } from "../../theme";
import "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  iconEnd?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    variant = "default",
    theme = "light",
    sizeStyle = "md",
    disabled = false,
    placeholder,
    id,
    type,
    readOnly,
    value,
    iconEnd,
    ...restProps
  } = props;
  const themeColors = themes[theme] || themes.light;
  const variantColors = variants[variant] || variants.default;
  const generatedId = useId();
  const inputId = id || generatedId;

  const inputPlaceholder = placeholder === undefined ? "" : placeholder;
  const shouldFloat = !!inputPlaceholder;
  const preventFloat = readOnly && !inputPlaceholder && !value;

  return (
    <div
      className={`input-container${disabled ? " input-disabled" : ""}`}
      style={
        {
          "--focus-border-color": variantColors.color,
          "--border-color": themeColors.contrast,
        } as React.CSSProperties
      }
    >
      <input
        {...restProps}
        className={`input-field input-field--${sizeStyle}${shouldFloat ? " float-label" : ""}${preventFloat ? " prevent-float" : ""}`}
        id={inputId}
        placeholder={inputPlaceholder}
        type={type || "text"}
        style={{
          color: themeColors.color,
          cursor: disabled ? "not-allowed" : readOnly ? "default" : "text",
          paddingRight: iconEnd ? "2em" : undefined,
        }}
        disabled={disabled}
        readOnly={readOnly}
        aria-description={props["aria-description"]}
        ref={ref}
        value={value}
      />
      {label && (
        <label
          htmlFor={inputId}
          className={`input-label input-label--${sizeStyle}`}
          style={{
            color: variantColors.color,
          }}
          aria-label={label}
        >
          {label}
        </label>
      )}
      {iconEnd && (
        <span className={`input-icon-end input-icon-end--${sizeStyle}`}>
          {iconEnd}
        </span>
      )}
    </div>
  );
});
