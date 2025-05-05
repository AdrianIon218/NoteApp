import { Box, Stack, styled, Typography } from "@mui/material";

export const GridPanelCustom = styled(Stack)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "70%",
  gap: "0.5rem",
  padding: theme.spacing(3),
  paddingTop: theme.spacing(5),

  backgroundColor: theme.palette.secondaryBackground.main,
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
