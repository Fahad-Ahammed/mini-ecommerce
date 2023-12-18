import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state: any, action: any) {
      const existingProduct = state?.products?.find(
        (product: any) => product.id === action.payload.id
      );
      if (existingProduct) {
        return;
      } else {
        state?.products?.push({ ...action.payload, quantity: 1 });
        state.totalPrice = calculateTotalPrice(state.products);
      }
    },

    remove(state: any, action: any) {
      const filteredProducts = state.products.filter(
        (product: any) => product.id !== action.payload
      );
      state.products = filteredProducts;
      state.totalPrice = calculateTotalPrice(state.products);
    },

    decrement(state: any, action: any) {
      const product = state?.products?.find(
        (product: any) => product.id === action.payload?.id
      );
      if (product) {
        if (product.quantity == 1) {
          const filteredProducts = state?.products?.filter(
            (product: any) => product.id !== action.payload?.id
          );
          state.products = filteredProducts;
          state.totalPrice = calculateTotalPrice(state.products);
        }
        product.quantity -= 1;
        state.totalPrice = calculateTotalPrice(state?.products);
      }
    },

    increment(state: any, action) {
      const product = state?.products?.find(
        (product: any) => product.id === action.payload?.id
      );
      if (product) {
        product.quantity += 1;
        state.totalPrice = calculateTotalPrice(state?.products);
      }
    },
  },
});

const calculateTotalPrice = (products: any) => {
  const total = products?.reduce((acc: any, product: any) => {
    const discountedPrice =
      product.price * (1 - product.discountPercentage / 100);
    const productTotal = discountedPrice * product.quantity;
    return acc + productTotal;
  }, 0);

  return total.toFixed(2);
};

export const { add, remove, decrement, increment } = cartSlice.actions;
export default cartSlice.reducer;
