export type NoteStructure = {
  title: string;
  category: String;
  text: string;
  id: string;
};

export enum NotePagesAvailable {
  VIEW_NOTES = "view-notes",
  CREATE_NOTE = "create-note",
  EDIT_NOTES = "edit-notes",
}

export enum NoteCategoryTypes {
  NONE = "none",
  IMPORTANT = "important",
}

export type ReplaceCategoryPayload = { target: string; newCategory: string };

export interface INoteContext {
  addNote(newNote: NoteStructure): void;
  getNotes(): NoteStructure[];
  deleteNoteById(id: string): void;
  modifyNote(note: NoteStructure): void;
}

export interface ICategoryContext {
  getCategories: () => string[];
  addCategory: (newcategory: string) => boolean;
  deleteCategory: (category: string) => boolean;
  replaceCategory: (_: string, __: string) => boolean;
}

export interface ISelectOptionMethods {
  resetSelectValue(): void;
}
