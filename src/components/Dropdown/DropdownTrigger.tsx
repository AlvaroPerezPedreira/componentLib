import React from "react";
import { useDropdownContext } from "./context";

export const DropdownTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { open, setOpen } = useDropdownContext();

  return (
    <button
      className={`dropdown-trigger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-haspopup="true"
      aria-expanded={open}
      type="button"
    >
      {children}
    </button>
  );
};
