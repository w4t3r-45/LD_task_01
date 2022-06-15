import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { OwnTheme } from "./styles/muiCustomTheme";
import { Dashboard } from "./views/dashboard";
import { ExtensionsContextProvider } from "./CONTEXT";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ExtensionsContextProvider>
      <ThemeProvider theme={OwnTheme}>
        <Dashboard />
      </ThemeProvider>
      <ToastContainer />
    </ExtensionsContextProvider>
  );
}

export default App;
