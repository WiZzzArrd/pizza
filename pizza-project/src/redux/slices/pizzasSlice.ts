import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type TFetchPizza = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  page: string;
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

type Pizza = {
  id: string;
  title: string;
  count: number;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
};

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export const getPizzas = createAsyncThunk<Pizza[]>(
  "pizzas/fetchPizzasStatus",
  async (params: TFetchPizza) => {
    const { category, sortBy, order, search, page } = params;
    
  
    const { data } = await axios.get(
      `https://65ce231ac715428e8b400b24.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${page}&limit=4`
    );

    return data as Pizza;
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
        state.status = Status.SUCCESS;
      })
      .addCase(getPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(getPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const pizzaSelector = (state: RootState) => state.pizza;
export const getPizzaByIdSelector = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
