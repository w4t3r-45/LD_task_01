import { createTheme } from "@mui/material";

// used to change font family
// we can change as much properties as we need
// see here : https://mui.com/material-ui/customization/default-theme/#main-content

export const OwnTheme = createTheme({
  palette: {
    success: {
      main: "#00C48C",
      contrastText: "#fff",
    },
    text: {
      primary: "#233B53",
    },
  },
  typography: {
    fontFamily: '"Noto Sans HK" , "Helevetica" , "Arial" , sans-serif ',
  },
});
