import React, { useState } from "react";
import { Box, IconButton, Divider } from "@mui/material";
import { LOGO_PATH } from "../../helpers/iconsPaths";
import { MenuIcon2 } from "../icons";
import { SIDE_MENU_CONFIG } from "./SIDE_MENU_CONFIG";
import { SideMenuType } from "../../@types/drawerRelatedTypes";
import { SideMenuItem } from "../sidemenuItem";
import { CustomSelect } from "../CustomSelect";

// ############################################
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 255;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "72px",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const handleDrwrStatus = (
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  showSubItems: boolean,
  setShowSubItems: React.Dispatch<React.SetStateAction<boolean>>
) => {
  showSubItems && setShowSubItems(!showSubItems);
  setOpen(!open);
};

// ############################################

export const SideMenu: React.FC<SideMenuType> = ({
  open,
  setOpen,
}: SideMenuType) => {
  // set the selected item to map index "to change its color" (in reality we use route path and another indicator)
  const [selected, setSelected] = useState(0);

  // hoisted state for showing subitems
  const [showSubItems, setShowSubItems] = useState(false);

  return (
    <Drawer variant="permanent" open={open}>
      {/* drawer header */}
      <Box
        display="flex"
        justifyContent={open ? "space-between" : "center"}
        mb={4}
        sx={{ padding: "29px 20px 0 20px" }}
      >
        {open && <img src={LOGO_PATH} alt="website logo" />}
        <IconButton
          onClick={() =>
            handleDrwrStatus(open, setOpen, showSubItems, setShowSubItems)
          }
          aria-label="close sidemenu"
          disableRipple
        >
          <MenuIcon2 />
        </IconButton>
      </Box>
      {SIDE_MENU_CONFIG.map(
        (item, index) =>
          (item.isDivider && (
            <Divider key={`devid${index}`} sx={{ margin: "20px 0" }} />
          )) ||
          (item.isMenuItem && (
            <div onClick={() => setSelected(index)}>
              <SideMenuItem
                key={`MItem${index}`}
                title={item.title || ""}
                Icon={item.Icon}
                hasBadge={item.hasBadge}
                badgeContent={item.badgeContent}
                route={item.route}
                childs={item.childs}
                isSelected={selected === index}
                isDrawerOpened={open}
                setIsDrawerOpened={setOpen}
                showSubItems={showSubItems}
                setShowSubItems={setShowSubItems}
              />
            </div>
          )) ||
          (item.isSelect && open && (
            <Box key={`hello${index}`} style={{ marginTop: "60px" }}>
              <CustomSelect title={item.title} data={item.items} />
            </Box>
          ))
      )}
    </Drawer>
  );
};
