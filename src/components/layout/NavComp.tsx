import { Box, Grid2, MenuItem, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const navPaths = [
  { path: "notes", navName: "Notes" },
  { path: "settings", navName: "Settings" },
  { path: "contact", navName: "Contact" },
];

const CustomNavContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  padding: theme.spacing(1),
  paddingTop: theme.spacing(1.1),
  paddingDown: theme.spacing(1.1),
  display: "flex",
  alignItem: "center",
  gap: "2rem",
  borderBottomLeftRadius: "5%",
  borderBottomRightRadius: "5%",
  borderBottom: "2px solid blue",
  borderBottomColor: theme.palette.customBlue.dark,
  backgroundColor: theme.palette.customBlue.main,
  color: theme.palette.customBlue.light,
  transition: "box-shadow 0.7s",

  "@media (pointer:fine)": {
    "&:hover": {
      boxShadow: "0 3px 10px 3px #777",
    },
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    paddingBottom: "1em",
    alignItems: "center",
    gap: "1rem",
  },
}));

export default function Navcomp() {
  const navElements = navPaths.map((item) => {
    return (
      <MenuItem component={NavLink} key={item.navName} to={item.path}>
        {item.navName}
      </MenuItem>
    );
  });

  return (
    <CustomNavContainer as="nav" role="menu">
      <MenuItem
        disabled
        sx={{
          "&.Mui-disabled": {
            opacity: 1,
            height: "3em",
            userSelect: "none",
          },
        }}
        component={Grid2}
      >
        <img src="./note-header.png" className="logo" alt="Note" />
      </MenuItem>
      <Box
        role="group"
        sx={(style) => ({
          display: "flex",
          flex: 1,
          justifyContent: "space-around",

          [style.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        })}
      >
        {navElements}
      </Box>
    </CustomNavContainer>
  );
}
