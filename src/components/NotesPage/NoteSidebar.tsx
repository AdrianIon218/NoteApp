import { useId } from "react";
import { Link } from "react-router-dom";
import { NotePagesAvailable } from "../../CommonInterfaces";
import { Grid2, styled } from "@mui/material";

export const enum ButtonSelected {
  viewNotes,
  createNote,
  editNote,
}

const sideBarElements = [
  { path: NotePagesAvailable.VIEW_NOTES, navTitle: "My Notes" },
  { path: NotePagesAvailable.CREATE_NOTE, navTitle: "New Note" },
  { path: NotePagesAvailable.EDIT_NOTES, navTitle: "Edit Notes" },
];

const NoteAside = styled(Grid2)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "1em",
  alignItems: "center",
  marginTop: "3em",

  "& a": {
    color: "white",
    textDecoration: "none",
    fontSize: theme.spacing(2.5),
    padding: ".3rem .5rem",
    fontWeight: 700,
    border: ".2rem solid transparent",
    borderRadius: ".4rem",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    transition: "all .5s, box-shadow .7s",
    backgroundColor: theme.palette.customBlue.dark,
  },

  "& a.active": {
    pointerEvents: "none",
    backgroundColor: "white",
    color: theme.palette.customBlue.dark,
  },

  "& a:hover": {
    boxShadow:
      " rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  },

  [theme.breakpoints.down("lg")]: {
    marginTop: 0,
  },
}));

function NoteSidebar({ option }: { option: string }) {
  const listID = useId();

  const sideBar = sideBarElements.map((item, index) => (
    <Link
      className={option === item.path ? "active" : ""}
      to={"/notes/" + item.path}
      key={`${listID}-${index}`}
    >
      {item.navTitle}
    </Link>
  ));

  return <NoteAside>{sideBar}</NoteAside>;
}

export default NoteSidebar;
