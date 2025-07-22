import React from "react";
import { useDropdownContext } from "./context";

export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { open } = useDropdownContext();

  return (
    <ul className={`dropdown-menu ${open ? "visible" : ""}`}>{children}</ul>
  );
};
