import React from "react";
import { IconType } from "../../@types/iconType";

export const ArrowUpIcon: React.FC<IconType> = ({ color, style }: IconType) => {
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
        d="M5.41074 0.910734C5.73617 0.585297 6.26381 0.585297 6.58925 0.910734L11.5892 5.91073C11.9147 6.23617 11.9147 6.76381 11.5892 7.08925C11.2638 7.41468 10.7362 7.41468 10.4107 7.08925L5.99999 2.6785L1.58925 7.08925C1.26381 7.41468 0.736171 7.41468 0.410734 7.08925C0.0852972 6.76381 0.0852972 6.23617 0.410734 5.91073L5.41074 0.910734Z"
        fill={color || "#103B66"}
      />
    </svg>
  );
};
