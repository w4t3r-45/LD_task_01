import React from "react";
import { IconType } from "../../@types/iconType";

export const MenuIcon2: React.FC<IconType> = ({ color, style }: IconType) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style && { ...style }}
    >
      <path
        d="M3.5 12H21.5"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 6H21.5"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 18H21.5"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
