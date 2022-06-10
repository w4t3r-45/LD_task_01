import React from "react";
import { HeaderType } from "../@types/headerTypes";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export const Header: React.FC<HeaderType> = ({
  title,
  isDrawerOpened,
}: HeaderType) => {
  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid #000",
        marginLeft: "255px",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            marginLeft: isDrawerOpened ? "250px" : "50px",
            transition: "all 200ms ease-out",
          }}
        >
          <Typography variant="body1" color="ThreeDShadow">
            {title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
