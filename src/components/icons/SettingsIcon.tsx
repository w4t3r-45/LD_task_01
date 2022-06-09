import React from "react";
import { IconType } from "../../@types/iconType";

export const SettingsIcon: React.FC<IconType> = ({
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
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1666 12.5C16.0557 12.7513 16.0226 13.0302 16.0716 13.3005C16.1207 13.5708 16.2495 13.8203 16.4416 14.0167L16.4916 14.0667C16.6466 14.2215 16.7695 14.4053 16.8534 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8534 15.8841C16.7695 16.0864 16.6466 16.2702 16.4916 16.425C16.3369 16.58 16.153 16.7029 15.9507 16.7868C15.7484 16.8706 15.5315 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6742 16.7868C14.4719 16.7029 14.2881 16.58 14.1333 16.425L14.0833 16.375C13.8869 16.1829 13.6375 16.054 13.3671 16.005C13.0968 15.956 12.818 15.9891 12.5666 16.1C12.3202 16.2056 12.11 16.381 11.9619 16.6046C11.8138 16.8282 11.7344 17.0902 11.7333 17.3583V17.5C11.7333 17.942 11.5577 18.366 11.2452 18.6785C10.9326 18.9911 10.5087 19.1667 10.0666 19.1667C9.62462 19.1667 9.2007 18.9911 8.88813 18.6785C8.57557 18.366 8.39998 17.942 8.39998 17.5V17.425C8.39353 17.1492 8.30424 16.8817 8.14374 16.6573C7.98323 16.4328 7.75893 16.2619 7.49998 16.1667C7.24863 16.0557 6.96982 16.0226 6.69949 16.0717C6.42916 16.1207 6.17971 16.2496 5.98331 16.4417L5.93331 16.4917C5.77852 16.6466 5.59471 16.7696 5.39238 16.8534C5.19005 16.9373 4.97317 16.9805 4.75415 16.9805C4.53512 16.9805 4.31824 16.9373 4.11591 16.8534C3.91358 16.7696 3.72977 16.6466 3.57498 16.4917C3.42002 16.3369 3.29709 16.1531 3.21321 15.9507C3.12934 15.7484 3.08617 15.5315 3.08617 15.3125C3.08617 15.0935 3.12934 14.8766 3.21321 14.6743C3.29709 14.4719 3.42002 14.2881 3.57498 14.1333L3.62498 14.0833C3.81709 13.8869 3.94597 13.6375 3.99498 13.3672C4.044 13.0968 4.01091 12.818 3.89998 12.5667C3.79434 12.3202 3.61894 12.11 3.39537 11.9619C3.17179 11.8139 2.9098 11.7344 2.64165 11.7333H2.49998C2.05795 11.7333 1.63403 11.5577 1.32147 11.2452C1.00891 10.9326 0.833313 10.5087 0.833313 10.0667C0.833313 9.62464 1.00891 9.20072 1.32147 8.88816C1.63403 8.5756 2.05795 8.4 2.49998 8.4H2.57498C2.85081 8.39355 3.11832 8.30427 3.34273 8.14376C3.56714 7.98325 3.73808 7.75895 3.83331 7.5C3.94424 7.24866 3.97733 6.96984 3.92832 6.69951C3.8793 6.42918 3.75043 6.17973 3.55831 5.98334L3.50831 5.93334C3.35335 5.77855 3.23042 5.59473 3.14655 5.3924C3.06267 5.19007 3.0195 4.97319 3.0195 4.75417C3.0195 4.53514 3.06267 4.31827 3.14655 4.11594C3.23042 3.9136 3.35335 3.72979 3.50831 3.575C3.6631 3.42004 3.84692 3.29711 4.04925 3.21324C4.25158 3.12936 4.46845 3.08619 4.68748 3.08619C4.90651 3.08619 5.12338 3.12936 5.32571 3.21324C5.52804 3.29711 5.71186 3.42004 5.86665 3.575L5.91665 3.625C6.11305 3.81712 6.36249 3.94599 6.63282 3.99501C6.90315 4.04402 7.18197 4.01093 7.43331 3.9H7.49998C7.74645 3.79437 7.95666 3.61897 8.10472 3.39539C8.25279 3.17181 8.33224 2.90982 8.33331 2.64167V2.5C8.33331 2.05797 8.50891 1.63405 8.82147 1.32149C9.13403 1.00893 9.55795 0.833336 9.99998 0.833336C10.442 0.833336 10.8659 1.00893 11.1785 1.32149C11.4911 1.63405 11.6666 2.05797 11.6666 2.5V2.575C11.6677 2.84316 11.7472 3.10515 11.8952 3.32872C12.0433 3.5523 12.2535 3.7277 12.5 3.83334C12.7513 3.94426 13.0301 3.97736 13.3005 3.92834C13.5708 3.87932 13.8202 3.75045 14.0166 3.55834L14.0666 3.50834C14.2214 3.35337 14.4052 3.23044 14.6076 3.14657C14.8099 3.0627 15.0268 3.01952 15.2458 3.01952C15.4648 3.01952 15.6817 3.0627 15.884 3.14657C16.0864 3.23044 16.2702 3.35337 16.425 3.50834C16.5799 3.66312 16.7029 3.84694 16.7867 4.04927C16.8706 4.2516 16.9138 4.46848 16.9138 4.6875C16.9138 4.90653 16.8706 5.12341 16.7867 5.32574C16.7029 5.52807 16.5799 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.054 6.36252 16.005 6.63284C15.956 6.90317 15.989 7.18199 16.1 7.43334V7.5C16.2056 7.74648 16.381 7.95668 16.6046 8.10475C16.8282 8.25281 17.0902 8.33227 17.3583 8.33334H17.5C17.942 8.33334 18.3659 8.50893 18.6785 8.82149C18.991 9.13405 19.1666 9.55797 19.1666 10C19.1666 10.442 18.991 10.866 18.6785 11.1785C18.3659 11.4911 17.942 11.6667 17.5 11.6667H17.425C17.1568 11.6677 16.8948 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1666 12.5V12.5Z"
        stroke={color || "#103B66"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
