import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customBlue: PaletteColor;
    primaryBackground: PaletteColor;
    secondaryBackground: PaletteColor;
  }
  interface PaletteOptions {
    customBlue: PaletteColorOptions;
    primaryBackground: PaletteColorOptions;
    secondaryBackground: PaletteColorOptions;
  }
}

let customColors = createTheme({
  palette: {
    customBlue: {
      main: "rgb(25, 133, 200)",
      light: "rgb(154, 207, 239)",
      dark: "rgb(15, 112, 172)",
      contrastText: "rgb(190, 225, 246)",
    },
    primaryBackground: {
      main: "rgb(27, 145, 219)",
      light: "rgb(172, 216, 243)",
    },
    secondaryBackground: {
      main: "rgba(118, 198, 245, 0.8)", //"rgba(70, 183, 253, 0.8)",
      light: "rgba(172, 216, 243, 0.6)",
    },
  },
});

const AppTheme = createTheme(customColors, {
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: "10%",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "1.3em",
          fontWeight: 700,
          color: "white",
          textDecoration: "none",
          userSelect: "none",
          "&.active": {
            pointerEvents: "none",
            opacity: 0.5,
          },
        },
      },
    },
  },
});

export default AppTheme;
