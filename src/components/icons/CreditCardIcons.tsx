import React from "react";
import { IconType } from "../../@types/iconType";

export const CreditCardIcon: React.FC<IconType> = ({
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
        d="M17.5 3.33333H2.49998C1.5795 3.33333 0.833313 4.07952 0.833313 5V15C0.833313 15.9205 1.5795 16.6667 2.49998 16.6667H17.5C18.4205 16.6667 19.1666 15.9205 19.1666 15V5C19.1666 4.07952 18.4205 3.33333 17.5 3.33333Z"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.833313 8.33333H19.1666"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
