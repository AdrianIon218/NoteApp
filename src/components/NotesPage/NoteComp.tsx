import { Navigate, useParams } from "react-router-dom";
import NoteNav from "./NoteNav";
import NoteBox from "./NoteBox";
import { NotePagesAvailable } from "../../CommonInterfaces";
import { Grid2 } from "@mui/material";

const optionsAvailable: string[] = Object.values(NotePagesAvailable);

export default function NoteComp() {
  const { option } = useParams();

  if (option === undefined || !optionsAvailable.includes(option)) {
    return <Navigate replace to={"/page-not-found"} />;
  }

  return (
    <Grid2 className="note-container">
      <NoteNav option={option} />
      <NoteBox option={option} />
    </Grid2>
  );
}
