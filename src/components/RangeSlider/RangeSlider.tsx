import React, { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { sizes, themes, variants } from "../../theme";
import "./RangeSlider.css";

type RangeSliderProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  showTicks?: boolean; // nuevo prop para mostrar marcas
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
      step = 1,
      showTicks = false,
      ...rest
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const generatedId = useId();
    const sliderId = id || generatedId;

    const ballDiameters = {
      sm: 14,
      md: 18,
      lg: 22,
    };

    // Generar las opciones para el datalist si showTicks es true
    const datalistId = `${sliderId}-ticks`;

    const options = [];
    if (showTicks) {
      for (let i = Number(min); i <= Number(max); i += Number(step)) {
        options.push(i);
      }
    }

    return (
      <div
        className={`rangeSlider-container${disabled ? " rangeSlider-disabled" : ""}`}
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
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          list={showTicks ? datalistId : undefined} // link con el datalist si showTicks
        />
        {showTicks && (
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
