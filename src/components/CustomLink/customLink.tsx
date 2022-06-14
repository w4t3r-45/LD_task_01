import React from "react";
import { LinkType } from "../../@types/linkType";
import { Link } from "@mui/material";
import { ArrowRightIcon } from "../icons";

export const CustomLink: React.FC<LinkType> = ({
  content,
  URL,
  hasIcon,
  linkIcnColor,
  linkTxtColor,
}: LinkType) => {
  return (
    <Link
      href={URL}
      style={{
        display: "flex",
        alignItems: "center",
        color: linkTxtColor || "#21B8F9",
        textDecorationColor: linkTxtColor || "#21B8F9",
      }}
    >
      {content}{" "}
      {hasIcon && (
        <ArrowRightIcon
          style={{ marginLeft: "20px" }}
          color={linkIcnColor && linkIcnColor}
        />
      )}
    </Link>
  );
};
