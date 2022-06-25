import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { OwnTheme } from "./styles/muiCustomTheme";
import { Dashboard } from "./views/dashboard";
import { DrawerContextProvider } from "./CONTEXT";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ThemeProvider theme={OwnTheme}>
        <DrawerContextProvider>
          <Dashboard />
        </DrawerContextProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
