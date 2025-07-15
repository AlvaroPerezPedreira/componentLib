import React, { forwardRef } from "react";
import "./Breadcrump.css";
import { sizes, themes, variants } from "../../theme";

export type BreadcrumbItem = {
  id: string | number;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  ariaCurrent?: boolean;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  separatorVariantColor?: boolean;
  variant?: keyof typeof variants;
  sizeStyle?: keyof typeof sizes;
  theme?: keyof typeof themes;
}

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const {
      items = [],
      variant = "default",
      sizeStyle = "md",
      theme = "light",
      separator = ">",
      separatorVariantColor = false,
      ...restProps
    } = props;

    const themeColors = themes[theme] || themes.light;
    const variantColors = variants[variant] || variants.default;
    const separatorColor = separatorVariantColor
      ? variantColors.color
      : themeColors.color;

    return (
      <nav
        className="breadcrumbs-navigation"
        style={
          {
            "--title-text-color": variantColors.color,
            "--background-color": themeColors.background,
            "--box-shadow": themeColors.boxShadow,
            "--text-color": themeColors.color,
            "--separator-color": separatorColor,
          } as React.CSSProperties
        }
        aria-label="Breadcrumb"
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
        ref={ref}
        {...restProps}
      >
        <ol className="breadcrumb-container">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={item.id}
                className={`breadcrumb-item breadcrumb-item--${sizeStyle}`}
                property="itemListElement"
                typeof="ListItem"
              >
                {item.href && !item.disabled && !isLast ? (
                  <a
                    className="breadcrumb-link"
                    href={item.href}
                    property="item"
                    typeof="WebPage"
                    aria-current={item.ariaCurrent ? "location" : undefined}
                  >
                    {item.icon && (
                      <span
                        className={`breadcrumb-icon breadcrumb-icon--${sizeStyle}`}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                    )}
                    <span property="name">{item.label}</span>
                  </a>
                ) : (
                  <span
                    className="breadcrumb-link"
                    property="name"
                    aria-current={item.ariaCurrent ? "location" : undefined}
                    tabIndex={item.ariaCurrent ? 0 : undefined}
                  >
                    {item.icon && (
                      <span
                        className={`breadcrumb-icon breadcrumb-icon--${sizeStyle}`}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </span>
                )}

                <meta property="position" content={(index + 1).toString()} />

                {!isLast && (
                  <span
                    className={`breadcrumb-separator breadcrumb-separator--${sizeStyle}`}
                    aria-hidden="true"
                  >
                    {separator}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);
