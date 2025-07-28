import React, { ReactNode, useState } from "react";
import { DropdownContext } from "./context";
import "./Dropdown.css";
import { sizes, themes, variants } from "../../theme";

export interface DropdownRootProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
}

export function DropdownRoot({
  children,
  variant = "default",
  theme = "light",
  sizeStyle = "md",
}: DropdownRootProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider
      value={{ open, setOpen, variant, theme, sizeStyle }}
    >
      <div
        className={`dropdown-root dropdown-root--${sizeStyle}`}
        data-testid="dropdown-root"
        role="combobox"
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
