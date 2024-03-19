import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
  title: string;
  sortTitle: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
};

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  pageCount: 1,
  sort: {
    title: "популярности",
    sortTitle: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setSortInfo(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },

    setPage(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setFilter(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.pageCount = Number(action.payload.page);
        state.categoryId = Number(action.payload.categoryId);
        state.sort = action.payload.sort;
      } else {
        state.categoryId = Number(action.payload.categoryId);
        state.pageCount = Number(action.payload.page);
        state.sort = action.payload.sort;
      }
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;
export const filterSortSelector = (state: RootState) => state.filter.sort;

export const {
  setCategoryId,
  setSortInfo,
  setPage,
  setSearchValue,
  setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
