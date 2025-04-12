import { NoteCategoryTypes, NoteStructure } from "../../CommonInterfaces";

function compare2Notes(a: NoteStructure, b: NoteStructure) {
  const categoryA = a.category === NoteCategoryTypes.NONE ? "" : a.category;
  const categoryB = b.category === NoteCategoryTypes.NONE ? "" : b.category;

  return categoryA > categoryB
    ? 1
    : categoryA < categoryB
      ? -1
      : a.title > b.title
        ? 1
        : a.title < b.title
          ? -1
          : 0;
}

function sortNotes(arr: NoteStructure[]) {
  return arr.sort(compare2Notes);
}

export default sortNotes;
