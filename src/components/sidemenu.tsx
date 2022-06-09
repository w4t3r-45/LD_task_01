import { Drawer, Box } from "@mui/material";
import { DrawerStyle } from "../styles/muiCustomStyles";

export const SideMenu = () => {
  return (
    <Drawer
      open={true}
      onClose={() => console.log("closing the drawer")}
      sx={DrawerStyle}
    >
      <p>item one</p>
    </Drawer>
  );
};
