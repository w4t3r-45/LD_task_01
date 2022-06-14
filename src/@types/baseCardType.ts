import { ComponentType, ReactNode, CSSProperties } from "react";

export type BaseCardType = {
  CardBody: ReactNode;
  CardFooter?: ReactNode;
  HeaderIcon?: ComponentType;
  headerLink?: ReactNode;
  title?: string;
  hasFilter?: boolean;
  style?: CSSProperties;
};
