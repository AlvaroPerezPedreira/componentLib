import React, { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { sizes, themes, variants } from "../../theme";
import "./RangeSlider.css";

type RangeSliderProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
};

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  (props, ref) => {
    const {
      variant = "default",
      theme = "light",
      sizeStyle = "md",
      id,
      disabled = false,
      ...rest
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const generatedId = useId();
    const sliderId = id || generatedId;

    return (
      <div
        className={`rangeSlider-container${disabled ? " rangeSlider-disabled" : ""}`}
        style={
          {
            "--slider-variant-color": variantColors.color,
            "--slider-ball-outline": themeColors.color,
            "--boxshadow": themeColors.boxShadow,
          } as React.CSSProperties
        }
      >
        <input
          {...rest}
          type="range"
          id={sliderId}
          ref={ref}
          className={`rangeSlider rangeSlider--${sizeStyle}`}
          disabled={disabled}
        />
      </div>
    );
  }
);
