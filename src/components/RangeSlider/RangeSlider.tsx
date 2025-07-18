import React, { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { sizes, themes, variants } from "../../theme";
import "./RangeSlider.css";
import { ballDiameters } from "./RangeSliderConstants";

type RangeSliderProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  showTicks?: boolean;
};

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  (props, ref) => {
    const {
      variant = "default",
      theme = "light",
      sizeStyle = "md",
      id,
      disabled = false,
      min = 0,
      max = 100,
      step,
      showTicks = false,
      ...rest
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const generatedId = useId();
    const sliderId = id || generatedId;

    // Validar showTicks
    const validShowTicks = showTicks && step !== undefined && step !== null;

    // Generar las opciones para los ticks
    const datalistId = `${sliderId}-ticks`;

    const options: number[] = [];
    if (validShowTicks) {
      for (let i = Number(min); i <= Number(max); i += Number(step)) {
        options.push(i);
      }
    }

    return (
      <div
        className={`rangeSlider-container${disabled ? " rangeSlider-disabled" : ""}`}
        data-testid="rangeSlider-container"
        style={
          {
            "--slider-variant-color": variantColors.color,
            "--slider-variant-contrast": variantColors.contrast,
            "--slider-ball-outline": themeColors.color,
            "--boxshadow": themeColors.boxShadow,
            "--ball-diameter": `${ballDiameters[sizeStyle]}px`,
          } as React.CSSProperties
        }
      >
        <input
          {...rest}
          type="range"
          id={sliderId}
          ref={ref}
          className={`rangeSlider rangeSlider--${sizeStyle}`}
          data-testid="rangeSlider"
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          list={validShowTicks ? datalistId : undefined}
        />
        {validShowTicks && (
          <div className={`rangeSlider-ticks rangeSlider-ticks--${sizeStyle}`}>
            {options.map((val) => (
              <span
                key={val}
                className={`rangeSlider-tick rangeSlider-tick--${sizeStyle}`}
                style={{
                  left: `${((val - Number(min)) / (Number(max) - Number(min))) * 100}%`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
