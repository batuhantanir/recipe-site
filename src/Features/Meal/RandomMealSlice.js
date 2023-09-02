import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  randomMeal: [],
};

export const getRandomMeal = createAsyncThunk("getRandomMeal", async () => {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  return res.data.meals[0];
});

export const randomMealSlice = createSlice({
  name: "randomMeal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomMeal.fulfilled, (state, { payload }) => {
      state.randomMeal = payload;
    });
  },
});

export const { data } = randomMealSlice.actions;

export default randomMealSlice.reducer;
