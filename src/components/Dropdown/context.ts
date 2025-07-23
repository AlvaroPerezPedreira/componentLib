import React, { createContext, useContext } from "react";
import { sizes, themes, variants } from "../../theme";

export interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
}

export const DropdownContext = createContext<DropdownContextValue | undefined>(
  undefined
);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("Dropdown components must be used within a Root");
  return context;
};
