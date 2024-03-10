import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "",
};

export const getPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { category, sortBy, order, search, page } = params;

    const { data } = await axios.get(
      `https://65ce231ac715428e8b400b24.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${page}&limit=4`
    );

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(getPizzas.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(getPizzas.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const pizzaSelector = (state) => state.pizza;
export const getPizzaByIdSelector = (id) => (state) =>
  state.cart.items.find((obj) => obj.id === id);

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
