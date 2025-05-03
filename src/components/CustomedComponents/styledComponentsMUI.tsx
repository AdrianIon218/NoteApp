import { Stack, styled } from "@mui/material";

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
