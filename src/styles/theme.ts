import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.6);",
        },
      },
    },
  },
});

export default theme;
