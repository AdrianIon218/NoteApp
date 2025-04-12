import { configureStore } from "@reduxjs/toolkit";
import categoryReducer, { replaceCategory } from "./categorySlice";
import notesReducer, { replaceAllNotesCategory } from "./notesSlice";

export const replaceCategoryInNotes =
  (target: string, newCategory: string) => (dispatch: AppDispatch) => {
    dispatch(replaceCategory(target, newCategory));
    dispatch(replaceAllNotesCategory(target, newCategory));
  };

const store = configureStore({
  reducer: {
    category: categoryReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
