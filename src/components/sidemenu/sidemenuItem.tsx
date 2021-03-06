import React from "react";
import { Box, Badge, Typography, useTheme } from "@mui/material";
import { SideMenuItemType } from "../../@types/drawerRelatedTypes";
import { ARROW_DOWN_PATH, ARROW_UP_PATH } from "../../helpers/iconsPaths";
import { useDrawerContext } from "../../CONTEXT";
import { useDrawerActions } from "../../CONTEXT/DrawerContext/actions";

export const SideMenuItem: React.FC<SideMenuItemType> = ({
  title,
  Icon,
  hasBadge,
  badgeContent,
  childs,
  route,
  isSelected,
  setShowSubItems,
  showSubItems,
}: SideMenuItemType) => {
  // accessing drawer context
  const { dispatch, isDrwrOpened } = useDrawerContext();
  const { Drwr__set_open } = useDrawerActions();
  // accessing theme
  const theme = useTheme();
  const handleExpandSubItems = () => {
    !isDrwrOpened && dispatch(Drwr__set_open(true));
    setShowSubItems(true);
    showSubItems && isSelected && setShowSubItems(false);
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
              style={{
                marginRight: "16px",
                width: "20px",
                height: "20px",
              }}
            />
            {isDrwrOpened && (
              <Typography
                fontSize="14px"
                sx={{
                  color: isSelected ? "#21B8F9" : theme.palette.text.primary,
                  userSelect: "none",
                }}
              >
                {title}
              </Typography>
            )}
          </Box>
          {/* last element : Icon || Badge */}
          {(hasBadge && isDrwrOpened && (
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
            (childs && isDrwrOpened && (
              <img
                src={
                  showSubItems && isSelected ? ARROW_UP_PATH : ARROW_DOWN_PATH
                }
                alt="expand menu item icon"
                width="11.67px"
                height="6.67px"
                style={{ marginRight: "16px", userSelect: "none" }}
              />
            ))}
        </Box>
      </div>
      {/* subItems */}
      {childs && (
        <Box
          display={showSubItems && isSelected ? "flex" : "none"}
          flexDirection="column"
          sx={{
            paddingLeft: "59px",
            paddingTop: "20px",
            bgcolor: "#E9F8FE",
          }}
        >
          {childs.map((item, index) => (
            <Box
              key={`child${index}`}
              sx={{
                marginBottom: "20px",
              }}
            >
              <Typography fontSize="14px" sx={{ userSelect: "none" }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
