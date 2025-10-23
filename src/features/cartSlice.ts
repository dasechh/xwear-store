import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity--;
        state.total -= item.price;
        state.totalQuantity--;
        if (item.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id,
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
