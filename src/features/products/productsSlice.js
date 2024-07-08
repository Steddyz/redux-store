// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { BASE_URL } from "../../utils/constant";
// import axios from "axios";

// export const getCategories = createAsyncThunk(
//   "categories/getCategories",
//   async (undefined, thunkApi) => {
//     try {
//       const res = await axios(`${BASE_URL}/categories`);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkApi.rejectWithValue(err);
//     }
//   }
// );

// const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: {
//     list: [],
//     isLoading: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getCategories.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getCategories.fulfilled, (state, { payload }) => {
//       state.list = payload;
//       state.isLoading = true;
//     });
//     builder.addCase(getCategories.rejected, (state) => {
//       state.isLoading = false;
//     });
//   },
// });

// export default categoriesSlice.reducer;
