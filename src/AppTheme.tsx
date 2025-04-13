import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customBlue: PaletteColor;
    customBackground: PaletteColor;
  }
  interface PaletteOptions {
    customBlue: PaletteColorOptions;
    customBackground: PaletteColorOptions;
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
    customBackground: {
      main: "rgb(27, 145, 219)",
      light: "rgb(172, 216, 243)",
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
