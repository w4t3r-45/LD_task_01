import { ThemeProvider } from "@mui/material";
import { OwnTheme } from "./styles/muiCustomTheme";
import { Dashboard } from "./views/dashboard";

function App() {
  return (
    <ThemeProvider theme={OwnTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
