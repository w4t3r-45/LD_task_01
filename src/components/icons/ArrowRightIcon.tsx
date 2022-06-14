import React from "react";
import { IconType } from "../../@types/iconType";

export const ArrowRightIcon: React.FC<IconType> = ({
  color,
  style,
}: IconType) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style && { ...style }}
    >
      <path
        d="M4.16666 10H15.8333"
        stroke={color || "#21B8F9"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16666L15.8333 9.99999L10 15.8333"
        stroke={color || "#21B8F9"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
