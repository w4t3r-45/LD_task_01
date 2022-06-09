import React, { useState } from "react";
import { Box, Badge, Typography } from "@mui/material";
import { SideMenuItemType } from "../@types/drawerRelatedTypes";
import { ARROW_DOWN_PATH, ARROW_UP_PATH } from "../helpers/iconsPaths";
import { ArrowDownIcon } from "./icons";

export const SideMenuItem: React.FC<SideMenuItemType> = ({
  title,
  Icon,
  hasBadge,
  badgeContent,
  childs,
  route,
  isSelected,
  isDrawerOpened,
}: SideMenuItemType) => {
  // state for showing subitems
  const [showSubItems, setShowSubItems] = useState(false);

  const handleExpandSubItems = () => {
    setShowSubItems(!showSubItems);
  };

  return (
    <Box display="flex" flexDirection="column">
      <div
        onClick={(childs && handleExpandSubItems) || undefined}
        style={{ fontFamily: '"Noto Sans HK", sans-serif' }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            cursor: "pointer",
            padding: "8px 20px",
            "&:hover": {
              backgroundColor: "#21B8F909",
            },
          }}
        >
          {/* title and Icon */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Icon
              color={isSelected && "#21B8F9"}
              style={{ marginRight: "16px", width: "20px", height: "20px" }}
            />
            {isDrawerOpened && (
              <Typography
                fontSize="14px"
                sx={{ color: isSelected ? "#21B8F9" : "#000" }}
              >
                {title}
              </Typography>
            )}
          </Box>
          {/* last element : Icon || Badge */}
          {(hasBadge && isDrawerOpened && (
            <Badge
              badgeContent={badgeContent}
              color="success"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "12px",
                  height: "24px",
                  minWidth: "24px",
                  borderRadius: "50%",
                  padding: "2px",
                  transform: "translate(-38% , -50%)",
                },
              }}
            />
          )) ||
            (childs && isDrawerOpened && (
              <img
                src={showSubItems ? ARROW_UP_PATH : ARROW_DOWN_PATH}
                alt="expand menu item icon"
                width="11.67px"
                height="6.67px"
                style={{ marginRight: "16px" }}
              />
            ))}
        </Box>
      </div>
      {/* subItems */}
      {childs && (
        <Box
          display={showSubItems ? "flex" : "none"}
          flexDirection="column"
          sx={{
            marginLeft: "59px",
            paddingTop: "20px",
          }}
        >
          {childs.map((item) => (
            <Box
              style={{
                marginBottom: "20px",
              }}
            >
              <Typography fontSize="14px">{item.title}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
