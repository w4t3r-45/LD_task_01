import React from "react";
import { IconType } from "../../@types/iconType";

export const ShopIcon: React.FC<IconType> = ({ color, style }: IconType) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.833333C0 0.373096 0.373096 0 0.833333 0H4.16667C4.56386 0 4.90584 0.280321 4.98379 0.669786L5.68369 4.16667H19.1667C19.415 4.16667 19.6504 4.27744 19.8087 4.4688C19.9671 4.66015 20.0318 4.91215 19.9852 5.15611L18.6507 12.154C18.5364 12.7295 18.2233 13.2465 17.7663 13.6144C17.3115 13.9805 16.743 14.1758 16.1595 14.1667H8.07387C7.49031 14.1758 6.92184 13.9805 6.46707 13.6144C6.01021 13.2466 5.6972 12.7299 5.58277 12.1547L4.19066 5.19934C4.18501 5.17633 4.18032 5.15294 4.17663 5.12923L3.4836 1.66667H0.833333C0.373096 1.66667 0 1.29357 0 0.833333ZM6.01727 5.83333L7.21737 11.8293C7.25547 12.0212 7.35983 12.1935 7.51218 12.3161C7.66453 12.4388 7.85516 12.5039 8.0507 12.5002L8.06667 12.5H16.1667L16.1826 12.5002C16.3782 12.5039 16.5688 12.4388 16.7212 12.3161C16.8728 12.194 16.9769 12.0228 17.0154 11.832L18.1594 5.83333H6.01727ZM5.83333 17.5C5.83333 16.5795 6.57953 15.8333 7.5 15.8333C8.42047 15.8333 9.16667 16.5795 9.16667 17.5C9.16667 18.4205 8.42047 19.1667 7.5 19.1667C6.57953 19.1667 5.83333 18.4205 5.83333 17.5ZM15 17.5C15 16.5795 15.7462 15.8333 16.6667 15.8333C17.5871 15.8333 18.3333 16.5795 18.3333 17.5C18.3333 18.4205 17.5871 19.1667 16.6667 19.1667C15.7462 19.1667 15 18.4205 15 17.5Z"
        fill={color || "#103B66"}
      />
    </svg>
  );
};
