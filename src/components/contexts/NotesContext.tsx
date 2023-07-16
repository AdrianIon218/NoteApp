import { createContext } from "react";
import useLocalStorage from "../CustomedComponents/useLocalStorage";
import { NoteStructure, INoteContext } from "../stylingStructures";

export const NotesContext = createContext<INoteContext>({
  addNote(newNote: NoteStructure) {},
  getNotes() {
    return [];
  },
  deleteNoteById(id: string) {},
  modifyNote(note: NoteStructure) {},
});

export default function NotesContextProvider(props: any) {
  const notes: {
    value: NoteStructure[];
    setValue: (newNote: NoteStructure[]) => void;
  } = useLocalStorage("notes", []);

  const addNewNote = (newNote: NoteStructure) => {
    notes.value.push(newNote);
    notes.setValue([...notes.value]);
  };

  const getAllNotes = () => {
    return notes.value;
  };

  const deleteNoteById = (id: string) => {
    const indexNoteToDelete = notes.value.findIndex((item) => item.id === id);
    if (indexNoteToDelete !== -1) {
      notes.value.splice(indexNoteToDelete, 1);
      notes.setValue([...notes.value]);
    }
  };

  const modifyNote = (note: NoteStructure) => {
    const indexNoteToEdit = notes.value.findIndex(
      (item) => item.id === note.id,
    );
    if (indexNoteToEdit !== -1) {
      notes.value[indexNoteToEdit].title = note.title;
      notes.value[indexNoteToEdit].categorySelected = note.categorySelected;
      notes.value[indexNoteToEdit].text = note.text;
      notes.setValue([...notes.value]);
    }
  };

  const currentContext: INoteContext = {
    addNote: addNewNote,
    getNotes: getAllNotes,
    deleteNoteById: deleteNoteById,
    modifyNote: modifyNote,
  };

  return (
    <NotesContext.Provider value={currentContext}>
      {props.children}
    </NotesContext.Provider>
  );
}