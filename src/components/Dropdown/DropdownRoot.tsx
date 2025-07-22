import React, { useState } from "react";
import { DropdownContext } from "./context";
import "./Dropdown.css";

export const DropdownRoot: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="dropdown-root">{children}</div>
    </DropdownContext.Provider>
  );
};
