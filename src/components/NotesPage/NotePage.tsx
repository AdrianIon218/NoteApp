import { Navigate, useParams } from "react-router-dom";
import NoteSidebar from "./NoteSidebar";
import NoteBox from "./NoteBox";
import { NotePagesAvailable } from "../../CommonInterfaces";
import { Grid2, styled } from "@mui/material";

const optionsAvailable: string[] = Object.values(NotePagesAvailable);

const NotePageCtn = styled(Grid2)(({ theme }) => ({
  padding: "2rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "2rem",

  [theme.breakpoints.down("lg")]: {
    paddingTop: 0,
    gap: "3rem",
  },
}));

export default function NotePage() {
  const { option } = useParams();

  if (option === undefined || !optionsAvailable.includes(option)) {
    return <Navigate replace to={"/page-not-found"} />;
  }

  return (
    <NotePageCtn className="note-container">
      <NoteSidebar option={option} />
      <NoteBox option={option} />
    </NotePageCtn>
  );
}
