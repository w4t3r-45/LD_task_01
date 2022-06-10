import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { SideMenu } from "../components/sidemenu";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const ref = useRef();
  useEffect(() => {
    setOpen(true);
    console.dir(SideMenu);
  }, []);

  return (
    <Box display="flex">
      <SideMenu open={open} setOpen={setOpen} />
      <Box>
        <button onClick={() => setOpen(true)}>hello world</button>
      </Box>
    </Box>
  );
};
