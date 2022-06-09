import { Dispatch, SetStateAction, ComponentType } from "react";
import { IconType } from "./iconType";

export type SideMenuItemType = {
  isSelected: boolean;
  title: string;
  Icon: ComponentType<IconType>;
  hasBadge?: boolean;
  badgeContent?: string | number;
  childs?: MIT_Child[];
  route?: string;
  isDrawerOpened: boolean;
};

type MIT_Child = {
  title: string;
  route?: string;
};

export type SideMenuType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
