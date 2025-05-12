import { Box, Grid2, Stack, styled, Typography } from "@mui/material";

export const LayoutGridCustom = styled(Grid2)(({ theme }) => ({
  color: theme.palette.customBlue.dark,
  minHeight: "100vh",
  margin: 0,
  padding: theme.spacing(1),
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  border: "2px solid currentColor",
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  rowGap: "3rem",
  backgroundColor: "white",
  background: `linear-gradient(50deg, ${theme.palette.primaryBackground.main} 0%, ${theme.palette.primaryBackground.main} 45%, ${theme.palette.primaryBackground.light} 45%  )`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    paddingTop: theme.spacing(37),
    background: `radial-gradient(circle, ${theme.palette.primaryBackground.light} 0%, ${theme.palette.primaryBackground.main} 100%)`,
  },
}));

export const LightBlueCtnCustom = styled(Grid2)(({ theme }) => ({
  backgroundColor: theme.palette.secondaryBackground.light,
  marginLeft: "auto",
  marginRight: "auto",
  width: "60%",
  padding: "6rem 1rem",
  paddingBottom: "8rem",
  border: "3px solid",
  borderRadius: ".6rem",
}));

export const GridPanelCustom = styled(Stack)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "70%",
  gap: "0.5rem",
  padding: theme.spacing(3),
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  backgroundColor: theme.palette.secondaryBackground.light,
  borderRadius: ".5rem",
  border: ".2rem solid black",
  borderColor: theme.palette.customBlue.dark,

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const GridPanelLightBlueCustom = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.2),
  paddingBottom: theme.spacing(10),
  borderRadius: theme.spacing(1.2),
  border: "3px solid black",
  borderColor: theme.palette.customBlue.dark,
  backgroundColor: "rgba(190, 225, 246, .55)",
  gap: "1rem",
}));

export const FieldContainer = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  flexWrap: "wrap",
});

export const ErrorFieldMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  height: "1.2rem",
  fontSize: ".9rem",
}));
