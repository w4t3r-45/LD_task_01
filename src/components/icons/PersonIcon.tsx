import React from "react";
import { IconType } from "../../@types/iconType";

export const PersonIcon: React.FC<IconType> = ({ color, style }: IconType) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style && { ...style }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.72039 11.8871C2.50179 11.1057 3.5616 10.6667 4.66667 10.6667H11.3333C12.4384 10.6667 13.4982 11.1057 14.2796 11.8871C15.061 12.6685 15.5 13.7283 15.5 14.8334V16.5C15.5 16.9603 15.1269 17.3334 14.6667 17.3334C14.2064 17.3334 13.8333 16.9603 13.8333 16.5V14.8334C13.8333 14.1703 13.5699 13.5344 13.1011 13.0656C12.6323 12.5967 11.9964 12.3334 11.3333 12.3334H4.66667C4.00363 12.3334 3.36774 12.5967 2.8989 13.0656C2.43006 13.5344 2.16667 14.1703 2.16667 14.8334V16.5C2.16667 16.9603 1.79357 17.3334 1.33333 17.3334C0.873096 17.3334 0.5 16.9603 0.5 16.5V14.8334C0.5 13.7283 0.938987 12.6685 1.72039 11.8871Z"
        fill={color || "#103B66"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.33335C6.61929 2.33335 5.5 3.45264 5.5 4.83335C5.5 6.21407 6.61929 7.33335 8 7.33335C9.38071 7.33335 10.5 6.21407 10.5 4.83335C10.5 3.45264 9.38071 2.33335 8 2.33335ZM3.83333 4.83335C3.83333 2.53217 5.69881 0.666687 8 0.666687C10.3012 0.666687 12.1667 2.53217 12.1667 4.83335C12.1667 7.13454 10.3012 9.00002 8 9.00002C5.69881 9.00002 3.83333 7.13454 3.83333 4.83335Z"
        fill={color || "#103B66"}
      />
    </svg>
  );
};
