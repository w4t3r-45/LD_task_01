import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { OwnTheme } from "./styles/muiCustomTheme";
import { Dashboard } from "./views/dashboard";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ThemeProvider theme={OwnTheme}>
        <Dashboard />
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
