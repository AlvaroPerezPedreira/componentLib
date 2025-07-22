import React from "react";

export const DropdownItem: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <li
      className="dropdown-item"
      onClick={onClick}
      tabIndex={0}
      role="menuitem"
    >
      {children}
    </li>
  );
};
