import React from "react";
import { IconType } from "../../@types/iconType";

export const FileIcon: React.FC<IconType> = ({ color, style }: IconType) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style && { ...style }}
    >
      <path
        d="M14.5 2.5H6.5C5.96957 2.5 5.46086 2.71071 5.08579 3.08579C4.71071 3.46086 4.5 3.96957 4.5 4.5V20.5C4.5 21.0304 4.71071 21.5391 5.08579 21.9142C5.46086 22.2893 5.96957 22.5 6.5 22.5H18.5C19.0304 22.5 19.5391 22.2893 19.9142 21.9142C20.2893 21.5391 20.5 21.0304 20.5 20.5V8.5L14.5 2.5Z"
        stroke={color || "#103B66"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 2.5V8.5H20.5"
        stroke={color || "#103B66"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 13.5H8.5"
        stroke={color || "#103B66"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 17.5H8.5"
        stroke={color || "#103B66"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 9.5H9.5H8.5"
        stroke={color || "#103B66"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
