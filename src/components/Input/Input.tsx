import React, { InputHTMLAttributes, useId } from "react";
import { themes, variants } from "../../theme";
import "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = ({
  label,
  variant = "default",
  theme = "light",
  id,
  disabled = false,
  ...props
}) => {
  const themeColors = themes[theme] || themes.light;
  const variantColors = variants[variant] || variants.default;
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div
      className={`input-container${disabled ? " input-disabled" : ""}`}
      style={
        {
          "--focus-border-color": variantColors.color,
          "--border-color": themeColors.contrast,
        } as React.CSSProperties
      }
      title={disabled ? "Este campo está deshabilitado" : undefined}
    >
      <input
        {...props}
        className="input-field"
        id={inputId}
        type={props.type || "text"}
        placeholder=""
        style={{
          color: themeColors.color,
          cursor: disabled ? "not-allowed" : "text",
        }}
        disabled={disabled}
      />
      {label && (
        <label
          htmlFor={inputId}
          className="input-label"
          style={{ color: variantColors.color }}
        >
          {label}
        </label>
      )}
    </div>
  );
};
