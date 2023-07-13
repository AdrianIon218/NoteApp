import { NoteStructure } from "../stylingStructures";

function useSortNotes(arr: NoteStructure[]) {
  function compare2Notes(a: NoteStructure, b: NoteStructure) {
    return a.categorySelected > b.categorySelected
      ? 1
      : a.categorySelected < b.categorySelected
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
