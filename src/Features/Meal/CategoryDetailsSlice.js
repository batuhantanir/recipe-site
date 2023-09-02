import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  meals: [],
};

export const getCategoryDetails = createAsyncThunk(
  "getCategoryDetails",
  async (path) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${path}`
    );

    return res.data;
  }
);

export const CategoryDetailsSlice = createSlice({
  name: "CategoryDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryDetails.fulfilled, (state, { payload }) => {
      state.meals = payload;
    });
  },
});

export const { data } = CategoryDetailsSlice.actions;

export default CategoryDetailsSlice.reducer;
