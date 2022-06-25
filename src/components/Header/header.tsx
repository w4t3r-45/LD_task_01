import React from "react";
import { HeaderType } from "../../@types/headerTypes";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Badge,
  Button,
  useTheme,
} from "@mui/material";
import { ElectricityIcon } from "../icons";
import { useDrawerContext } from "../../CONTEXT";

export const Header: React.FC<HeaderType> = ({ title }: HeaderType) => {
  // get drawer context isopened value
  const { isDrwrOpened } = useDrawerContext();
  // access MUI theme
  const theme = useTheme();
  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid #00000013",
        marginLeft: "255px",
        padding: "0 17px",
      }}
    >
      <Toolbar>
        {/* this box is used to keep content beside Drawer not under it */}
        <Box
          sx={{
            marginLeft: isDrwrOpened ? "250px" : "50px",
            transition: "all 200ms ease-out",
          }}
        />
        <Box display="flex" justifyContent="space-between" flexGrow="1">
          <Typography
            variant="body1"
            fontSize="17px"
            fontWeight="500"
            color={theme.palette.text.secondary}
          >
            {title}
          </Typography>
          <Badge color="error" badgeContent={15}>
            <Button sx={{ textTransform: "none", padding: 0 }}>
              <ElectricityIcon
                color={theme.palette.text.secondary}
                style={{ marginRight: "7px" }}
              />
              <Typography variant="body1" color={theme.palette.text.secondary}>
                What’s new
              </Typography>
            </Button>
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
