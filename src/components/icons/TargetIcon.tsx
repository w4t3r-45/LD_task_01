import React from "react";
import { IconType } from "../../@types/iconType";

export const TargetIcon: React.FC<IconType> = ({ color, style }: IconType) => {
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
        d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39762 1.66669 9.99999C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99998 11.6667C10.9205 11.6667 11.6666 10.9205 11.6666 10C11.6666 9.07954 10.9205 8.33334 9.99998 8.33334C9.0795 8.33334 8.33331 9.07954 8.33331 10C8.33331 10.9205 9.0795 11.6667 9.99998 11.6667Z"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
