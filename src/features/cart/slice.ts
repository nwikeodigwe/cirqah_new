import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: string;
  type?: string;
  name?: string;
  amount: number;
  number: number;
};

export type CartState = {
  products: Product[];
};

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.products.find((p) => p.id === action.payload.id);

      if (existing) {
        existing.amount += action.payload.amount / existing.amount;
        existing.number += 1;
      } else {
        state.products.push(action.payload);
      }
    },
    decreaseProductInCart: (state, action: PayloadAction<string>) => {
      const existing = state.products.find((p) => p.id === action.payload);

      if (existing) {
        existing.amount -= existing.amount / existing.number;
        existing.number -= 1;

        if (existing.number <= 0) {
          state.products = state.products.filter(
            (p) => p.id !== action.payload
          );
        }
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  decreaseProductInCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
