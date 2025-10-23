import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

const preloadedState = {
  cart: JSON.parse(
    localStorage.getItem("cart") || '{"items":[],"total":0,"totalQuantity":0}',
  ),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
