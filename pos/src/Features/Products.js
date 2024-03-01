import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "showProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const res_data = await response.json();
      console.log(res_data);
      return res_data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(
        getProducts.rejected,
        (state, action) => (state.error = action.payload.message)
      );
  },
});

export default productsSlice.reducer;
