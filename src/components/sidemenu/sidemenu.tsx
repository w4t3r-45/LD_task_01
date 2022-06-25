import React, { useState } from "react";
import { Box, IconButton, Divider } from "@mui/material";
import { LOGO_PATH } from "../../helpers/iconsPaths";
import { MenuIcon2 } from "../icons";
import { SIDE_MENU_CONFIG } from "./SIDE_MENU_CONFIG";
import { SideMenuItem } from "./sidemenuItem";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { useDrawerContext } from "../../CONTEXT";
import { useDrawerActions } from "../../CONTEXT/DrawerContext/actions";

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
  isDrwrOpened: boolean,
  dispatch: any,
  Drwr__set_open: any,
  showSubItems: boolean,
  setShowSubItems: React.Dispatch<React.SetStateAction<boolean>>
) => {
  showSubItems && setShowSubItems(!showSubItems);
  dispatch(Drwr__set_open(!isDrwrOpened));
};

export const SideMenu: React.FC = () => {
  // context state
  const { isDrwrOpened, dispatch } = useDrawerContext();
  const { Drwr__set_open } = useDrawerActions();

  // set the selected item to map index "to change its color" (in reality we use route path and another indicator)
  const [selected, setSelected] = useState(0);

  // hoisted state for showing subitems
  const [showSubItems, setShowSubItems] = useState(false);

  return (
    <Drawer variant="permanent" open={isDrwrOpened}>
      {/* drawer header */}
      <Box
        display="flex"
        justifyContent={isDrwrOpened ? "space-between" : "center"}
        mb={4}
        sx={{ padding: "29px 20px 0 20px" }}
      >
        {isDrwrOpened && <img src={LOGO_PATH} alt="website logo" />}
        <IconButton
          onClick={() =>
            handleDrwrStatus(
              isDrwrOpened,
              dispatch,
              Drwr__set_open,
              showSubItems,
              setShowSubItems
            )
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
            <div onClick={() => setSelected(index)} key={`MItemWrpr${index}`}>
              <SideMenuItem
                title={item.title || ""}
                Icon={item.Icon}
                hasBadge={item.hasBadge}
                badgeContent={item.badgeContent}
                route={item.route}
                childs={item.childs}
                isSelected={selected === index}
                showSubItems={showSubItems}
                setShowSubItems={setShowSubItems}
              />
            </div>
          )) ||
          (item.isSelect && isDrwrOpened && (
            <Box key={`slctwrapr${index}`} style={{ marginTop: "60px" }}>
              <CustomSelect title={item.title} data={item.items} />
            </Box>
          ))
      )}
    </Drawer>
  );
};
