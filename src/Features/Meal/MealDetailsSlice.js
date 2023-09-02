import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  meal: [],
};

export const getMealDetails = createAsyncThunk(
  "getMealDetails",
  async (path) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${path}`
    );

    return res.data;
  }
);

export const MealDetailsSlice = createSlice({
  name: "MealDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMealDetails.fulfilled, (state, { payload }) => {
      state.meal = payload;
    });
  },
});

export const { data } = MealDetailsSlice.actions;

export default MealDetailsSlice.reducer;
