import React, { useState } from "react";
import "./DatePicker.css";
import { variants, themes, sizes } from "../../theme";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { months, days } from "./constants";

interface DatePickerProps {
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
  disabled?: boolean;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  variant = "default",
  theme = "light",
  sizeStyle = "md",
  disabled = false,
  value,
  onChange,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [internalSelectedDate, setInternalSelectedDate] = useState<Date | null>(
    null
  );

  const selectedDate = value !== undefined ? value : internalSelectedDate;

  const variantColors = variants[variant] || variants.default;
  const themeColors = themes[theme] || themes.light;

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const rawFirstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const firstDayOfMonth = (rawFirstDay + 6) % 7;

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    if (onChange) {
      onChange(newDate);
    }
    if (value === undefined) {
      setInternalSelectedDate(newDate);
    }
  };

  const renderCalendar = () => {
    const calendar: React.ReactNode[] = [];
    const today = new Date();

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="datepicker-empty-day" />
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      calendar.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`datepicker-day-button ${isToday ? "today" : ""} ${isSelected ? "selected" : ""} ${sizeStyle ? `datepicker-day-button--${sizeStyle}` : ""}`}
          aria-label={`Select ${months[currentDate.getMonth()]} ${day}, ${currentDate.getFullYear()}`}
          type="button"
        >
          {day}
        </button>
      );
    }

    return calendar;
  };

  return (
    <div
      role="region"
      data-testid="datepicker-container"
      className={`datepicker-container datepicker-container--${sizeStyle}`}
      style={
        {
          "--background-color": themeColors.background,
          "--text-color": themeColors.color,
          "--box-shadow": themeColors.boxShadow,
          "--theme-contrast": themeColors.contrast,
          "--primary-color": variantColors.color,
          "--primary-color-hover": variantColors.highlight,
          "--primary-color-contrast": variantColors.contrast,
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? "none" : "auto",
        } as React.CSSProperties
      }
    >
      <div className="datepicker-header">
        <button
          onClick={handlePrevMonth}
          className="datepicker-nav-button"
          aria-label="Previous month"
          type="button"
        >
          <LeftArrowIcon />
        </button>
        <h2 className={`datepicker-current-month-year--${sizeStyle}`}>
          {`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
        </h2>
        <button
          onClick={handleNextMonth}
          className="datepicker-nav-button"
          aria-label="Next month"
          type="button"
        >
          <RightArrowIcon />
        </button>
      </div>

      <div className="datepicker-calendar">
        <div className="datepicker-weekdays">
          {days.map((day) => (
            <div key={day} className={`datepicker-weekday--${sizeStyle}`}>
              {day}
            </div>
          ))}
        </div>
        <div className="datepicker-days-grid">{renderCalendar()}</div>
      </div>

      <div className="datepicker-footer">
        <div className={`datepicker-selected-date-display--${sizeStyle}`}>
          {selectedDate
            ? selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date selected"}
        </div>
      </div>
    </div>
  );
};
