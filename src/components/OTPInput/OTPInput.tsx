import React, { useRef, useEffect, forwardRef, useState } from "react";
import { themes, variants, sizes } from "../../theme";
import "./OTPInput.css";

type OTPInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  length?: number;
  placeholder?: string;
  theme?: keyof typeof themes;
  variant?: keyof typeof variants;
  sizeStyle?: keyof typeof sizes;
  variantTextColor?: boolean;
};

export const OTPInput = forwardRef<HTMLInputElement, OTPInputProps>(
  (props, ref) => {
    const {
      value = "",
      onChange,
      onComplete,
      length = 6,
      placeholder = "",
      theme = "light",
      variant = "default",
      sizeStyle = "md",
      variantTextColor = false,
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;

    // Rellenamos con cadenas vacías para evitar espacios que bloqueen el input
    const valueArr = value
      .split("")
      .concat(Array(length).fill(""))
      .slice(0, length);
    const placeholderArr = placeholder
      ? placeholder.padEnd(length, " ").slice(0, length).split("")
      : Array(length).fill(" ");

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Actualizar un dígito concreto
    const setDigit = (index: number, digit: string) => {
      if (!/^\d?$/.test(digit)) return;
      const newValueArr = [...valueArr];
      newValueArr[index] = digit;
      const newValue = newValueArr.join("");
      onChange?.(newValue);

      if (isValueComplete(newValue)) {
        onComplete?.(newValue);
      }
    };

    const isValueComplete = (val: string) => {
      return val.length === length && !val.includes("");
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number
    ) => {
      if (e.key === "Backspace") {
        setDigit(index, "");
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
        e.preventDefault();
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
        e.preventDefault();
      } else if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
        e.preventDefault();
      } else if (e.key === "Enter") {
        const currentValue = valueArr.join("");
        if (isValueComplete(currentValue)) {
          onComplete?.(currentValue);
        } else {
          e.preventDefault();
        }
        return;
      } else if (/^\d$/.test(e.key)) {
        setDigit(index, e.key);
        if (index < length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
        e.preventDefault();
      } else {
        e.preventDefault();
      }
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => {
      const val = e.target.value.replace(/\D/g, "").slice(-1); // solo un dígito
      setDigit(index, val);
      if (val && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, length);
      onChange?.(pasted);
      if (pasted.length > 0) {
        const nextIndex = Math.min(pasted.length, length - 1);
        inputRefs.current[nextIndex]?.focus();
      }
    };

    useEffect(() => {
      if (typeof ref === "function") {
        ref(null);
      } else if (ref) {
        (ref as React.RefObject<HTMLInputElement | null>).current = null;
      }
    }, [ref]);

    return (
      <div
        data-testid="otp-container"
        className={`otp-container otp-container--${sizeStyle}`}
        style={
          {
            "--otp-text-color": !variantTextColor
              ? themeColors.color
              : variantColors.color,
            "--otp-placeholder-color": themeColors.contrast,
            "--otp-border": themeColors.contrast,
            "--otp-underline-active": variantColors.color,
            "--nElements": length,
          } as React.CSSProperties
        }
      >
        <div
          data-testid="otp-inputs"
          className={`otp-inputs otp-inputs--${sizeStyle}`}
        >
          {Array.from({ length }).map((_, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              className={`otp-input otp-input--${sizeStyle}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={valueArr[i]}
              placeholder={placeholderArr[i]}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={handlePaste}
              autoComplete="one-time-code"
              style={{ textAlign: "center" }}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
            />
          ))}
        </div>
        <div className={`otp-underline-box otp-underline-box--${sizeStyle}`}>
          {Array.from({ length }).map((_, i) => (
            <span
              key={i}
              className={`otp-underline otp-underline--${sizeStyle} ${
                i === activeIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
);
