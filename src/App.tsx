import { ThemeProvider } from "@mui/material";
import { OwnTheme } from "./styles/muiCustomTheme";
import { Dashboard } from "./views/dashboard";
import { ExtensionsContextProvider } from "./CONTEXT";

function App() {
  return (
    <ExtensionsContextProvider>
      <ThemeProvider theme={OwnTheme}>
        <Dashboard />
      </ThemeProvider>
    </ExtensionsContextProvider>
  );
}

export default App;
