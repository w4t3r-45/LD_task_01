import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { SideMenu } from "../components/sidemenu";
import { Header } from "../components/Header/header";
import { DashboardWelcome } from "../components/DashboardWelcome/dashboardWelcome";
import { CardsContainer } from "../components/CardsContainer/cardsContainer";
import { ExtensionsContextProvider, NewsContextProvider } from "../CONTEXT";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
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
        <NewsContextProvider>
          <ExtensionsContextProvider>
            <CardsContainer />
          </ExtensionsContextProvider>
        </NewsContextProvider>
      </Box>
    </Box>
  );
};
