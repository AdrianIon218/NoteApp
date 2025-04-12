import { Box, Button, styled, Typography } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

const CustomFooter = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  padding: theme.spacing(2),
  color: theme.palette.customBlue.dark,
  overflow: "hidden",
  borderTopLeftRadius: "15%",
  borderTopRightRadius: "15%",
  transition: "box-shadow 0.7s",
  borderTop: "2px solid blue",
  borderTopColor: theme.palette.customBlue.dark,
  backgroundColor: theme.palette.customBlue.contrastText,
  background: `linear-gradient(90deg, rgb(197, 222, 230) 0%, ${theme.palette.customBlue.main} 100%)`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "1rem",

  "@media (pointer:fine)": {
    "&:hover": {
      boxShadow: "0 3px 10px 3px #777",
    },
  },

  [theme.breakpoints.down(400)]: {
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "1em",
  },
}));

export default function Footer() {
  return (
    <CustomFooter as="footer">
      <Typography
        sx={{
          fontWeight: 900,
          fontFamily: "unset",
          fontSize: "1.5rem",
        }}
      >
        Notes App
      </Typography>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography
          sx={(styles) => ({
            fontWeight: 700,
            fontSize: "1.1rem",
            color: styles.palette.customBlue.contrastText,

            [styles.breakpoints.down(400)]: {
              color: styles.palette.customBlue.dark,
              fontWeight: 900,
            },
          })}
        >
          &copy;Ion Adrian-Gabriel
        </Typography>
        <Button
          sx={{
            padding: 0.2,
            width: "1rem",
            minWidth: "1.4rem",
            display: "flex",
            justifyContent: "center",

            "& .MuiButton-startIcon": {
              margin: "auto",
              padding: 0,
            },
          }}
          variant="contained"
          color="primary"
          startIcon={<LinkedIn />}
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          href="https://www.linkedin.com/in/adrian-gabriel-ion-05412a195/"
        />
      </Box>
    </CustomFooter>
  );
}
