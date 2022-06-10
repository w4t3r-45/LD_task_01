import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { SideMenu } from "../components/sidemenu";
import { Header } from "../components/header";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
    console.dir(SideMenu);
  }, []);

  return (
    <Box display="flex">
      <SideMenu open={open} setOpen={setOpen} />
      <Box>
        {/* <button onClick={() => setOpen(true)}>hello world</button> */}
        <Header title="Dashboard" isDrawerOpened={open} />
      </Box>
    </Box>
  );
};
