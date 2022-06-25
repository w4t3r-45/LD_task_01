import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { SideMenu } from "../components/sidemenu";
import { Header } from "../components/Header/header";
import { DashboardWelcome } from "../components/DashboardWelcome/dashboardWelcome";
import { CardsContainer } from "../components/CardsContainer/cardsContainer";
import {
  ExtensionsContextProvider,
  NewsContextProvider,
  useDrawerContext,
} from "../CONTEXT";
import { useDrawerActions } from "../CONTEXT/DrawerContext/actions";

export const Dashboard = () => {
  const { Drwr__set_open } = useDrawerActions();
  const { dispatch } = useDrawerContext();
  useEffect(() => {
    dispatch(Drwr__set_open(true));
  }, []);

  return (
    <Box display="flex">
      <SideMenu />
      <Header title="Dashboard" />
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
