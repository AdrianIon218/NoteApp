import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteCategoryTypes, ReplaceCategoryPayload } from "../CommonInterfaces";

const initialState: { categories: string[] } = {
  categories: Object.values(NoteCategoryTypes),
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory(state, action) {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
    replaceCategory: {
      reducer: (state, action: PayloadAction<ReplaceCategoryPayload>) => {
        const categoryToBeReplacedIndex = state.categories.findIndex(
          (category) => category === action.payload.target
        );
        if (
          categoryToBeReplacedIndex !== -1 &&
          !state.categories.includes(action.payload.newCategory)
        ) {
          state.categories[categoryToBeReplacedIndex] =
            action.payload.newCategory;
        }
      },
      prepare: (target: string, newCategory: string) => {
        return {
          payload: {
            target,
            newCategory,
          },
        };
      },
    },
    deleteAllCategories(state, _action) {
      state.categories = Object.values(NoteCategoryTypes);
    },
  },
});

export const { addCategory, deleteCategory, replaceCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
