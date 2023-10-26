export type NoteStructure = {
  title: string;
  category: string;
  text: string;
  id: string;
};

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

export const categoryValues = ["none", "important"];

export interface IDropDownMethods {
  getSelectValue(): string;
  resetSelectValue(): void;
  setValue(value: string): void;
  updateCategory(): void;
  blockCategories(arr: string[]): void;
}
