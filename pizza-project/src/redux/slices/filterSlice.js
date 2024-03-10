import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSortInfo(state, action) {
      state.sort = action.payload;
    },

    setPage(state, action) {
      state.pageCount = action.payload;
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },

    setFilter(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.pageCount = Number(action.payload.page);
      state.sort = action.payload.sort;
    },
  },
});

export const filterSelector = (state) => state.filter;
export const filterSortSelector = (state) => state.filter.sort;

export const {
  setCategoryId,
  setSortInfo,
  setPage,
  setSearchValue,
  setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
