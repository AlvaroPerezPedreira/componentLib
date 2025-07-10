import React from "react";

interface ArrowIconProps {
  open: boolean;
  size?: number;
  color?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ open, size = 16, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.25s ease-in-out",
        display: "block",
      }}
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default ArrowIcon;
