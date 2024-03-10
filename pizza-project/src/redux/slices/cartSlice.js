import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      let findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((acc, obj) => {
        return (acc += obj.price * obj.count);
      }, 0);
    },

    minusItem(state, action) {
      let findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem.count === 1) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.totalPrice -= findItem.price;
      } else {
        findItem.count -= 1;
        state.totalPrice -= findItem.price;
      }
    },

    removeItem(state, action) {
      let findItem = state.items.find((obj) => obj.id === action.payload);

      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice -= findItem.price * findItem.count;
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state) => state.cart;

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
