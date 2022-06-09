import React from "react";
import { IconType } from "../../@types/iconType";

export const CogPlanetIcon: React.FC<IconType> = ({
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
        d="M18.2431 7.28246C18.0917 6.815 17.8989 6.36121 17.667 5.92664L18.6721 4.46348L15.4845 1.31855L13.9643 2.32652C13.5038 2.09551 13.0233 1.90617 12.5293 1.76121L11.7689 0L8.22885 0L7.45704 1.81371C6.99712 1.9593 6.54958 2.14367 6.12009 2.36445L4.53314 1.30762L1.33916 4.44617L2.41637 6.02133C2.20889 6.41879 2.03405 6.83227 1.89381 7.25688L0 7.58695L0 10.1536C0 12.7837 1.0402 15.2563 2.92893 17.1161C4.81767 18.9758 7.3289 20 10 20C12.6711 20 15.1823 18.9758 17.0711 17.1161C18.9598 15.2563 20 12.7837 20 10.1536V7.58625L18.2431 7.28246ZM2.83193 8.28367L2.93195 7.92707C3.09317 7.35219 3.32744 6.79766 3.62823 6.27894L3.81151 5.96289L2.87474 4.59309L4.67925 2.81988L6.06368 3.74187L6.38649 3.55766C6.91381 3.25672 7.47691 3.02145 8.06029 2.85836L8.33593 2.78129L9.02074 1.17211L10.9814 1.17211L11.6602 2.74434L11.9435 2.81695C12.558 2.97441 13.1509 3.21102 13.7059 3.52016L14.0262 3.69855L15.3352 2.83059L17.1361 4.60738L16.2667 5.87309L16.4554 6.19148C16.782 6.74262 17.0331 7.3341 17.2018 7.94953L17.3005 8.30957L18.8096 8.57051V9.67422L15.5078 9.67422C15.3914 6.82582 13.0021 4.54379 10.0813 4.54379C7.16045 4.54379 4.77113 6.82582 4.65474 9.67422H1.19039L1.19039 8.56984L2.83193 8.28367ZM1.21832 10.8463H4.6948C4.73527 11.9569 4.87277 13.032 5.09946 14.0341H2.11633C1.61357 13.0463 1.30774 11.9679 1.21832 10.8463ZM5.84596 9.67418C5.96129 7.4723 7.81686 5.71586 10.0812 5.71586C12.3456 5.71586 14.2012 7.4723 14.3166 9.67418H5.84596ZM5.88595 10.8463H9.4048V14.0341H6.32067C6.07733 13.0449 5.92919 11.9676 5.88595 10.8463ZM9.4048 15.2063L9.4048 18.7281C8.5974 18.46 7.81456 17.6586 7.19246 16.4387C6.99728 16.0559 6.82244 15.6433 6.66852 15.2063H9.4048ZM10.5952 18.7281L10.5952 15.2062H13.3315C13.1776 15.6432 13.0028 16.0559 12.8076 16.4386C12.1854 17.6585 11.4026 18.4599 10.5952 18.7281ZM10.5952 14.0342V10.8463H14.1141C14.0708 11.9676 13.9228 13.045 13.6794 14.0342H10.5952ZM15.3052 10.8463L18.7817 10.8463C18.6923 11.9678 18.3865 13.0462 17.8837 14.0341L14.9034 14.0341C15.1258 13.0484 15.2647 11.9762 15.3052 10.8463ZM2.83745 15.2063H5.41632C5.61591 15.8359 5.85398 16.426 6.12866 16.9646C6.3874 17.472 6.67165 17.9197 6.97657 18.3054C5.78562 17.878 4.69369 17.1961 3.77065 16.2872C3.42701 15.9489 3.11583 15.5871 2.83745 15.2063ZM16.2293 16.2872C15.3052 17.1971 14.2118 17.8796 13.0193 18.3069C13.6587 17.503 14.1941 16.4455 14.5869 15.2062L17.1626 15.2062C16.8842 15.5871 16.573 15.9489 16.2293 16.2872Z"
        fill={color || "#103B66"}
      />
    </svg>
  );
};