import React, {
  useEffect,
  useRef,
  forwardRef,
  useId,
  useImperativeHandle,
  useState,
} from "react";
import type { TextareaHTMLAttributes } from "react";
import { themes, variants, sizes, thicknesses } from "../../theme";
import "./TextArea.css";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  thickness?: keyof typeof thicknesses;
  maxLength?: number;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      variant = "default",
      theme = "light",
      sizeStyle = "md",
      thickness = "md",
      disabled = false,
      placeholder,
      id,
      readOnly,
      value: valueProp,
      maxLength,
      onChange,
      ...restProps
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const sizeStyles = sizes[sizeStyle] || sizes.md;
    const thicknessStyles = thicknesses[thickness] || thicknesses.md;

    const generatedId = useId();
    const textAreaId = id || generatedId;

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // Manejo de valor para contador (controlado o interno)
    const [value, setValue] = useState(valueProp ?? "");

    // Actualizar estado si valueProp cambia desde fuera (controlado)
    useEffect(() => {
      if (valueProp !== undefined && valueProp !== value) {
        setValue(valueProp);
      }
    }, [valueProp, value]);

    useImperativeHandle(ref, () => textAreaRef.current!);

    // Auto height
    const adjustHeight = () => {
      const el = textAreaRef.current;
      if (el) {
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
      }
    };

    useEffect(() => {
      adjustHeight();
    }, [value]);

    // Manejo onChange para actualizar valor y propagar evento
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!readOnly && !disabled) {
        if (maxLength === undefined || e.target.value.length <= maxLength) {
          setValue(e.target.value);
          onChange?.(e);
        }
      }
    };

    return (
      <div
        className={`textarea-container${disabled ? " textarea-disabled" : ""}`}
        style={
          {
            "--border-color": variantColors.color,
            "--border-color-focused": variantColors.contrast,
            "--background-color": themeColors.background,
            "--text-color": themeColors.color,
            "--placeholder-text-color": themeColors.contrast,
            "--thickness": thicknessStyles,
          } as React.CSSProperties
        }
      >
        <textarea
          {...restProps}
          id={textAreaId}
          ref={textAreaRef}
          className={`textarea-field`}
          placeholder={placeholder || ""}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          maxLength={maxLength}
          style={{
            width: sizeStyles.width,
            fontSize: sizeStyles.fontSize,
            cursor: disabled ? "not-allowed" : readOnly ? "default" : "text",
          }}
          rows={1}
          onInput={adjustHeight}
          onChange={handleChange}
          aria-description={props["aria-description"]}
        />
        {maxLength && (
          <div
            style={{
              fontSize: "12px",
              color: themeColors.contrast,
              textAlign: "right",
              marginTop: "8px",
              userSelect: "none",
              width: sizeStyles.width,
            }}
          >
            {(typeof value === "string" ? value : String(value ?? "")).length} /{" "}
            {maxLength}
          </div>
        )}
      </div>
    );
  }
);
