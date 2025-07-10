import React from "react";

interface RightArrowIconProps {
  size?: number;
  color?: string;
}

const RightArrowIcon: React.FC<RightArrowIconProps> = ({
  size = 16,
  color,
}) => {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default RightArrowIcon;
