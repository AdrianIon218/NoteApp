import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteStructure, ReplaceCategoryPayload } from "../CommonInterfaces";

const initialState: { notes: NoteStructure[] } = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteStructure>) {
      state.notes.push(action.payload);
    },
    deleteNoteById(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    modifyNote(state, action: PayloadAction<NoteStructure>) {
      state.notes = state.notes.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );
    },
    deleteAllNotes(state, _action) {
      state.notes = [];
    },
    replaceAllNotesCategory: {
      prepare: function (target: string, newCategory: string) {
        return {
          payload: { target, newCategory },
        };
      },
      reducer(state, action: PayloadAction<ReplaceCategoryPayload>) {
        state.notes = state.notes.map((item) =>
          item.category !== action.payload.target
            ? item
            : { ...item, category: action.payload.newCategory }
        );
      },
    },
  },
});

export const { addNote, deleteNoteById, modifyNote, replaceAllNotesCategory } =
  notesSlice.actions;

export default notesSlice.reducer;
