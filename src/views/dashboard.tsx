import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { SideMenu } from "../components/sidemenu";
import { Header } from "../components/Header/header";
import { DashboardWelcome } from "../components/DashboardWelcome/dashboardWelcome";
import { CardsContainer } from "../components/CardsContainer/cardsContainer";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
    console.dir(SideMenu);
  }, []);

  return (
    <Box display="flex">
      <SideMenu open={open} setOpen={setOpen} />
      <Header title="Dashboard" isDrawerOpened={open} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div style={{ height: "60px" }} />
        <DashboardWelcome />
        <CardsContainer />
      </Box>
    </Box>
  );
};
