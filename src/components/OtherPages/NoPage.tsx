import { Stack, Typography } from "@mui/material";
import { LightBlueCtnCustom } from "../CustomedComponents/styledComponentsMUI";

function NoPage() {
  return (
    <LightBlueCtnCustom>
      <Stack rowGap={2} alignItems="center">
        <Typography
          variant="h2"
          sx={{
            textShadow: "0px 0px 3px black",
          }}
        >
          &#128533;
        </Typography>
        <Typography variant="h5" fontWeight={600} textAlign="center">
          Sorry, the page you accessed does not exist{" "}
          <span className="spanRed">!</span>
        </Typography>
      </Stack>
    </LightBlueCtnCustom>
  );
}

export default NoPage;
