import React from "react";
import { IconType } from "../../@types/iconType";

export const ArrowDownIcon: React.FC<IconType> = ({
  color,
  style,
}: IconType) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style && { ...style }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.410734 0.910765C0.736171 0.585328 1.26381 0.585328 1.58925 0.910765L5.99999 5.32151L10.4107 0.910765C10.7362 0.585328 11.2638 0.585328 11.5892 0.910765C11.9147 1.2362 11.9147 1.76384 11.5892 2.08928L6.58925 7.08928C6.26381 7.41471 5.73617 7.41471 5.41074 7.08928L0.410734 2.08928C0.0852972 1.76384 0.0852972 1.2362 0.410734 0.910765Z"
        fill={color || "#103B66"}
      />
    </svg>
  );
};
