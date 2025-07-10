import React, { forwardRef, useState, useRef, useEffect } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import "./Accordion.css";
import { sizes, themes, variants } from "../../theme";

export type AccordionItem = {
  id: string | number;
  icon?: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenItems?: Array<string | number>;
  multiple?: boolean;
  variant?: keyof typeof variants;
  sizeStyle?: keyof typeof sizes;
  theme?: keyof typeof themes;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      items = [],
      defaultOpenItems = [],
      multiple = true,
      variant = "default",
      sizeStyle = "md",
      theme = "light",
      ...restProps
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const sizeStyles = sizes[sizeStyle] || sizes.md;

    const [openItems, setOpenItems] =
      useState<Array<string | number>>(defaultOpenItems);

    const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const [heights, setHeights] = useState<{ [key: string]: number }>({});

    useEffect(() => {
      const newHeights: { [key: string]: number } = {};
      items.forEach(({ id }) => {
        const el = contentRefs.current[id];
        if (el) newHeights[id] = el.scrollHeight;
      });
      setHeights(newHeights);
    }, [items, openItems]);

    const toggleItem = (id: string | number) => {
      if (multiple) {
        setOpenItems((prev) =>
          prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
      } else {
        setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
      }
    };

    return (
      <div
        className="accordion-menu"
        ref={ref}
        style={
          {
            "--max-width": sizeStyles.maxWidth,
            "--title-text-color": variantColors.color,
            "--background-color": themeColors.background,
            "--box-shadow": themeColors.boxShadow,
            "--text-color": themeColors.color,
            "--title-font-size": sizeStyles.titleFontSize,
            "--font-size": sizeStyles.fontSize,
          } as React.CSSProperties
        }
        {...restProps}
      >
        <ul role="list" aria-label="Accordion List">
          {items.map(({ id, icon, title, content, disabled }) => {
            const isOpen = openItems.includes(id);
            const height = isOpen ? (heights[id] ?? 0) : 0;

            return (
              <li
                key={id}
                className={`${isOpen ? "open" : "closed"} ${
                  disabled ? "disabled" : ""
                }`}
              >
                <div
                  className="accordion-header"
                  onClick={() => {
                    if (!disabled) toggleItem(id);
                  }}
                  role="button"
                  tabIndex={disabled ? -1 : 0}
                  aria-disabled={disabled}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${id}`}
                  id={`accordion-header-${id}`}
                  onKeyDown={(e) => {
                    if (!disabled && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault(); // Para evitar scroll al presionar espacio
                      toggleItem(id);
                    }
                  }}
                >
                  <h2 className="accordion-title">
                    {icon && <span>{icon}</span>}
                    {title}
                  </h2>
                  <ArrowIcon open={isOpen} color={variantColors.color} />
                </div>
                <div
                  className="accordion-content"
                  id={`accordion-content-${id}`}
                  role="region"
                  aria-labelledby={`accordion-header-${id}`}
                  ref={(el) => {
                    contentRefs.current[id] = el;
                  }}
                  style={{
                    maxHeight: height,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translate(0,0)" : "translate(0,50%)",
                    transition:
                      "max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <p className="accordionItem-content">{content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
