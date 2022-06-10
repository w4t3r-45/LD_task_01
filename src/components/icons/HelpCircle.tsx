import React from "react";
import { IconType } from "../../@types/iconType";

export const HelpCircleIcon: React.FC<IconType> = ({
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
        d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.57501 7.5C7.77093 6.94306 8.15764 6.47342 8.66664 6.17428C9.17564 5.87513 9.77409 5.76578 10.356 5.86559C10.9379 5.96541 11.4657 6.26794 11.8459 6.71961C12.2261 7.17128 12.4342 7.74294 12.4333 8.33334C12.4333 10 9.93335 10.8333 9.93335 10.8333"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.1667H10.0083"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
