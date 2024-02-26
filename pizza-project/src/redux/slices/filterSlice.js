import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setCategoryId, setSortInfo, setPage } = filterSlice.actions;

export default filterSlice.reducer;
