import { createSlice } from "@reduxjs/toolkit";
import products from "@/json/products-details.json";

const initialState: any = products;
const productSlice = createSlice({
  name: "filteredProduct",
  initialState,
  reducers: {
    searchProducts(state: any, action: any) {
      const searchTerm = (action?.payload || "").toLowerCase();
      if (!searchTerm) {
        return initialState;
      }
      return products?.filter((product: any) =>
        product?.title?.toLowerCase()?.includes(searchTerm)
      );
    },
  },
});

export const { searchProducts } = productSlice.actions;
export default productSlice.reducer;
