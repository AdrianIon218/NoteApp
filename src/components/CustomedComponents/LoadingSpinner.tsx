import { CircularProgress, Grid2 } from "@mui/material";

export default function LoadingSpinner() {
  return (
    <Grid2 container justifyContent="center">
      <CircularProgress size={40} thickness={4} />
    </Grid2>
  );
}
