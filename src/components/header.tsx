import React from "react";
import { HeaderType } from "../@types/headerTypes";
import { AppBar, Toolbar, Typography, Box, useTheme } from "@mui/material";

export const Header: React.FC<HeaderType> = ({
  title,
  isDrawerOpened,
}: HeaderType) => {
  // access MUI theme
  const theme = useTheme();
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
          <Typography
            variant="body1"
            fontSize="17px"
            fontWeight="500"
            color={theme.palette.text.secondary}
          >
            {title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
