import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state: any, action: any) {
      const existingProduct = state.find(
        (product: any) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state: any, action: any) {
      return state.filter((product: any) => product.id !== action.payload);
    },
    decrease(state: any, action: any) {
      const existingProduct = state.find(
        (product: any) => product.id === action.payload
      );

      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          return state.filter((product: any) => product.id !== action.payload);
        }
      }
    },
  },
});

export const { add, remove, decrease } = cartSlice.actions;
export default cartSlice.reducer;
