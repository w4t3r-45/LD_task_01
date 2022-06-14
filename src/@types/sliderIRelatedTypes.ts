import React from "react";
import { IconType } from "./iconType";

export type SliderType = {
  data: SliderItemType[];
};

export type SliderItemType = {
  TopChild: React.FC<IconType>;
  title: string;
  bgcolor: string;
};
