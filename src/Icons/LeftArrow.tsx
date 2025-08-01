import React from "react";

interface LeftArrowIconProps {
  size?: number;
  color?: string;
}

const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({ size = 16, color }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke={color || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default LeftArrowIcon;
