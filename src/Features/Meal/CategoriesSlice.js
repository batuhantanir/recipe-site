import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Categories: [],
};

export const getCategories = createAsyncThunk("getCategories", async () => {
  const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
  return res.data.categories;
});

export const CategoriesSlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.Categories = payload;
    });
  },
});

export const { data } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
