import React, { forwardRef, useId, useRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { themes, variants, sizes } from "../../theme";
import "./Checkbox.css";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      variant = "default",
      theme = "light",
      sizeStyle = "md",
      disabled = false,
      readOnly = false,
      id,
      checked, // añadido
      defaultChecked, // añadido
      onChange, // añadido
      ...restProps
    } = props;

    const [internalChecked, setInternalChecked] = useState(
      defaultChecked || false
    );

    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;

    const generatedId = useId();
    const checkboxId = id || generatedId;

    const checkboxRef = useRef<HTMLInputElement>(null);

    // Maneja cambio de checkbox
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (readOnly) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        setInternalChecked(event.target.checked);
      }
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div
        className={`checkbox-container checkbox-container--${sizeStyle}${disabled ? " checkbox-disabled" : ""}${readOnly ? " checkbox-readonly" : ""}`}
        style={
          {
            "--border-color": variantColors.color,
            "--border-color-focused": variantColors.contrast,
            "--background-color": themeColors.background,
            "--text-color": themeColors.color,
            "--placeholder-text-color": themeColors.contrast,
          } as React.CSSProperties
        }
      >
        <input
          type="checkbox"
          id={checkboxId}
          ref={(el) => {
            checkboxRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref)
              (ref as React.RefObject<HTMLInputElement | null>).current = el;
          }}
          disabled={disabled}
          readOnly={readOnly}
          checked={currentChecked}
          onChange={(e) => {
            if (!readOnly) handleChange(e);
          }}
          {...restProps}
        />
        <label htmlFor={checkboxId} className="checkbox-tick" />
        {label && (
          <label
            htmlFor={checkboxId}
            className={`checkbox-label checkbox-label--${sizeStyle}`}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
