import { NoteStructure } from "../stylingStructures";

function useSortNotes(arr: NoteStructure[]) {
  function compare2Notes(a: NoteStructure, b: NoteStructure) {
    const categoryA = a.category === "none" ? "" : a.category;
    const categoryB = b.category === "none" ? "" : b.category;

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

  return arr.sort(compare2Notes);
}

export default useSortNotes;
